json.set! video.id do
    json.extract! video, :view_count, :title, :description, :author_id, :comments, :likes, :created_at, :updated_at
    json.comments video.comments.map {|comment| comment.id}
    json.likes video.likes.map {|like| like.id}
end