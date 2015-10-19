u1 = User.create(email: "a@a.com",
                 username: "Joe Pavelski",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445213333/3985_kkdd8i.png"
)


u2 = User.create(email: "b@b.com",
                 username: "Buster Posey",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445216296/rw30hit29yf3mk2rohft.png"
)

u3 = User.create(email: "c@c.com",
                 username: "Stephen Curry",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445290252/feukwg6w97c7vk1lcixu.png"
)

u4 = User.create(email: "d@d.com",
                 username: "Marco Reus",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445290471/phiwkmpse3wuytrp8pjd.jpg"
)

u5 = User.create(email: "e@e.com",
                 username: "Jerry Rice",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445291015/xotuhzacsf4j8zzi7wua.jpg"
)


a1 = Album.create(owner_id: u1.id, name: "Shark Tank")
a2 = Album.create(owner_id: u2.id, name: "World Series")
a3 = Album.create(owner_id: u3.id, name: "Roaracle")
a4 = Album.create(owner_id: u4.id, name: "Borussia Dortmund!!")
a5 = Album.create(owner_id: u5.id, name: "FOOTBALL")

p1 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444867036/xz0tgtuck8jrqvl0xvgy.jpg", name: "photo1", album_id: a1.id)

p2 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445291961/mlb_a_giantswinwar_668x376_dzayke.jpg", name: "photo2", album_id: a2.id)



p3 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866977/kqmv6t5p3quxrj6qwqo3.jpg", name: "photo3", album_id: a1.id)
p4 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866499/rwct6tkg5jwskhthmdwv.jpg", name: "photo4", album_id: a5.id)
p5 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866327/qbe95hjswzf9hiei5njy.jpg", name: "photo5", album_id: a5.id)

p6 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883662/zaaccw4ylptrdmqc1vpp.jpg", name: "photo6", album_id: a4.id)
p7 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883634/ilybzwzwuaaj0ei1ymnj.jpg", name: "photo7", album_id: a1.id)
p8 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883610/mojbd77g3lyb4v4fwgz6.jpg", name: "photo8", album_id: a4.id)
p9 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883597/ejqoeistkvvpzffuqy5s.jpg", name: "photo9", album_id: a5.id)
p10 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445292040/USATSI_8527928_p2psaj.jpg", name: "photo10", album_id: a2.id)
p11 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445292135/b1c37161ef041de60b750a7fb2df02b3.1000x545x1_ywirzu.jpg", name: "photo11", album_id: a4.id)
