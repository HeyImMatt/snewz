import * as newsAPI from './newsapi.js';
import { allSources } from './sources.js';

let sources = 'nhl-news,new-scientist';

//newsAPI.search(sources);

newsAPI.getNews();
