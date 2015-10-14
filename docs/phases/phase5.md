# Phase 5: Tags/Tagging/Routes

## Rails
### Models
* Tags

### Controllers
* Api::TagsController (create, destroy, index, show, update)

### Views
* tags/index.json.jbuilder

## Flux
### Views (React Components)
* TagForm
* TagsContainer

### Stores
* Reminder

### Actions
* AlbumActions.receiveAllTagss
* AlbumActions.receiveSingleTag
* AlbumActions.deleteTag

### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.updateTag
* ApiUtil.destroyTag

## Gems/Libraries
