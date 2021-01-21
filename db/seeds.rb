# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: 'Demo',
    email: 'test@test.test',
    password: 'password'

)

User.create(
    username: 'Michael',
    email: 'mycoal@test.test',
    password: 'mycoal49'

)

User.create(
    username: 'Matt',
    email: 'matt@test.test',
    password: 'mycoal49'

)

User.create(
    username: 'Ned',
    email: 'ned@test.test',
    password: 'mycoal49'

)

v1 = Video.create(view_count: 0, title: "Time and Time Again", description: "Michael finds a remote that can rewind time", author_id: 1)
v2 = Video.create(view_count: 0, title: "Bad Apple", description: "A Fruit Version of Westside Story", author_id: 2)
v3 = Video.create(view_count: 0, title: "My clip", description: "this is a test", author_id: 3)
v4 = Video.create(view_count: 0, title: "Dog bark", description: "Barking dog", author_id: 2)
# v5 = Video.create(view_count: 0, title: "test5", description: "this is a test", author_id: 1)
# v6 = Video.create(view_count: 0, title: "test1", description: "this is a test", author_id: 1)
# v7 = Video.create(view_count: 0, title: "test2", description: "this is a test", author_id: 2)
# v8 = Video.create(view_count: 0, title: "test3", description: "this is a test", author_id: 3)
# v9 = Video.create(view_count: 0, title: "test4", description: "this is a test", author_id: 2)
# v10 = Video.create(view_count: 0, title: "test5", description: "this is a test", author_id: 1)
# v11 = Video.create(view_count: 0, title: "test1", description: "this is a test", author_id: 1)
# v12 = Video.create(view_count: 0, title: "test2", description: "this is a test", author_id: 2)
# v13 = Video.create(view_count: 0, title: "test3", description: "this is a test", author_id: 3)
# v14 = Video.create(view_count: 0, title: "test4", description: "this is a test", author_id: 2)
# v15 = Video.create(view_count: 0, title: "test5", description: "this is a test", author_id: 1)

# vidFile = open("https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ")
# thumbFile1 = open("https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

# v1.upload.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ" )
# v1.thumbnail.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

# v2.upload.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ" )
# v2.thumbnail.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

# v3.upload.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ" )
# v3.thumbnail.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

# v4.upload.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ" )
# v4.thumbnail.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

# v5.upload.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/1bZbNddiqJgoEXG6ixzHGGiQ" )
# v5.thumbnail.attach(io: file, filename: "https://blue-tube-dev.s3-us-west-1.amazonaws.com/8Abxwue6o7cexynYFMmZNzr4")

