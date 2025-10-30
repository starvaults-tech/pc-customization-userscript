import { waitFor, isDark } from '../utils.js';

export function newOtc() {
    waitFor('#app')
    .then(() => {
        const darkUrl  = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/ff62647b4b31d171bf7901e745b06768.png';
        const lightUrl = '';
        const imgUrl   = isDark() ? darkUrl : darkUrl;
        const otcImg = document.querySelector('.quick-left-logo img');
        if (!otcImg) return;
        otcImg.src = imgUrl;
    }).catch(err => console.error(err));
}