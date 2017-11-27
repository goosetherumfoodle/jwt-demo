class User < ApplicationRecord
  has_secure_password
  belongs_to :npn

  enum level: { '4' => 0,
                '5' => 1,
                '6' => 2,
                '7' => 3,
                '8' => 4,
                '9' => 5 }

  def self.build!(email:, name:, level:, npn:, password:)
    create! email: email,
            npn: Npn.find_or_create_by!(number: npn),
            name: name,
            level: level,
            password: password
  end

  def self.agencies
    where(level: '4')
  end

  def self.first_agency
    agencies.take
  end

  def self.by_npns(npns)
    where(npn: npns)
  end

  def direct_downline_agencies
    [self.class.new, self.class.new]
  end

  def direct_downline_agents
    [self.class.new, self.class.new, self.class.new, self.class.new, self.class.new]
  end

  def top_agents(number)
    direct_downline_agents
  end

  def npn_number
    npn.number
  end

  def role
    if level == '4'
      'agent'
    else
      'agency'
    end
  end

  def to_token_payload
    {sub: id, role: role}
  end
end
