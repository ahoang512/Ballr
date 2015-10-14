class Api::AlbumsController < ApplicationController
  def create
    id = current_user.id
    name = params[:album][:name]
    album = Album.new(owner_id: id, name: name);


    if album.save
      render json: album
    else
      render json: "error"
    end
  end

end
