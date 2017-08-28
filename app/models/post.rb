class Post < ApplicationRecord
  serialize :images, Array
  scope :neighborhood, -> neighborhood { where("lower(neighborhood) = ?", neighborhood.downcase) }
  scope :kind, -> kind { where("lower(kind) = ?", kind.downcase) }

  mount_uploaders :images, ImagesUploader
end