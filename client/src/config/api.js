// client/src/config/api.js
// Ye code apne aap detect karega ki aap local pe hain ya live website pe.
export const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://mandar-inn.onrender.com';