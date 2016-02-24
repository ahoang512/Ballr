class Api::CommentsController < ApplicationController

  def create
    user_id = params[:user_id].to_i
    photo_id = params[:photo_id].to_i
    text = params[:text]
    comment = Comment.new(photo_id: photo_id, user_id: user_id, text: text)

    if comment.save
      @comment = comment
      render :new
    else
      render json: "error"
    end
  end

  def index
    @comments = Photo.find(params[:photo_id].to_i).comments.includes(:user)
    render :index;
  end

end
