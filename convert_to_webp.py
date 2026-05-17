#!/usr/bin/env python3
"""
convert_to_webp.py
Converts all PNG files in app/ and landing/public/ to WebP.
Requires: pip install Pillow
"""
from pathlib import Path
from PIL import Image

DIRS    = ["app", "landing/public"]
QUALITY = 85   # 0–100, 85 is a good balance of quality vs size
METHOD  = 6    # 0–6, higher = better compression but slower

def convert_dir(directory: str) -> None:
    path = Path(directory)
    if not path.exists():
        print(f"  ⚠  {directory}/ not found, skipping")
        return

    pngs = sorted(path.glob("*.png"))
    if not pngs:
        print(f"  —  {directory}/ has no PNG files")
        return

    print(f"\n📁  {directory}/")
    for png in pngs:
        webp = png.with_suffix(".webp")
        if webp.exists():
            print(f"  skip  {webp.name} (already exists)")
            continue
        with Image.open(png) as img:
            img.save(webp, "webp", quality=QUALITY, method=METHOD)
        orig_kb = png.stat().st_size / 1024
        new_kb  = webp.stat().st_size / 1024
        saving  = (1 - new_kb / orig_kb) * 100
        print(f"  ✓  {png.name:30s} → {webp.name:30s}  {orig_kb:>6.0f} KB → {new_kb:>5.0f} KB  (-{saving:.0f}%)")

if __name__ == "__main__":
    print("Converting PNGs to WebP…")
    for d in DIRS:
        convert_dir(d)
    print("\nDone! Update image src attributes to use .webp extensions.")
