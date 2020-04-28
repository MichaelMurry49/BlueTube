json.set! @user.id do
    json.extract! @user, :id, :username, :email, :videos.map {|video| video.id}, :created_at, :updated_at
end
