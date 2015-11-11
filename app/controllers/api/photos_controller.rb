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
    @photos = Album.find(albumId).photos.includes(:album, :owner)
    render :index
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.delete
    render json: @photo
  end

  def update
    id = params[:id].to_i;
    @photo = Photo.find(id)
    @photo.update(photo_params)
    render json: @photo
  end

  def feed
    if params[:sport] == "none" || params["sport"] == "All"
      @photos = Photo.order('random()').limit('10')
    else
      @photos = Photo.order('random()').where("sport = ?", params[:sport]).limit('10')
    end

    render :index
  end

  def user_photos
    @photos = current_user.photos
    render :index
  end

  private
  def photo_params
    params.require(:photo).permit(:name,:sport)
  end

end
