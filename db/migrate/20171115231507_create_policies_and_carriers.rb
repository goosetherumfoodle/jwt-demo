class CreatePoliciesAndCarriers < ActiveRecord::Migration[5.1]
  def change
    create_table :carriers do |t|
      t.string :name, null: false
      t.index :name, unique: true
      t.timestamps
    end

    create_table :policies do |t|
      t.references :npn, foreign_key: true, null: false
      t.references :carrier, foreign_key: true, null: false
      t.datetime :effective_date, null: false
      t.string :member_name, null: false
      t.timestamps
    end
  end
end
