# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171126050335) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agent_hierarchies", force: :cascade do |t|
    t.bigint "downline_npn", null: false
    t.bigint "upline_npn", null: false
    t.bigint "carrier_id", null: false
    t.datetime "defunct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["carrier_id"], name: "index_agent_hierarchies_on_carrier_id"
    t.index ["downline_npn", "carrier_id"], name: "unique_upline_per_carrier", unique: true
  end

  create_table "carriers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_carriers_on_name", unique: true
  end

  create_table "contest_registrations", force: :cascade do |t|
    t.bigint "npn_id", null: false
    t.bigint "contest_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contest_id"], name: "index_contest_registrations_on_contest_id"
    t.index ["npn_id", "contest_id"], name: "index_contest_registrations_on_npn_id_and_contest_id", unique: true
    t.index ["npn_id"], name: "index_contest_registrations_on_npn_id"
  end

  create_table "contests", force: :cascade do |t|
    t.string "name"
    t.datetime "start_date", null: false
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "npns", force: :cascade do |t|
    t.integer "number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "policies", force: :cascade do |t|
    t.bigint "npn_id", null: false
    t.bigint "carrier_id", null: false
    t.datetime "effective_date", null: false
    t.string "member_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["carrier_id"], name: "index_policies_on_carrier_id"
    t.index ["npn_id"], name: "index_policies_on_npn_id"
  end

  create_table "upline_policy_credits", force: :cascade do |t|
    t.bigint "policie_id", null: false
    t.bigint "npn_id", null: false
    t.datetime "effective_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["effective_date"], name: "index_upline_policy_credits_on_effective_date"
    t.index ["npn_id"], name: "index_upline_policy_credits_on_npn_id"
    t.index ["policie_id"], name: "index_upline_policy_credits_on_policie_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.bigint "npn_id", null: false
    t.integer "level", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest", limit: 128, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["npn_id"], name: "index_users_on_npn_id", unique: true
  end

  add_foreign_key "agent_hierarchies", "carriers"
  add_foreign_key "agent_hierarchies", "npns", column: "downline_npn"
  add_foreign_key "agent_hierarchies", "npns", column: "upline_npn"
  add_foreign_key "contest_registrations", "npns"
  add_foreign_key "policies", "carriers"
  add_foreign_key "policies", "npns"
  add_foreign_key "upline_policy_credits", "npns"
  add_foreign_key "upline_policy_credits", "policies", column: "policie_id"
  add_foreign_key "users", "npns"
end
