const isDevelopment = import.meta.env.DEV;

export const config = {
  isDevelopment,
  baseURL: import.meta.env.VITE_BASE_URL,
  keys: { access: "OKRIKA_ACCESS_TOKEN" }
};
