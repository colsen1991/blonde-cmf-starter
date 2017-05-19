export default function initServiceWorker() {
  if (module.hot && 'serviceWorker' in navigator) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations()
      .then(() => navigator.serviceWorker.register('sw.js'))
  });
};
