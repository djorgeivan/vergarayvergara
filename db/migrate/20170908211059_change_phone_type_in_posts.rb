class ChangePhoneTypeInPosts < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :phone, :string
  end
end
