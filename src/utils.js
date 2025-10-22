export function getLastPath() {
    const path = document.location.pathname.replace(/\/+$/, '');
    return path.split('/').pop();
}

export function injectCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}