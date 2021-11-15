
const users = [
  {id: 1, nickname: 'alyona', photo: '/img/pictures/photo1.jpg'},
  {id: 2,nickname: 'kate', photo: '/img/pictures/photo1.jpg'},
  {id: 3,nickname: 'max', photo: '/img/pictures/photo1.jpg'},
  {id: 4,nickname: 'andriy', photo: '/img/pictures/photo1.jpg'},
  {id: 5,nickname: 'lena', photo: '/img/pictures/photo1.jpg'}
]

const getUser = (nickname) => {
  return users.filter(u => u.nickname === nickname)[0]
}

export default getUser







