# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ActiveRecord::Base
  validates_uniqueness_of :owner_id, scope: [:name]
  validates :owner_id,
   :name,
   presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :photos,
    class_name: "Photo",
    foreign_key: :album_id,
    primary_key: :id


end
