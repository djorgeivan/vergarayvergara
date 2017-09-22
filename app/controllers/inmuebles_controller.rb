class InmueblesController < ApplicationController
  has_scope :neighborhood
  has_scope :kind
  has_scope :area

  def index
    @posts = apply_scopes(Post).all.order("created_at DESC")
    @posts = @posts.paginate(page: params[:page], per_page: 12)
  end


  def show
    @post = post_id
    @hash = Gmaps4rails.build_markers(@post) do |post, marker|
      marker.lat post.latitude
      marker.lng post.longitude
    end
  end

  private
    def post_id
      Post.find(params[:id])
    end
end
