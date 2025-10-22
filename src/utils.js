export function getLastPath() {
    const path = document.location.pathname.replace(/\/+$/, '');
    return path.split('/').pop();
}