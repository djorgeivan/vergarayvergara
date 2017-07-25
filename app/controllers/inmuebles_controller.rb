class InmueblesController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = article_id
  end

  private
    def article_id
      Post.find(params[:id])
    end
end
