'use strict';
import bootstrap from 'bootstrap';
import '../index.html';
import '../scss/style.scss';

import checkLocalStorage from './modules/checkLocalStorage';
import queryPortfolioLikes from './modules/queryPortfolioLikes';
import hero from './modules/hero';
import me from './modules/me';
import techno from './modules/techno';
import portfolio from './modules/portfolio';
import sendFeedback from './modules/feedback';

checkLocalStorage();
queryPortfolioLikes();
hero();
me();
techno();
portfolio();
sendFeedback();
