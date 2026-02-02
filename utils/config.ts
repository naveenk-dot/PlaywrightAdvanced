export const getConfig = () => ({
  baseUrl: process.env.BASE_URL || '',
  apiBaseUrl: process.env.API_BASE_URL || '',
  headless: (process.env.HEADLESS || 'true') === 'true',
});
