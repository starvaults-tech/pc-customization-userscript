import { waitFor, isDark } from '../utils.js';

export function futuresbonus() {
    waitFor('.futuresbonus .banner')
    .then((banner) => {
        const darkUrl = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/f93950f4ee344fdab49401ac27bd7252.png';
        const lightUrl = '';
        const imgUrl = isDark() ? darkUrl : darkUrl;
        banner.style.backgroundImage = `url(${imgUrl})`;
        banner.style.backgroundPosition = '80% center';
        banner.style.backgroundSize = 'auto';
    }).catch(err => console.error(err));
}