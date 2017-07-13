class InmueblesController < ApplicationController
  def index
    @posts = Post.all
  end
end
