const users = [
  {id: 1, nickname: 'alyona', photo: '/public/img/pictures/photo1.jpg'},
  {id: 2,nickname: 'kate', photo: '/public/img/pictures/photo1.jpg'},
  {id: 3,nickname: 'max', photo: '/public/img/pictures/photo1.jpg'},
  {id: 4,nickname: 'andriy', photo: '/public/img/pictures/photo1.jpg'},
  {id: 5,nickname: 'lena', photo: '/public/img/pictures/photo1.jpg'}
]

const getUser = () => {
  let i = Math.floor(Math.random() * 6) ;
  return users[i]

}







