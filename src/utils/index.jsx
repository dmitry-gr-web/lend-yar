export function mobileDevice() {
  return window.navigator.userAgent.includes('Android') ||
    window.navigator.userAgent.includes('webOS') ||
    window.navigator.userAgent.includes('iPhone') ||
    window.navigator.userAgent.includes('iPad') ||
    window.navigator.userAgent.includes('iPod') ||
    window.navigator.userAgent.includes('BlackBerry') ||
    window.navigator.userAgent.includes('Windows Phone')
    ? 'mobile'
    : 'pc';
}
