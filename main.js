import { getLastPath } from "./src/utils.js"
import { copyTradingFutures } from "./src/js/copyTradingFutures.js";
import { appDownload } from "./src/js/appDownload.js";
const page = getLastPath();
switch (page) {
    case 'copyTradingFutures':
        copyTradingFutures();
        break;

    case 'appDownload':
        appDownload();
        break;

    default:
        break;
}