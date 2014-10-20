class ChangeColumnName < ActiveRecord::Migration
  def up
  	rename_column :pets, :owner_id, :customer_id
  end

  def down
  end
end
