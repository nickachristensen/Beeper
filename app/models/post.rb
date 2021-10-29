class Post < ApplicationRecord
  belongs_to :user
  has_many :replies, dependent: :destroy

  def created_at
    attributes["created_at"].strftime("%m/%d/%Y %H:%M")
  end
end
