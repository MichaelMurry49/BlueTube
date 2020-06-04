class UpdateLikes < ActiveRecord::Migration[5.2]
  drop_table :likes
  def change
    create_table :likes do |t|
      t.boolean :positive_like, null: false
      t.integer :likeable_id, null: false
      t.string :likeable_type, null: false;
      t.integer :liker_id, null: false
      t.timestamps
    end
    add_index :likes, :likeable_id
    add_index :likes, :liker_id
    add_index :likes, :likeable_type
  end
end
