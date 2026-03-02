# Star Vaults PC/H5 網站客製化 JS 腳本

依照當前頁面路由，注入對應 CSS 與 JS 腳本。

## 專案結構

```
.
├── README.md
├── build.mjs     打包相關設定
├── main.js       入口文件
├── main.min.js   壓縮後主文件
├── src
│   ├── css       不同頁面的樣式
│   ├── js        不同頁面的腳本
│   └── utils.js  一些工具
└── ...
```

## 主要功能

- 全域樣式覆蓋（`src/css/global.css`）
- CMS 頁面樣式覆蓋（`src/css/cms.css`）
- 指定頁面客製化：

|          Path         |網頁內容|
|:----------------------|:-:|
|`copyTradingFutures`   ||
|`appDownload`          ||
|`financing`            ||
|`gridStrategy`         ||
|`newOtc`               ||
|`futuresbonus`         ||
|`login`                ||
|`competition`          ||

## 如何本地開發建置

1. 安裝依賴
    ```bash
    npm install
    ```

2. 監聽並壓縮文件
    ```bash
    npm run dev
    ```

3. 一次性產生文件（非必要）
    ```bash
    npm run build
    ```
4. `git` 發布
    ```bash
    git add .
    git commit # 寫下你的 commit 訊息
    git push origin main
    ```

5. `git` 獲取 `sha` 哈希碼
    ```bash
    npm run sha # 會產出一串 40碼的哈希
    ```
    GitHub 的檔案 CDN 會放在
    ```
    https://cdn.jsdelivr.net/gh/<user>/<repo>@<sha-hash>/main.min.js
    ```
6. 更新網站後台注入，進入到後台後點選「公共管理」->「網站配置」->「公共配置」，
    在注入的 JS 連結 `sha hash` 改成新的，點擊「修改」並「Update」。

## 網站線上開發

1. 安裝 [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-TW)
2. 根據範例程式進行修改
    ```javascript
    // ==UserScript==
    // @name         Star Vaults PC/H5 Example UserScript
    // @namespace    http://tampermonkey.net/
    // @version      3.1.4
    // @description  star vaults customization
    // @author       Star Vualts Tech
    // @match        https://www.star-vaults.com/*
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=star-vaults.com
    // @grant        none
    // @run-at       document-start

    // ==/UserScript==

    (function() {
        'use strict';

        const getLastPath = ()=> {return document.location.pathname.replace(/\/+$/, '').split('/').pop();}
        const isHome = ()=> {return document.location.pathname?.split('/')?.filter(e=>e)?.length===1;}
        const isCMS = ()=> {return document.location.pathname.includes('/cms/');}
        const isH5 = ()=> {return document.location.host.includes('mco.star-vaults.com');}
        const isDark = ()=> {return document.querySelector('#app')?.classList?.contains('dark-theme');}
        const injectCSS = (css)=> {const style = document.createElement('style');style.textContent = css;document.head.appendChild(style);}
        const waitFor = (selector, timeout = 10000)=> {
            return new Promise((resolve, reject) => {
                const element = document.querySelector(selector);
                if (element) return resolve(element);
                const observer = new MutationObserver(() => {const el = document.querySelector(selector);if (el) {observer.disconnect();resolve(el);}});
                observer.observe(document.body, { childList: true, subtree: true });
                setTimeout(() => {observer.disconnect();reject(new Error(`Timeout: Element ${selector} not found within ${timeout}ms`));}, timeout);
            });
        }
        // Your code here...
        injectCSS(`
        html {
            opacity: 0.5;
        }
        `)
        waitFor('#app')
            .then((appDom) => {
                console.log(appDom)
            }).catch(err => console.error(err));
    })();
    ```

