class Post < ApplicationRecord
  # images column is accepted as an array
  serialize :images, Array
end
