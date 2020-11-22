import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import NYT_API_KEY from '../config/nytApiKey'; 

export const loadNews = () => {
  const req = fetch(`https://api.nytimes.com/svc/news/v3/content/all/u.s.json?api-key=${NYT_API_KEY}`);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
  };
};

export const loadWorldNews = () => {
  const req = fetch(`https://api.nytimes.com/svc/news/v3/content/all/world.json?api-key=${NYT_API_KEY}`);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
  };
};

export const loadOpinion = () => {
  const req = fetch(`https://api.nytimes.com/svc/news/v3/content/all/opinion.json?api-key=${NYT_API_KEY}`);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
  };
};

export const searchNews = searchTerm => ({
  type: SEARCH_NEWS,
  payload: searchTerm
});
