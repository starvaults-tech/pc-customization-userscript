import { waitFor, isDark } from '../utils.js';

export function futuresbonus() {
    waitFor('#app')
    .then(() => {
        const darkUrl = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/f93950f4ee344fdab49401ac27bd7252.png';
        const lightUrl = '';
        const imgUrl = isDark() ? darkUrl : darkUrl;
        const bannerImg = document.querySelector('.futuresbonus .banner');
        if (!bannerImg) return;
        bannerImg.style.backgroundImage = `url(${imgUrl})`;
        bannerImg.style.backgroundPosition = '80% center';
        bannerImg.style.backgroundSize = 'auto';
    }).catch(err => console.error(err));
}