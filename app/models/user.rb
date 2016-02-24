# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  photo_url       :string           default("http://res.cloudinary.com/dayd3nm4v/image/upload/v1445033817/dzkg6i40xsb16orsipu8.jpg")
#

class User < ActiveRecord::Base
  attr_reader :password
  after_initialize :ensure_session_token

  validates :username,
    :email,
    :password_digest,
    :session_token,
    presence: true

  validates :username,
    :email,
    uniqueness: true

  validates :password,
    length: {minimum: 6, allow_nil: true}

  has_many :albums,
    class_name: "Album",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :photos,
    through: :albums,
    source: :photos

  has_many :comments,
    class_name: "Comment",
    foreign_key: :user_id,
    primary_key: :id



  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
