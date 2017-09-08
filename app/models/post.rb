class Post < ApplicationRecord
  serialize :images, Array
  scope :neighborhood, -> neighborhood { where("lower(neighborhood) = ?", neighborhood.downcase) }
  scope :kind, -> kind { where("lower(kind) = ?", kind.downcase) }
  scope :area, lambda { |area| 
    if area.to_i <= 500 
      where("area <= ?", area.to_i) 
    else 
      where("area >= ?", area.to_i) 
    end
  }

  mount_uploaders :images, ImagesUploader
end