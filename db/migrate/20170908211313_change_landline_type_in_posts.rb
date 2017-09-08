class ChangeLandlineTypeInPosts < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :landline, :string
  end
end
