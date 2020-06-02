class Comment < ApplicationRecord
    validates :body, :video_id, :author_id, presence: true
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
    belongs_to :parent,
        foreign_key: :parent_id,
        class_name: :Comment,
        optional: :true
    has_many :comments,
        foreign_key: :parent_id,
        class_name: :Comment
    has_many :votes,
        foreign_key: :comment_id,
        class_name: :Vote
    
end
