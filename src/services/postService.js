import axios from "axios";

export const getTrendingFeed = async () => {
  const response = await axios.get('https://tiktok33.p.rapidapi.com/trending/feed', {
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    }
  });
  return response.data
}

