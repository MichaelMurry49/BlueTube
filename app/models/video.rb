class Video < ApplicationRecord
    validates :view_count, :title, :author_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    has_many :comments,
        dependent: :destroy,
        foreign_key: :video_id,
        class_name: :Comment
    
    has_many :likes, as: :likeable,
        dependent: :destroy

    has_one_attached :upload

    has_one_attached :thumbnail

end
