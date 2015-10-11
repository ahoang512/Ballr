# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
lat         | integer   |
lng         | integer   |
date_taken  | date      | not null
description | string    | not null


## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null foreign (references users) indexed
notebook_id | integer   | not null, foreign key (references notebooks), indexed
public      | boolean   | not null, default: true



## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null,
user_id     | string    | not null, foreign key (references users), indexed
date        | datetime  | not null
content     | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
