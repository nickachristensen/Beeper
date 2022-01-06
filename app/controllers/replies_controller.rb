class RepliesController < ApplicationController

  # def index
  #   replies = Reply.all
  #   render json: replies
  # end

  def index
    if params[:post_id]
      replies = Post.find_by(id: params[:post_id]).replies
    elsif params[:post_id]
      user = Post.find_by(id: params[:post_id]).user
    else 
      replies = Reply.all
    end
    render json: replies, include: :post
  end

  def show
    @reply = Reply.find(params[:id])
    render json: @reply, status: :ok
  end

  def create
    @reply = Reply.new(reply_params)
    if @reply.save
      render json: @reply, status: :created
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  def update
    @reply = Reply.find(params[:id])
    if @reply.update(reply_params)
      render json: @reply, status: :ok
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  def destroy
    reply = Reply.find_by(id: params[:id])
    if reply
      reply.destroy
      head :no_content
    else
      render json: { error: "Reply not found" }, status: :not_found
    end
  end

  private

  def reply_params
    params.permit(:message, :user_id, :post_id)
  end
end
