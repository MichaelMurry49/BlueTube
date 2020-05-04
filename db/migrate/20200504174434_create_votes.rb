class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.boolean :upvote, null: false
      t.integer :comment_id, null: false
      t.integer :voter_id, null: false
      t.timestamps
    end
    add_index :votes, :comment_id
    add_index :votes, :voter_id
  end
end
