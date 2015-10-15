# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  name       :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ActiveRecord::Base
  belongs_to :album,
    class_name: "Album",
    foreign_key: :album_id,
    primary_key: :id


  def self.getRandom(start, count)
    last = start + count;
    Photo.where("id >= ? AND id <= ?", start, last);
  end
end
