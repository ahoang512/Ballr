u1 = User.create(email: "a@a.com",
                 username: "JoePavelski",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445213333/3985_kkdd8i.png"
)


u2 = User.create(email: "b@b.com",
                 username: "BusterPosey",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445216296/rw30hit29yf3mk2rohft.png"
)

u3 = User.create(email: "c@c.com",
                 username: "StephenCurry",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445290252/feukwg6w97c7vk1lcixu.png"
)

u4 = User.create(email: "d@d.com",
                 username: "MarcoReus",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445290471/phiwkmpse3wuytrp8pjd.jpg"
)

u5 = User.create(email: "e@e.com",
                 username: "JerryRice",
                 password: "password",
    photo_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445291015/xotuhzacsf4j8zzi7wua.jpg"
)


a1 = Album.create(owner_id: u1.id, name: "Hockey")
a2 = Album.create(owner_id: u2.id, name: "Baseball")
a3 = Album.create(owner_id: u3.id, name: "Roaracle")
a4 = Album.create(owner_id: u4.id, name: "futbol!")
a5 = Album.create(owner_id: u5.id, name: "FOOTBALL")
a6 = Album.create(owner_id: u1.id, name: "Shark Tank!")

p1 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444867036/xz0tgtuck8jrqvl0xvgy.jpg", name: "Whats good?", album_id: a6.id)

p2 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445291961/mlb_a_giantswinwar_668x376_dzayke.jpg", name: "photo2", album_id: a2.id)



p3 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866977/kqmv6t5p3quxrj6qwqo3.jpg", name: "Where'd it go? - goalie", album_id: a6.id)
p4 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866499/rwct6tkg5jwskhthmdwv.jpg", name: "photo4", album_id: a5.id)
p5 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444866327/qbe95hjswzf9hiei5njy.jpg", name: "photo5", album_id: a5.id)

p6 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883662/zaaccw4ylptrdmqc1vpp.jpg", name: "photo6", album_id: a4.id)
p7 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883634/ilybzwzwuaaj0ei1ymnj.jpg", name: "cross the line!", album_id: a6.id)

p8 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883610/mojbd77g3lyb4v4fwgz6.jpg", name: "photo8", album_id: a4.id)
p9 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1444883597/ejqoeistkvvpzffuqy5s.jpg", name: "photo9", album_id: a5.id)
p10 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445292040/USATSI_8527928_p2psaj.jpg", name: "photo10", album_id: a2.id)
p11 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445292135/b1c37161ef041de60b750a7fb2df02b3.1000x545x1_ywirzu.jpg", name: "photo11", album_id: a4.id)

p12 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445387275/ycvaswy44pacwrd5cqgs.gif", name: "OBJ", album_id: a5.id)

p13 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445387618/DJ9oIIW2UiJcQ_tp4m4t.gif", name: "WHAT A GOAL!", album_id: a6.id)

p14 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445388055/1sNDIB0SPHhBK_yvuzcc.gif", name: "boooya", album_id: a6.id)

p15 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445400057/GwiTbyyoAT2c8_wkskml.gif", name: "megatron", album_id: a5.id)

p16 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445444620/JCtMFY_dkflrk.gif", name: "Messi Magician", album_id: a4.id)

p17 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445445648/u7fdfm9w0inh1o0mmt9k.gif", name: "Pavel Datsyuk Solo", album_id: a1.id)

p18 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445453255/giphy_t9gxfz.gif", name: "So unlucky", album_id: a1.id)

p19 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445453474/Untitled-main_rzvsfs.jpg", name: "Because its the cup", album_id: a1.id)

p20 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445467600/tumblr_luinciVz3m1r5oj22o4_250_kmwbkk.gif", name: "goaaalll!", album_id: a6.id)

p21 = Photo.create(url: "http://res.cloudinary.com/dayd3nm4v/image/upload/c_scale,h_309,w_466/v1445473966/OeOYYGTsPO8ZW_kgju3y.gif", name: "oops", album_id: a5.id)

p22 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445548822/3rgXBKBlcvBmnhbf7W_burqf1.gif", name:
"Curry with the dime", album_id: a3.id)

p23 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445549205/Nax6whtH6xd4s_tmzebf.gif", name:
"Trey", album_id: a3.id)

p24 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445549344/2015-06-17t043537z_1154834890_nocid_rtrmadp_3_nba-playoffs-golden-state-warriors-at-cleveland-cavaliers_0_bsnwbr.jpg", name:
"Championship", album_id: a3.id)


p25 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445549532/yoJC2RdW6zCIcCOZvW_tar6vy.gif", name:
"Handles", album_id: a3.id)

p26 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445549700/andre-iguodala-stephen-curry-harrison-barnes-klay-thompson-nba-golden-state-warriors-memphis-grizzlies-850x560_q5brzn.jpg", name:
"Squad", album_id: a3.id)

p27 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445549946/StQsmNZXcx3sk_t4yrne.gif", name:
"Klay with the monster slam!", album_id: a3.id)

p28 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445550451/omgrod.0_mwevrs.gif", name:
"what a pass!", album_id: a5.id)

p29 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445560137/KInkdX7nu8VO0_dfpq5g.gif", name:
"The curl is crazy!", album_id: a4.id)

p30 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445641036/kLGIKizJIX9bG_it770e.gif", name:
"bam!", album_id: a2.id)

p31 = Photo.create(url:
"http://res.cloudinary.com/dayd3nm4v/image/upload/v1445874866/CalvinJohnson2_jolpra.gif", name:
"Triple Coverage!", album_id: a5.id)
