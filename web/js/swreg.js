export default function initServiceWorker() {
  if (!module.hot && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.getRegistrations()
        .then(() => navigator.serviceWorker.register('sw.js'))
    });
  }
};
