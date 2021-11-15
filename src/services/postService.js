import getUser from "./userService";
import getHashtags from "./hashtagService"

const getPost = () => {
  const post = {
    id: 1,
    text: 'That was an amazing holiday. You should be here too',
    video: '/img/video/v1.mp4',
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
    publishedAt:  new Date(2021, 12, 15, 17, 23, 42),
    hashtags: getHashtags,
    user: getUser('alyona')
  }
  return post
}

const getPosts = () => {
  const posts = []
  for (let i = 0; i < 10; i++){
    posts.push(getPost())
  }
  return posts
}
export default getPosts

