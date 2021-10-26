class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages, status: :ok
  end

  def show
    @message = Message.find(params[:id])
    render json: @message, status: :ok
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      session[:user_id] = user.id
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(message_params)
      render json: @message, status: :ok
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    head :no_content
  end

  private

  def message_params
    params.permit(:content)
  end
end
