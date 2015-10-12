# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Album
* Photo


### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::AlbumController (create, destroy, index, show, update)
* Api::PhotoController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* album/index.json.jbuilder
* album/edit.json.jbuilder
* photo/index.json.jbuilder
* photo/edit.json.builder

## Flux
### Views (React Components)
* navbar

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt
