export const getConfig = () => ({
  baseUrl: process.env.BASE_URL || '',
  apiBaseUrl: process.env.API_BASE_URL || '',
  cleartripUrl: process.env.CLEARTRIP_URL || 'https://www.cleartrip.com',
  headless: (process.env.HEADLESS || 'true') === 'true',
});
