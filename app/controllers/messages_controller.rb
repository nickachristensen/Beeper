class MessagesController < ApplicationController

    def index
        @messages = Message.all
        render json: @messages, status: :ok
    end

    def show
        @message = Message.find(params[:id])
        render json: @message, status: :ok
    end
end
