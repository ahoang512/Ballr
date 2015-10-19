u1 = User.create(email: "a@a.com",
                 username: "Joe Pavelski",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445213333/3985_kkdd8i.png"
)


u2 = User.create(email: "b@b.com",
                 username: "Buster",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445216296/rw30hit29yf3mk2rohft.png"
)

a1 = Album.create(owner_id: u1.id, name: "album1")
a2 = Album.create(owner_id: u2.id, name: "album2")

p1 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444867036/xz0tgtuck8jrqvl0xvgy.jpg", name: "photo1", album_id: a1.id)

p3 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866977/kqmv6t5p3quxrj6qwqo3.jpg", name: "photo3", album_id: a1.id)
p4 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866499/rwct6tkg5jwskhthmdwv.jpg", name: "photo4", album_id: a1.id)
p5 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866327/qbe95hjswzf9hiei5njy.jpg", name: "photo5", album_id: a1.id)

p5 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883662/zaaccw4ylptrdmqc1vpp.jpg", name: "photo6", album_id: a2.id)
p6 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883634/ilybzwzwuaaj0ei1ymnj.jpg", name: "photo7", album_id: a2.id)
p7 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883610/mojbd77g3lyb4v4fwgz6.jpg", name: "photo8", album_id: a2.id)
p8 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883597/ejqoeistkvvpzffuqy5s.jpg", name: "photo9", album_id: a2.id)
