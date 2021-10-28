class ApplicationController < ActionController::API
  include ActionController::Cookies

  def created_at
    attributes["created_at"].strftime("%Y-%m-%d %H:%M")
  end

  private

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end
end
