const getPost = () => {
  const post = {
    id: 1,
    text: 'That was an amazing holiday',
    video: 'img/video/v1.mp4',
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
    date: Date.now(),
    hashtags: getHashtags(),
    user: (Math.random() * 6)
  }
  return post
}

const getHashtags = () => {
  const hashtags = [
    {id: 1, name: 'summer'},
    {id: 2, name: 'friends'},
    {id: 3, name: 'love'},
    {id: 4, name: 'natural'},
    {id: 5, name: 'no filters'},]
  return hashtags
}

export default getPost

