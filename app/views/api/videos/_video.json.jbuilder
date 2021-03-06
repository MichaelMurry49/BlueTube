json.set! video.id do
    json.extract! video, :id, :view_count, :title, :description, :author_id, :comments, :likes, :created_at, :updated_at
    json.uploadUrl url_for(video.upload)
    json.thumbnail url_for(video.thumbnail)
    json.comments video.comments.map {|comment| comment.id}
    json.likes video.likes.map {|like| like.positive_like}
end