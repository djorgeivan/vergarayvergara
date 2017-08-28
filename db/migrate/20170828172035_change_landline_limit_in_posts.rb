class ChangeLandlineLimitInPosts < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :landline, :integer, :limit => 10
  end
end
