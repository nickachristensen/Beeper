class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def create
    @user = User.create(user_params)
    render json: @user, status: :created
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
  end

  private

  def user_params
    params.permit(:fullname, :username, :password)
  end
end
