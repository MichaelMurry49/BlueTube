json.set! like.id do
    json.extract! like, :id, :liker_id, :likeable_id, :likeable_type, :positive_like, :created_at, :updated_at
end