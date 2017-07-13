class AddNeighborhoodToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :neighborhood, :string
  end
end
