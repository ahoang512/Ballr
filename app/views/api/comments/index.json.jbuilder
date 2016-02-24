json.comments @comments do |comment|
  json.id comment.id
  json.text comment.text
  json.user_id comment.user_id
  json.photo_id comment.photo_id
  json.user_photo comment.user.photo_url
  json.user_name comment.user.username
end
