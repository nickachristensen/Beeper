class ReplySerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :user
  has_one :post
end
