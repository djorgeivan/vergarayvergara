class InmueblesController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = post_id
  end

  private
    def post_id
      Post.find(params[:id])
    end
end
