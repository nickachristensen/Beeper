class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at
  has_one :user
end
