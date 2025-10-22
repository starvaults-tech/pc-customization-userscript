export function getLastPath() {
    const path = document.location.pathname.replace(/\/+$/, '');
    return path.split('/').pop();
}

export function injectCSS() {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);
}