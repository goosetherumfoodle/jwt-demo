module Mygs
  def self.percent_of_earnings(agency, agent)
    (0..100).to_a.sample
  end

  def self.agency_total_policies(agency)
    100
  end

  def self.add_downlines(upline:, downlines:, carrier:)
    downlines.map do |downline|
      AgentHierarchy.build! downline_npn_id: downline.npn.id,
                            upline_npn_id: upline.npn.id,
                            carrier_id: carrier.id
    end
  end

  def self.get_downlines(upline:, carrier:)
    down_npns = AgentHierarchy.downline_npns_for(upline_npn_id: upline.npn.id, carrier_id: carrier.id)
    User.by_npns(down_npns)
  end
end
