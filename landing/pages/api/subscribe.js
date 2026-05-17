import { getDb } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { email, source = 'landing' } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  try {
    const db = await getDb();
    const collection = db.collection('waitlist');

    const existing = await collection.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      return res.status(200).json({ message: 'already_registered' });
    }

    await collection.insertOne({
      email: email.trim().toLowerCase(),
      source,
      createdAt: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null,
    });

    return res.status(201).json({ message: 'success' });
  } catch (err) {
    console.error('[subscribe]', err);
    return res.status(500).json({ error: 'Erro interno. Tente novamente.' });
  }
}
