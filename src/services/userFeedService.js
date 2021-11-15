import getHashtags from "./hashtagService"


const getUserPost = (user) => {
  const post = {
    id: 1,
    text: 'That was an amazing holiday',
    video: 'img/video/v1.mp4',
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
    publishedAt:  new Date(2021, 12, 15, 17, 23, 42),
    hashtags: getHashtags,
    user: user
  }
  return post
}

const getUserPosts = (user) => {
  const posts = []
  for (let i = 0; i < 10; i++){
    posts.push(getUserPost(user))
  }
  return posts
}

export {getUserPosts}
