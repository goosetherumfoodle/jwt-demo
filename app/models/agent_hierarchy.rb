class AgentHierarchy < ApplicationRecord
  def self.build!(downline_npn_id:, upline_npn_id:, carrier_id:)
    create! downline_npn: downline_npn_id,
            upline_npn: upline_npn_id,
            carrier_id: carrier_id
  end

  def self.downline_npns_for(upline_npn_id:, carrier_id:)
    where(upline_npn: upline_npn_id, carrier_id: carrier_id).pluck(:downline_npn)
  end
end
