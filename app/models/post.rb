class Post < ApplicationRecord
  serialize :images, Array
  mount_uploaders :images, ImagesUploader
end