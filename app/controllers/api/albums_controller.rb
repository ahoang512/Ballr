class Api::AlbumsController < ApplicationController
  def index

    @albums = current_user.albums
    render json: @albums
  end

  def create
    id = current_user.id
    name = params[:album][:name]
    album = Album.new(owner_id: id, name: name)


    if album.save
      render json: album
    else
      render json: "error"
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.delete
    render json: @album
  end

end
