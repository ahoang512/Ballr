json.users @users do |user|
  json.id user.id
  json.username user.username
  json.photo_url  user.photo_url
  json.photo_count user.photos.count
  json.album_count user.albums.count
end
