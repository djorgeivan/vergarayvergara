class AddBathroomsToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :bathrooms, :integer
  end
end
