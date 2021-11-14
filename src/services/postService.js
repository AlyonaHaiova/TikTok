import getUser from "./userService";

const getPost = () => {
  const post = {
    id: 1,
    text: 'That was an amazing holiday',
    video: 'img/video/v1.mp4',
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
    date: Date.now(),
    hashtags: getHashtags(),
    user: getUser()
  }
  return post
}

const getHashtags = () => {
  const hashtags = [
    {id: 1, name: '#summer'},
    {id: 2, name: '#friends'},
    {id: 3, name: '#love'},
    {id: 4, name: '#natural'},
    {id: 5, name: '#no filters'},]
  return hashtags
}


const getPosts = () => {
  const posts = []
  for (let i = 0; i < 10; i++){
    posts.push(getPost())
  }
  return posts
}
export default getPosts

