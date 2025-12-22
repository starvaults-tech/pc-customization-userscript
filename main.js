import { getLastPath, isCMS, injectCSS } from "./src/utils.js"

import { copyTradingFutures } from "./src/js/copyTradingFutures.js";
import { appDownload } from "./src/js/appDownload.js";
import { financing } from "./src/js/financing.js";
import { gridStrategy } from "./src/js/gridStrategy.js";
import { newOtc } from "./src/js/newOtc.js";
import { futuresbonus } from "./src/js/futuresbonus.js";
import { login } from "./src/js/login.js";

import copyTradingFutures_css from './src/css/futuresbonus.css';
import appDownload_css from './src/css/appDownload.css';
import futuresbonus_css from './src/css/futuresbonus.css';
import global_css from './src/css/global.css';
import cms_css from './src/css/cms.css';
import newOtc_css from './src/css/newOtc.css';
import competition_css from './src/css/competition.css';

injectCSS(global_css);

(()=>{
    const page = getLastPath();
    if (isCMS()) {
        injectCSS(cms_css);
        return;
    }

    switch (page) {
        case 'copyTradingFutures':
            copyTradingFutures();
            injectCSS(copyTradingFutures_css);
            break;

        case 'appDownload':
            appDownload();
            injectCSS(appDownload_css);
            break;

        case 'financing':
            financing();
            break;

        case 'gridStrategy':
            gridStrategy();
            break;

        case 'newOtc':
            newOtc();
            injectCSS(newOtc_css);
            break;

        case 'futuresbonus':
            futuresbonus();
            injectCSS(futuresbonus_css);
            break;

        case 'login':
            login();
            break;

        case 'competition':
            injectCSS(competition_css);
            break;

        default:
            break;
    }
})();