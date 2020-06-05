json.set! like.id do
    json.extract! like, :id, :liker_id, :likeable_id, :likeable_type, :created_at, :updated_at
end