class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.string :color
      t.datetime :dob
      t.integer :age
      t.string :tax
      t.datetime :tax_paid_on
      t.string :sterilized
      t.string :medical_history
      t.integer :owner_id
      t.timestamps
    end
  end
end
