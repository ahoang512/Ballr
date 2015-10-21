json.photos @photos do |photo|
  json.name photo.name
  json.photo_id photo.id
  json.url  photo.url
  json.album photo.album.name
  json.album_id photo.album.id
  json.owner photo.owner[0].username
  json.owner_url photo.owner[0].photo_url
  json.owner_id photo.owner[0].id
end
