class RemoveUserDropTable < ActiveRecord::Migration[5.2]
  def up
    drop_table(:users, if_exists: true)
  end
end
