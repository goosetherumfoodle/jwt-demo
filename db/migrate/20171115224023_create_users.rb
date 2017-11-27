class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.references :npn, foreign_key: true, null: false, index: { unique: true }
      t.integer :level, null: false
      t.index :email, unique: true
      t.timestamps
    end
  end
end
