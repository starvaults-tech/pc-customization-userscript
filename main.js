import { getLastPath, isCMS, injectCSS } from "./src/utils.js"

import { copyTradingFutures } from "./src/js/copyTradingFutures.js";
import { appDownload } from "./src/js/appDownload.js";
import { financing } from "./src/js/financing.js";

import appDownload_css from './src/css/appDownload.css';
import global_css from './src/css/global.css';
import cms_css from './src/css/cms.css';

injectCSS(global_css);

(()=>{
    const page = getLastPath();
    if (isCMS) {
        injectCSS(cms_css);
        return;
    }

    switch (page) {
        case 'copyTradingFutures':
            copyTradingFutures();
            break;

        case 'appDownload':
            appDownload();
            injectCSS(appDownload_css);
            break;

        case 'financing':
            financing();
            break;

        default:
            break;
    }
})();