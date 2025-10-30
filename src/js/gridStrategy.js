import { waitFor, isDark } from '../utils.js';

export function gridStrategy() {
    waitFor('#app')
    .then(() => {
        const darkUrl  = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/f3589eeca5eae7efc454f9dc8712318b.png';
        const lightUrl = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/43ef4cc9c6c7680c88f6f18fb670eb80.png';
        const imgUrl   = isDark() ? darkUrl : darkUrl;
        const headImg  = document.querySelector('.strategy-head > img');
        if (!headImg) return;
        headImg.src = imgUrl;
    }).catch(err => console.error(err));
}