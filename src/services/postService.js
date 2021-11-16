import axios from "axios";

export const getTrendingFeed = async () => {
  const response = await axios.get('https://tiktok33.p.rapidapi.com/trending/feed', {
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '22702332fdmsh5dfc8b6262337b7p113c92jsn40d1f2e67a4a'
    }
  });
  return response.data
}

