'use strict';
import bootstrap from 'bootstrap';
import 'swiper/css/bundle';
import '../index.html';
import '../scss/style.scss';

import checkLocalStorage from './modules/checkLocalStorage';
import queryPortfolioLikes from './modules/queryPortfolioLikes';
import hero from './modules/hero';
import me from './modules/me';
import techno from './modules/techno';
import portfolio from './modules/portfolio';
import portfolioSwiper from './modules/portfolioSwiper';
import sendFeedback from './modules/feedback';
import { arrowUp } from './modules/arrow-up';

checkLocalStorage();
queryPortfolioLikes();
hero();
me();
techno();
portfolio();
sendFeedback();
arrowUp();
