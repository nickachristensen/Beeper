class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :messages, through: :posts

    # validates :username, presence: true, uniqueness: true
    # validates :email, presence: true, uniqueness: true
    # validates :password, presence: true, length: { minimum: 6 }    
    # validates :password, confirmation: true
    # validates :password, length: { minimum: 6 }

    has_secure_password
end
