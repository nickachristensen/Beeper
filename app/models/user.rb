class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :replies
  has_many :created_posts, class_name: 'Post'

  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
  validates :password, presence: true, length: { minimum: 6 }
  validates :fullname, presence: true

  has_secure_password
end
