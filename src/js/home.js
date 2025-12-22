import { waitFor, isDark } from '../utils.js';

export function home (){
    waitFor('#app[data-client=pc]')
    .then(() => {
        const language = document.location.pathname.split('/').filter(e=>e).pop() || '';
        const imgUrl = "https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/e14abb971402402fc2711fb26e53c7f8.gif";
        const container = document.createElement('a');
        container.id = 'futures-competition-banner-btn';
        container.href = "/futures/competition";
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '60px';
        container.style.zIndex = '1000';
        container.style.cursor = 'pointer';
        container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        container.style.borderRadius = '8px';
        container.style.overflow = 'visible';
        document.body.appendChild(container);

        const imgTag = document.createElement('img');
        imgTag.src = imgUrl;
        imgTag.style.width = '100px';
        imgTag.style.height = 'auto';
        container.appendChild(imgTag);

        const textTag = document.createElement('div');
        switch (language) {
            case 'zh_TC':
                textTag.innerText = '聖誕狂歡合約交易賽';
                break;
            case 'zh_CN':
                textTag.innerText = '圣诞狂欢合约交易赛';
                break;
            case 'en_US':
                textTag.innerText = 'Xmas Futures Competition';
                break;
            default:
                break;
        }
        textTag.style.position = 'absolute';
        textTag.style.bottom = '-20px';
        textTag.style.left = '50%';
        textTag.style.transform = 'translateX(-50%)';
        textTag.style.color = '#fff';
        textTag.style.fontSize = '14px';
        textTag.style.fontWeight = 'bold';
        textTag.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.7)';
        textTag.style.whiteSpace = 'nowrap';
        container.appendChild(textTag);
    }).catch(err => console.error(err));
};