class ReplySerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :post_id
  has_one :user
  has_one :post
end
