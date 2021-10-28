class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts.order(created_at: :desc), status: :ok
  end

  def show
    @post = Post.find(params[:id])
    render json: @post, serializer: PostReplySerializer, status: :ok
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :no_content
  end

  private

  def post_params
    params.permit(:content)
  end
end
