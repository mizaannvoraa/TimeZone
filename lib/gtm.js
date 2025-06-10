export const GTM_ID = 'GTM-P6HCGPB2';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};