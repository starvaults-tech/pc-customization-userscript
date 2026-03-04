import { waitFor } from "../utils";

export function promotion() {
    const ImgUrls = [
        '',
        '',
        ''
    ]
    const imgs = document.querySelectorAll('.steps-wrapper img');
    const applyImage = () => {
        imgs.forEach((item, index) => {
            if (ImgUrls[index]) {
                item.src = ImgUrls[index];
            }
        })
    }

    //圖片動畫
    const svgs = document.querySelectorAll('.steps-line svg');
    svgs.forEach((svg, svgIndex) => {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradId = `flow-grad-${svgIndex}`;
        defs.innerHTML = `
                 <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="rgba(47,47,47,1)"/>
            <stop offset="45%"  stop-color="rgba(47,47,47,1)"/>
            <stop offset="50%"  stop-color="rgba(255,255,255,1)"/>
            <stop offset="55%"  stop-color="rgba(47,47,47,1)"/>
            <stop offset="100%" stop-color="rgba(47,47,47,1)"/>
            <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="2s" repeatCount="indefinite"/>
        </linearGradient>
            `;
        svg.appendChild(defs);
        svg.querySelector('path').style.fill = `url(#${gradId})`;
    });

//圖片延遲跳動
 const duration = 1500;
const floatImg = (index) => {
            const img = imgs[index];
            if (!img) return; 
            img.style.animation = 'none';
            void img.offsetWidth; 
            img.style.animation = 'float 1s ease-in-out';
        };
const runSequence = () => {
            imgs.forEach((_, index) => {
                setTimeout(() => {
                    floatImg(index);
                    if (index === imgs.length - 1) {
                        setTimeout(runSequence, duration);
                    }
                }, index * duration);
            });
        };
        if(imgs.length > 0) {
            runSequence();
        }
        waitFor('#app').then(() => {
            waitFor('.steps-wrapper img').then(() => {
                applyImage();
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    };

