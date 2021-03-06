json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :video_id, :parent_id, :created_at, :updated_at
    json.viewChildren false
    json.comments comment.comments.map {|comment| comment.id}
    json.likes comment.likes.map {|like| like.positive_like}
end