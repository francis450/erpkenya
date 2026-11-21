// Same-origin by default: nginx proxies /api to the backend.
// REACT_APP_BACKEND_URL is only needed when the API lives on another host.
export const API = `${process.env.REACT_APP_BACKEND_URL || ''}/api`;
