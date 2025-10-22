import { getLastPath, injectCSS } from "./src/utils.js"
import { copyTradingFutures } from "./src/js/copyTradingFutures.js";
import { appDownload } from "./src/js/appDownload.js";
import appDownload_css from './src/css/appDownload.css';

const page = getLastPath();
switch (page) {
    case 'copyTradingFutures':
        copyTradingFutures();
        break;

    case 'appDownload':
        appDownload();
        injectCSS(appDownload_css);
        break;

    default:
        break;
}