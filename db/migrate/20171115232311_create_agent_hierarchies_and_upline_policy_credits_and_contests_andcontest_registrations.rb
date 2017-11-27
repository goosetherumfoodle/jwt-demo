class CreateAgentHierarchiesAndUplinePolicyCreditsAndContestsAndcontestRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :agent_hierarchies do |t|
      t.bigint :downline_npn, null: false
      t.bigint :upline_npn, null: false
      t.references :carrier, foreign_key: true, null: false
      t.datetime :defunct
      t.foreign_key :npns, column: :downline_npn
      t.foreign_key :npns, column: :upline_npn
      t.index [:downline_npn, :carrier_id], unique: true, name: 'unique_upline_per_carrier'
      t.timestamps
    end

    create_table :upline_policy_credits do |t|
      t.references :policie, foreign_key: true, null: false
      t.references :npn, foreign_key: true, column: :upline_npn, null: false
      t.datetime :effective_date, null: false
      t.index :effective_date
      t.timestamps
    end

    create_table :contests do |t|
      t.string :name
      t.datetime :start_date, null: false
      t.datetime :end_date
      t.timestamps
    end

    create_table :contest_registrations do |t|
      t.bigint :npn_id, null: false
      t.bigint :contest_id, null: false
      t.index :npn_id
      t.index :contest_id
      t.index [:npn_id, :contest_id], unique: true
      t.foreign_key :npns
      # t.foreign_key :contest_id
      t.timestamps
    end
  end
end
