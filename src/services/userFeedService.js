//Not commented code can be replaced by commented one if API works properly

/*import axios from "axios";

export const getUserFeed = async nickname => {
  const response = await axios.get(`https://tiktok33.p.rapidapi.com/user/feed/${nickname}`, {
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
    }
  });
  return response.data
}*/

const userFeedData = require('../user-feed.json')
const userFeed = userFeedData.itemList
export { userFeed }



