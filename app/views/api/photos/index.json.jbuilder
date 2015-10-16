json.photos @photos do |photo|
  json.name photo.name
  json.url  photo.url
  json.album photo.album.name
  json.owner photo.owner[0].username
end
