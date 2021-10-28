class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at
  has_one :user
  has_many :replies
end
