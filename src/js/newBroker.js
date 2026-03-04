import { isDark, waitFor } from '../utils.js'

export function newBroker() {
    const ImgUrls = [
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/fe6785c2c8fb4af5c851f34e0e2a60a6.png',
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/ba627c0842c47fca04309d8597ae5afd.png',
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/fd6c09f61253ec29511f71963d963b7c.png'
    ];
    const applyImage = () => {
        const imgs = document.querySelectorAll('.newBroker-features-item .newBroker-features-img');
        imgs.forEach((item, index) => { item.src = ImgUrls[index] })
    }
    waitFor('#app').then(() => {
        waitFor('.newBroker-features-item .newBroker-features-img').then(() => {
            applyImage();
        }).catch(err => console.error(err))
    }).catch(err => console.error(err))
}