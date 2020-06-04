class Like < ApplicationRecord
    validates :likeable_type, :likeable_id, :liker_id, presence: true
    validates :likeable_type, inclusion: {in: ['Video', 'Comment']}
    validates :positive_like, inclusion {in: [true, false]}
    validates :liker_id, uniqueness: {scope: [:likeable_id, :likeable_type]}
    
    belongs_to :likeable, polymorphic: true
    
    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User
    
end
