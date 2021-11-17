# tik-tuk


## Table of Contents
* [Project Setup](#project-setup)
* [App structure](#app-structure)
* [Using API](#api)

## Project setup
```
npm install

#Compiles and hot-reloads for development
npm run serve

#Compiles and minifies for production
npm run build

#Lints and fixes files
npm run lint
```

## App structure
This is a TikTok clone application. It has 2 pages : 
* [Home Page](#home)
* [Profile Page](#profile)

####Home
On the home page you can see trending feed. There are 30 tiktok [posts](#post).
Pagination is included, so automatically only 5 posts appear. 
Then you can add 5 posts per click on the button "Load More".

#####Profile
On the profile page you can see:
* User information : nickname, photo, followers count, followings count, user's videos count.
* User feed : [posts](#post) this user created.


####Post
Post includes :
 - Video
 - Text in description
 - Author of the post (his/her nickname and photo)
 - Views count
 - Likes and comments count


##API
All requests to API are written in src/services folder.
API that is used - 'TikTok' on the Rapid API.
For making requests is used axios library.
* postService : returns trending feed for the home page
* userService : returns user by name
* userFeedService : returns user feed
###***Important note!*** 
because of API problems request getUserFeed does't work properly. That's why userFeedService is not used at the moment. 
Instead of this user feed is took from trending feed by filtering with user's name.


#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
