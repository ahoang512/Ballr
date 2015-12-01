# Ballr


http://ballr.club

## Minimum Viable Product

Ballr is a web application implemented in Ruby on Rails and React.js that is designed to let users share their sports related photos and gifs. Ballr allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create an account
- [x] Log in / Log out
- [x] Create, edit, view, delete photo albums
- [x] Upload, Delete Photos
- [x] Edit Photo Names 
- [ ] Manage a public album that others can upload to
- [ ] Make captions for their photos
- [ ] comment on photos or favorite them.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

# Views

## Navbar
The Navbar has the website logo, browse button, and some user account options depending on if there is a user logged in. 
If there is no current user, it allows you to sign in or sign up. If there is a current user it allows him to view his album library or sign out instead.

## Splash Page
The Splash page is broken into two sections. The main splash image and the splash bar that contains three images. This page is meant to advertise the different functions that this web app can be used for and is the first one that users will see when going to the url.

![alt text][splash]

## Front Page
  The front page component is split into two main children components:
  
### 1. Filter Bar
  
### 2. PhotoFeed
![alt text][front]

## Edit Page
![alt text][edit]

## User Page
![alt text][user]


[splash]: http://res.cloudinary.com/dayd3nm4v/image/upload/v1448995757/Screen_Shot_2015-12-01_at_10.48.19_AM_v5et6a.png
[front]: http://res.cloudinary.com/dayd3nm4v/image/upload/v1448995973/Screen_Shot_2015-12-01_at_10.52.29_AM_qgiwcl.png
[edit]: http://res.cloudinary.com/dayd3nm4v/image/upload/v1448996015/Screen_Shot_2015-12-01_at_10.53.07_AM_tub39y.png
[user]: http://res.cloudinary.com/dayd3nm4v/image/upload/v1448996142/Screen_Shot_2015-12-01_at_10.55.12_AM_hlompe.png
