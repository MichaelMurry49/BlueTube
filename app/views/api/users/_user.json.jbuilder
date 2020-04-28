
json.set! user.id do
    json.extract! user, :id, :username, :email, :videos, :created_at, :updated_at
    json.videos user.videos.map {|video| video.id}
end

