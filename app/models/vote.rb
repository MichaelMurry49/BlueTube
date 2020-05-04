class Vote < ApplicationRecord
    validates :upvote, :comment_id, :voter_id, presence: true
    belongs_to :comment,
        foreign_key: :comment_id,
        class_name: :Comment
    belongs_to :voter,
        foreign_key: :voter_id,
        class_name: :User
end
