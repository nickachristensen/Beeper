class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username
  has_many :posts
  has_many :replies
end
