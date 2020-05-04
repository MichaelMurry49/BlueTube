class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :positive_like, null: false
      t.integer :video_id, null: false
      t.integer :liker_id, null: false
      t.timestamps
    end
    add_index :likes, :video_id
    add_index :likes, :liker_id
  end
end
