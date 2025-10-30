import { waitFor, isDark } from '../utils.js';

export function newOtc() {
    waitFor('#app')
    .then(() => {
        const imgUrl = {
            dark  : 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/ff62647b4b31d171bf7901e745b06768.png',
            light : ''
        };
        const otcImg = document.querySelector('.quick-left-logo img');
        if (!otcImg) return;
        otcImg.src = isDark() ? imgUrl.dark : imgUrl.dark;
    }).catch(err => console.error(err));
}