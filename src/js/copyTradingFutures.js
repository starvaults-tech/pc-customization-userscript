export function copyTradingFutures() {
    const darkUrl  = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/d3bac1663d3828f59f5d24163b708734.png';
    const lightUrl = '';
    const getUrl = () => (isDark() ? darkUrl : darkUrl);
    const applyStyle = (banner) => {
        banner.style.backgroundImage = `url(${getUrl()})`;
        banner.style.backgroundPosition = '80% center';
        banner.style.backgroundSize = 'auto 70%';
    };
    waitFor('.banner-wrap').then(banner => {
        let count = 0;
        const timer = setInterval(() => {
            applyStyle(banner);
            count += 100;
            if (count >= 3000) clearInterval(timer);
        }, 100);
    });
}