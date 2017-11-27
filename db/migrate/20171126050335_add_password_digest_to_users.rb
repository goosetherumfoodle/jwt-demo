class AddPasswordDigestToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.string :password_digest, limit: 128, null: false
    end
  end
end
