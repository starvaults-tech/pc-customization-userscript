export function copyTradingFutures() {
    waitFor('.banner-wrap')
    .then((banner) => {
        const darkUrl  = 'https://saas2-s3-public-01.s3.ap-northeast-1.amazonaws.com/1835/upload/d3bac1663d3828f59f5d24163b708734.png';
        const lightUrl = '';
        const getUrl = () => (isDark() ? darkUrl : darkUrl);
        if (!banner) return;
        const applyStyle = (banner) => {
            banner.style.backgroundImage = `url(${getUrl()})`;
            banner.style.backgroundPosition = '80% center';
            banner.style.backgroundSize = 'auto 70%';
        };
        applyStyle(banner);
    }).catch(err => console.error(err));
}