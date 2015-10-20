class Api::PhotosController < ApplicationController

  def create
    albumId = params[:photo][:album_id].to_i
    name = params[:photo][:name]
    url = params[:photo][:url]
    photo = Photo.new(url: url, name: name, album_id: albumId)

    if photo.save
      render json: photo
    else
      render json: "error"
    end
  end

  def index
    albumId = params[:photo][:albumId].to_i
    photos = Album.find(albumId).photos
    render json: photos
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.delete
    render json: @photo
  end

  def update
    newName = params[:photoName];
    id = params[:id];
    @photo = Photo.find(id)
    @photo.update(name: newName)
    render json: @photo
  end

  def random
    @photos = Photo.includes(:album).all.to_a
    @photos.shuffle!
    @photos = @photos.take(8)

    render :index
  end

  def user_photos
    @photos = current_user.photos
    render :index
  end

end
