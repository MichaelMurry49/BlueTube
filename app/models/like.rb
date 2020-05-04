class Like < ApplicationRecord
    validates :positive_like, :video_id, :liker_id, presence: true
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User
    
end
