/* Sprite SVG — injetado sincronamente no início do <body> */
(function () {
  var div = document.createElement('div');
  div.setAttribute('aria-hidden', 'true');
  div.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';

  var S = 'symbol', V = 'viewBox="0 0 24 24"',
      D = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' +

    /* ── NAVIGATION ─────────────────────────────── */
    '<'+S+' id="ph-squares-four" '+V+' '+D+'>' +
      '<rect x="3" y="3" width="8" height="8" rx=".5"/>' +
      '<rect x="13" y="3" width="8" height="8" rx=".5"/>' +
      '<rect x="3" y="13" width="8" height="8" rx=".5"/>' +
      '<rect x="13" y="13" width="8" height="8" rx=".5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-vault" '+V+' '+D+'>' +
      '<rect x="3" y="4" width="15" height="16" rx="1"/>' +
      '<circle cx="10.5" cy="12" r="3.5"/>' +
      '<circle cx="10.5" cy="12" r="1"/>' +
      '<path d="M10.5 8.5V10M10.5 14v1.5M7 12h1.5M12.5 12H14"/>' +
      '<rect x="18" y="10" width="3" height="4" rx=".5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-clipboard-text" '+V+' '+D+'>' +
      '<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>' +
      '<rect x="8" y="2" width="8" height="4" rx="1"/>' +
      '<path d="M8 11h8M8 15h5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-users-three" '+V+' '+D+'>' +
      '<circle cx="9" cy="7" r="3"/>' +
      '<path d="M3 21v-2a5 5 0 0110 0v2"/>' +
      '<path d="M16 3.5a3.5 3.5 0 010 7"/>' +
      '<path d="M21 21v-2a5 5 0 00-3.5-4.8"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-shield-check" '+V+' '+D+'>' +
      '<path d="M12 2l8 3.5V11c0 5.25-3.5 9-8 10-4.5-1-8-4.75-8-10V5.5z"/>' +
      '<path d="M8 12l2.5 2.5 5-5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-chart-bar" '+V+' '+D+'>' +
      '<path d="M21 21H3"/>' +
      '<rect x="4" y="13" width="4" height="8" rx=".5"/>' +
      '<rect x="10" y="7" width="4" height="14" rx=".5"/>' +
      '<rect x="16" y="10" width="4" height="11" rx=".5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-bell" '+V+' '+D+'>' +
      '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>' +
      '<path d="M13.73 21a2 2 0 01-3.46 0"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-gear" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="3"/>' +
      '<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>' +
    '</'+S+'>' +

    /* ── TOPBAR ─────────────────────────────────── */
    '<'+S+' id="ph-magnifying-glass" '+V+' '+D+'>' +
      '<circle cx="11" cy="11" r="8"/>' +
      '<path d="M21 21l-4.35-4.35"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-question" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<path d="M9 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-dots-three" '+V+' fill="currentColor" stroke="none">' +
      '<circle cx="5" cy="12" r="1.5"/>' +
      '<circle cx="12" cy="12" r="1.5"/>' +
      '<circle cx="19" cy="12" r="1.5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-dots-three-vertical" '+V+' fill="currentColor" stroke="none">' +
      '<circle cx="12" cy="5" r="1.5"/>' +
      '<circle cx="12" cy="12" r="1.5"/>' +
      '<circle cx="12" cy="19" r="1.5"/>' +
    '</'+S+'>' +

    /* ── STATUS & STATS ─────────────────────────── */
    '<'+S+' id="ph-files" '+V+' '+D+'>' +
      '<path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6M4 9H2a1 1 0 00-1 1v10a1 1 0 001 1h2"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-shield-warning" '+V+' '+D+'>' +
      '<path d="M12 2l8 3.5V11c0 5.25-3.5 9-8 10-4.5-1-8-4.75-8-10V5.5z"/>' +
      '<path d="M12 8v5M12 16h.01"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-users" '+V+' '+D+'>' +
      '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>' +
      '<circle cx="9" cy="7" r="4"/>' +
      '<path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.74"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-trend-up" '+V+' '+D+'>' +
      '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>' +
      '<polyline points="17 6 23 6 23 12"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-circle" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
    '</'+S+'>' +

    /* ── ACTIONS ────────────────────────────────── */
    '<'+S+' id="ph-download-simple" '+V+' '+D+'>' +
      '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-upload-simple" '+V+' '+D+'>' +
      '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-user-plus" '+V+' '+D+'>' +
      '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>' +
      '<circle cx="9" cy="7" r="4"/>' +
      '<line x1="19" y1="8" x2="19" y2="14"/>' +
      '<line x1="22" y1="11" x2="16" y2="11"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-trash" '+V+' '+D+'>' +
      '<polyline points="3 6 5 6 21 6"/>' +
      '<path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>' +
      '<path d="M10 11v6M14 11v6M9 6V4h6v2"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-share-network" '+V+' '+D+'>' +
      '<circle cx="18" cy="5" r="3"/>' +
      '<circle cx="6" cy="12" r="3"/>' +
      '<circle cx="18" cy="19" r="3"/>' +
      '<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>' +
      '<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-eye" '+V+' '+D+'>' +
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
      '<circle cx="12" cy="12" r="3"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-info" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<path d="M12 16v-4M12 8h.01"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-sign-in" '+V+' '+D+'>' +
      '<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>' +
      '<polyline points="10 17 15 12 10 7"/>' +
      '<line x1="15" y1="12" x2="3" y2="12"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-file-arrow-down" '+V+' '+D+'>' +
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>' +
    '</'+S+'>' +

    /* ── SECURITY ───────────────────────────────── */
    '<'+S+' id="ph-lock" '+V+' '+D+'>' +
      '<rect x="3" y="11" width="18" height="11" rx="1"/>' +
      '<path d="M7 11V7a5 5 0 0110 0v4"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-lock-key" '+V+' '+D+'>' +
      '<rect x="3" y="11" width="18" height="11" rx="1"/>' +
      '<path d="M7 11V7a5 5 0 0110 0v4"/>' +
      '<circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-prohibit" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-warning-circle" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="12" y1="8" x2="12" y2="12"/>' +
      '<line x1="12" y1="16" x2="12.01" y2="16"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-warning" '+V+' '+D+'>' +
      '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>' +
      '<line x1="12" y1="9" x2="12" y2="13"/>' +
      '<line x1="12" y1="17" x2="12.01" y2="17"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-x-circle" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="15" y1="9" x2="9" y2="15"/>' +
      '<line x1="9" y1="9" x2="15" y2="15"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-check-circle-fill" '+V+' fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>' +
      '<polyline points="22 4 12 14.01 9 11.01"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-robot" '+V+' '+D+'>' +
      '<rect x="2" y="8" width="20" height="12" rx="1"/>' +
      '<path d="M12 8V5"/>' +
      '<circle cx="12" cy="3" r="2"/>' +
      '<circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none"/>' +
      '<line x1="1" y1="14" x2="3" y2="14"/>' +
      '<line x1="21" y1="14" x2="23" y2="14"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-file-warning" '+V+' '+D+'>' +
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6M12 11v4M12 18h.01"/>' +
    '</'+S+'>' +

    /* ── USERS / ACCESS ─────────────────────────── */
    '<'+S+' id="ph-user" '+V+' '+D+'>' +
      '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>' +
      '<circle cx="12" cy="7" r="4"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-user-circle" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<circle cx="12" cy="10" r="3"/>' +
      '<path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-user-switch" '+V+' '+D+'>' +
      '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>' +
      '<circle cx="9" cy="7" r="4"/>' +
      '<path d="M22 16l-4-4 4-4"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-crown-simple" '+V+' '+D+'>' +
      '<path d="M3 18h18M5 18L3 8l5 4 4-6 4 6 5-4-2 10H5z"/>' +
    '</'+S+'>' +

    /* ── SYSTEM ─────────────────────────────────── */
    '<'+S+' id="ph-activity" '+V+' '+D+'>' +
      '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-calendar-check" '+V+' '+D+'>' +
      '<rect x="3" y="4" width="18" height="18" rx="1"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
      '<polyline points="9 16 11 18 15 14"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-calendar-blank" '+V+' '+D+'>' +
      '<rect x="3" y="4" width="18" height="18" rx="1"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-hard-drive" '+V+' '+D+'>' +
      '<line x1="22" y1="12" x2="2" y2="12"/>' +
      '<path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>' +
      '<line x1="6" y1="16" x2="6.01" y2="16"/>' +
      '<line x1="10" y1="16" x2="10.01" y2="16"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-arrow-counter-clockwise" '+V+' '+D+'>' +
      '<path d="M1 4v6h6"/>' +
      '<path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-globe" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="2" y1="12" x2="22" y2="12"/>' +
      '<path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-desktop" '+V+' '+D+'>' +
      '<rect x="2" y="3" width="20" height="14" rx="1"/>' +
      '<line x1="8" y1="21" x2="16" y2="21"/>' +
      '<line x1="12" y1="17" x2="12" y2="21"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-cpu" '+V+' '+D+'>' +
      '<rect x="4" y="4" width="16" height="16" rx="1"/>' +
      '<rect x="9" y="9" width="6" height="6"/>' +
      '<line x1="9" y1="1" x2="9" y2="4"/>' +
      '<line x1="15" y1="1" x2="15" y2="4"/>' +
      '<line x1="9" y1="20" x2="9" y2="23"/>' +
      '<line x1="15" y1="20" x2="15" y2="23"/>' +
      '<line x1="20" y1="9" x2="23" y2="9"/>' +
      '<line x1="20" y1="14" x2="23" y2="14"/>' +
      '<line x1="1" y1="9" x2="4" y2="9"/>' +
      '<line x1="1" y1="14" x2="4" y2="14"/>' +
    '</'+S+'>' +

    /* ── FILES ──────────────────────────────────── */
    '<'+S+' id="ph-folder" '+V+' '+D+'>' +
      '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-folder-open" '+V+' '+D+'>' +
      '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h9a2 2 0 012 2v1"/>' +
      '<path d="M2 12h19l-3 7H5z"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-folder-plus" '+V+' '+D+'>' +
      '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>' +
      '<line x1="12" y1="11" x2="12" y2="17"/>' +
      '<line x1="9" y1="14" x2="15" y2="14"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-image" '+V+' '+D+'>' +
      '<rect x="3" y="3" width="18" height="18" rx="1"/>' +
      '<circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<path d="M21 15l-5-5L5 21"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-file-text" '+V+' '+D+'>' +
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6"/>' +
      '<line x1="16" y1="13" x2="8" y2="13"/>' +
      '<line x1="16" y1="17" x2="8" y2="17"/>' +
      '<line x1="10" y1="9" x2="8" y2="9"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-cloud-arrow-up" '+V+' '+D+'>' +
      '<polyline points="16 16 12 12 8 16"/>' +
      '<line x1="12" y1="12" x2="12" y2="21"/>' +
      '<path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-file-pdf" '+V+' '+D+'>' +
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6M8 13h2a1.5 1.5 0 010 3H8v-5"/>' +
      '<path d="M13 13v5M13 15.5h2.5"/>' +
      '<path d="M16 13v5"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-file-xls" '+V+' '+D+'>' +
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
      '<path d="M14 2v6h6M9 13l4 6M13 13l-4 6"/>' +
    '</'+S+'>' +

    /* ── UI ─────────────────────────────────────── */
    '<'+S+' id="ph-funnel-simple" '+V+' '+D+'>' +
      '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-caret-left" '+V+' '+D+'>' +
      '<polyline points="15 18 9 12 15 6"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-caret-right" '+V+' '+D+'>' +
      '<polyline points="9 18 15 12 9 6"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-list-bullets" '+V+' '+D+'>' +
      '<line x1="9" y1="6" x2="20" y2="6"/>' +
      '<line x1="9" y1="12" x2="20" y2="12"/>' +
      '<line x1="9" y1="18" x2="20" y2="18"/>' +
      '<circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-sun" '+V+' '+D+'>' +
      '<circle cx="12" cy="12" r="5"/>' +
      '<line x1="12" y1="1" x2="12" y2="3"/>' +
      '<line x1="12" y1="21" x2="12" y2="23"/>' +
      '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>' +
      '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>' +
      '<line x1="1" y1="12" x2="3" y2="12"/>' +
      '<line x1="21" y1="12" x2="23" y2="12"/>' +
      '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>' +
      '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' +
    '</'+S+'>' +

    '<'+S+' id="ph-moon" '+V+' '+D+'>' +
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
    '</'+S+'>' +

  '</svg>';

  document.currentScript.parentNode.insertBefore(div, document.currentScript);
})();

/* ── Tema: init + toggle ──────────────────────────────── */
(function () {
  var html  = document.documentElement;
  var saved = localStorage.getItem('z-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  window.__toggleTheme = function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('z-theme', next);
    document.querySelectorAll('.theme-icon use').forEach(function (u) {
      u.setAttribute('href', next === 'dark' ? '#ph-sun' : '#ph-moon');
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    var theme = html.getAttribute('data-theme');
    document.querySelectorAll('.theme-icon use').forEach(function (u) {
      u.setAttribute('href', theme === 'dark' ? '#ph-sun' : '#ph-moon');
    });
  });
})();
