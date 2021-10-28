class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end
  
  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      head :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "No active session" }, status: :unauthorized
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:fullname, :username, :password)
  end
end
