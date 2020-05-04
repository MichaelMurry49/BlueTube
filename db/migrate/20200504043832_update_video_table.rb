class UpdateVideoTable < ActiveRecord::Migration[5.2]
  drop_table :videos
  def change
    create_table :videos do |t|
      t.integer :view_count, null: false
      t.string :title, null: false
      t.string :description
      t.string :category
      t.integer :author_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end
    add_index :videos, :author_id
  end
end
