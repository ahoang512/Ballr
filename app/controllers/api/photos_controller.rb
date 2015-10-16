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

  def random
    @photos = Photo.includes(:album).all.to_a
    @photos.shuffle!
    @photos = @photos.take(4)

    render :index
  end

end
