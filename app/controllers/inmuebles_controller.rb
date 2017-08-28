class InmueblesController < ApplicationController
  has_scope :neighborhood
  has_scope :kind
  
  def index
    @posts = apply_scopes(Post).all
  end
  

  def show
    @post = post_id
  end

  private
    def post_id
      Post.find(params[:id])
    end
end
