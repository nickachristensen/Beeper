class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_many :users
end
