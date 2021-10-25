class User < ApplicationRecord
    has_many :posts
    has_many :messages, through: :posts

    has_secure_password
end
