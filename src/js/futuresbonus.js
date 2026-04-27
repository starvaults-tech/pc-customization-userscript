import { waitFor, isDark } from '../utils.js';

export function futuresbonus() {
    // This URL is also in css
    const applyStyle = (banner) => {
        banner.style.backgroundSize = 'contain';
    };
    waitFor('.futuresbonus .banner').then(banner => {
        let count = 0;
        const timer = setInterval(() => {
            applyStyle(banner);
            count += 100;
            if (count >= 3000) clearInterval(timer);
        }, 100);
    });
}