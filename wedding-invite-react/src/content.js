export const MAP_HALL = 'https://maps.app.goo.gl/ub6CVNDSSQjAMjn96?g_st=iw';
export const MAP_TEMPLE = 'https://maps.app.goo.gl/Yw7HeJXu7V4MXLXA9?g_st=iw';

const HALL_EN = 'Palani Gounder Thirumana Mandapam, Jalakandapuram road, Idappadi, Salem - 637101';

const cal = (params) =>
  'https://calendar.google.com/calendar/render?action=TEMPLATE&' +
  Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');

export const CAL_RECEPTION = cal({
  text: 'Reception – Ram Kumar & Deepa',
  dates: '20261031T190000/20261031T210000',
  ctz: 'Asia/Kolkata',
  location: HALL_EN,
  details: `Followed by dinner & celebration. Map: ${MAP_HALL}`,
});

export const CAL_WEDDING = cal({
  text: 'Wedding – Ram Kumar & Deepa',
  dates: '20261101T060000/20261101T100000',
  ctz: 'Asia/Kolkata',
  location: HALL_EN,
  details: `Muhurtham 6:00–7:15 AM at Sri Murkkarai Narasima Perumal kovil (${MAP_TEMPLE}). Ceremony 7:15–10:00 AM at Palani Gounder Thirumana Mandapam (${MAP_HALL}). Followed by breakfast.`,
});
