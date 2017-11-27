class CreateNpnsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :npns do |t|
      t.integer :number, null: false
      t.timestamps
    end
  end
end
