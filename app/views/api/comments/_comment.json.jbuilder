json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :video_id, :parent_id, :created_at, :updated_at
    json.comments comment.comments.map {|comment| comment.id}
    json.votes comment.votes.map {|vote| vote.id}
end