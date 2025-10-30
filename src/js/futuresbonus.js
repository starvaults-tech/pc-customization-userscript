import { waitFor, isDark } from '../utils.js';

export function futuresbonus() {
    const darkUrl = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/f93950f4ee344fdab49401ac27bd7252.png';
    const lightUrl = '';
    const getUrl = () => (isDark() ? darkUrl : darkUrl);
    const applyStyle = (banner) => {
        banner.style.backgroundImage = `url(${getUrl()})`;
        banner.style.backgroundPosition = '80% center';
        banner.style.backgroundSize = 'auto';
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