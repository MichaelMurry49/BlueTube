# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
    id: 1,
    username: 'test',
    email: 'test@test.test',
    password_digest: '$2a$12$JTTuFWVPwLQhKXtoYuXWwe2Rj96ghtuwPCDrrLqA2YZYaExcT5Kei',
    session_token: "off",
    created_at: "2001-02-03T04:05:06+03:30",
    updated_at: "2001-02-03T04:05:06+03:30"

)

Video.create!(
    id: 2,
    view_count: 0,
    title: "test2",
    description: "this is a test2",
    author_id: 1,
    created_at: "2001-02-03T04:05:06+03:31",
    updated_at: "2001-02-03T04:05:06+03:31"
)