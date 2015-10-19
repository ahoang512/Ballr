json.photos @photos do |photo|
  json.name photo.name
  json.url  photo.url
  json.album photo.album.name
  json.owner photo.owner[0].username
  json.owner_url photo.owner[0].photo_url
end
