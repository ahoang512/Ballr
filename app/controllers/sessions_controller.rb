class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render json: @user
    else
      flash.now[:errors] = ["Invalid email or password"]
      render :new
    end
  end

  def destroy
    logout
    render json: {}
  end
end
