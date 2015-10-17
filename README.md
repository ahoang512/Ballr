# Ballr

[Heroku link][heroku]

[heroku]: http://ballrapp.herokuapp.com

## Minimum Viable Product

Ballr is a web application implemented in Ruby on Rails and React.js that is designed to let users share their sports related photos. Ballr allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, edit, view, delete photo albums
- [ ] Organize photos by sport/team/location/date
- [ ] Tag pictures with location of where it was taken
- [ ] Manage a public album that others can upload to
- [ ] make captions for their photos
- [ ] comment on photos or favorite them.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Album/Photo Model and JSON API (1.0 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will a page that list all the users albums after signup that will
contain the container for the application's root React component. Before
building out the front end, I will begin by setting up a full JSON API for photos
and albums. Also create the navbar component that will appear on each page.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.0 days)

Phase 2 is focused on setting up Flux and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Album store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Album `AlbumTileContainer`, `AlbumTile` and `Form`. At the end of
Phase 2, albums can be created, viewed, edited and destroyed in the browser.
Albums should save to the database when the user presses save.
Lastly, while constructing the views I will start using basic CSS  for
styling.

[Details][phase-two]

### Phase 3: Photos and Drag/Drop UI (1.0 days)

Phase 3 adding photos to albums. This is still the user's edit page, which has
its own `index` view for each album. Will use the photo json api to allow users
to upload and add information for photos, before saving to database. Might add
the ability to drag and drop photos into different albums depending on how long
this takes.

[Details][phase-three]

### Phase 4: Create Public View of album for others to see (3 day)

Phase 4 is the show page of a user. A user's page will list all the albums as
tiles and let the viewer select one of them. Once selected, the first photo from
that album will be shown in the  View. These will all be components of a user's
show page. A user should be able to select the left and right buttons on either
side of the photo to view the next one. Will implement transition for this
depending on time. Also create the photo info component to list out the photo
information allowed by the user.



[Details][phase-four]

### Phase 5: Tags/Tagging/Routes (1 day)

Phasea 5 will implement routes for the user show page so load times are faster.
Next is the implementation of tags. First, users can tag their photos so that
others can search by tags and see all photos related. Once this is implemented,
searching by location/date is the nextfeature to be done.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Go through the different views and make the UI better visually and physically
by adding transitons and shortcuts.

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
