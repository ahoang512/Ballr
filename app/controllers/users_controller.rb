class UsersController < ApplicationController
  def index
    #get 2 featured users
    if current_user != nil
      id  = current_user.id
      @users = User.where(
        "id != #{id}").order('random()').limit(2).includes(:photos, :albums)
    else
      @users = User.order('random()').limit(2).includes(:photos, :albums)
    end
    render :index
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = current_user
    render :show
  end

  def update
    url = params[:user][:photo_url]
    current_user.update!(photo_url: url)
    render json: current_user
  end


  private
  def user_params
    params.require(:user).permit(:password, :username, :email, :photo_url)
  end
end
