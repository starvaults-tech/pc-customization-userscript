import { isDark, waitFor } from '../utils.js'

export function newBroker() {
    const ImgUrls = [
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/fe6785c2c8fb4af5c851f34e0e2a60a6.png',
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/ba627c0842c47fca04309d8597ae5afd.png',
        'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/fd6c09f61253ec29511f71963d963b7c.png'
    ];
    const applyImage = () => {
        const imgs = document.querySelectorAll('.newBroker-features-item .newBroker-features-img');
        imgs.forEach((item, index) => { item.src = ImgUrls[index]; item.style.animationDelay = `${index * 2}s`; })
    }
    waitFor('#app').then(() => {
        waitFor('.newBroker-features-item .newBroker-features-img').then(() => {
            applyImage();
        }).catch(err => console.error(err));
 // banner 背景（僅深色模式）
        const darkUrl = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/b65044880ab7f0ffe85caef435947569.jpg';
        const applyStyle = (banner) => {
            if (!isDark()) return;
            banner.style.backgroundImage = `url(${darkUrl})`;
            banner.style.backgroundPosition = '100% center';
            banner.style.backgroundSize = 'auto 110%';
            banner.style.minHeight = '400px';
        };
        waitFor('.newBroker-banner').then(banner => {
            let count = 0;
            const timer = setInterval(() => {
                applyStyle(banner);
                count += 100;
                if (count >= 3000) clearInterval(timer);
            }, 100);
        });
 // 三步獲取交易返傭圖片
        waitFor('.newBroker-step-box img').then(() => {
            const threeStepsImg = document.querySelectorAll('.newBroker-step-box img');
            document.querySelectorAll('.newBroker-step-line').forEach((line, index) => {
                line.style.setProperty('--delay', `${index * 1.5}s`);
            });

            const duration = 1500;
            const floatImg = (index) => {
                const img = threeStepsImg[index];
                img.style.animation = 'none';
                void img.offsetWidth;
                img.style.animation = 'float 1s ease-in-out';
            };
            const runSequence = () => {
                threeStepsImg.forEach((_, index) => {
                    setTimeout(() => {
                        floatImg(index);
                        if (index === threeStepsImg.length - 1) {
                            setTimeout(runSequence, duration);
                        }
                    }, index * duration);
                });
            };
            runSequence();
        });
    }).catch(err => console.error(err))
}