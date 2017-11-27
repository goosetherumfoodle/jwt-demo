class Carrier < ApplicationRecord
  def self.build!(name:)
    create! name: name
  end
end
