class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :id
      t.string :title
      t.float :area
      t.float :price
      t.text :details
      t.integer :phone
      t.integer :landline
      t.string :type

      t.timestamps
    end
  end
end
