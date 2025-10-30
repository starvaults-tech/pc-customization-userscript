import { waitFor, isDark } from '../utils.js';

export function login() {
    waitFor('.guide-info img')
    .then(() => {
        const darkUrl  = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/f7db93e71a09624cd9a482a28fc9f58b.png';
        const lightUrl = '';
        const imgUrl   = isDark() ? darkUrl : darkUrl;
        const guideImg  = document.querySelector('.guide-info img');
        if (!guideImg) return;
        guideImg.src = imgUrl;
    }).catch(err => console.error(err));
}