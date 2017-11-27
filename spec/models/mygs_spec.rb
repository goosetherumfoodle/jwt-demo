RSpec.describe Mygs do
  describe '::agency_total_policies' do
    it 'credits agency with any downline agent policies' do
      # todo: decide on policies sold relationship!
      # maybe initial production table with policy, npn, carrier and date
      # use the carrier and date to determine the uplines credited?
      # downline_agent_1 = User.build!(level: '4', npn: 1, email: 'test1@example.com')
      # downline_agent_2 = User.build!(level: '4', npn: 2, email: 'test2@example.com')
      # downlne_agency   = User.build!(level: '5', npn: 3, email: 'test3@example.com')


    end
  end

  describe '::add_downlines and ::get_downlines' do
    it 'adds and retreives downlines' do
      upline = User.build!(level: '6', npn: 1, email: 'upline@example.com', name: 'upline', password: 'pass')
      downline = User.build!(level: '4', npn: 2, email: 'downline@example.com', name: 'downline', password: 'pass')
      carrier = Carrier.build!(name: 'UPMC')
      other_carrier = Carrier.build!(name: "Jim's cheap care")
      other_downline = User.build!(level: '4', npn: 3, email: 'other@example.com', name: 'other person', password: 'pass')

      subject.add_downlines(upline: upline, downlines: [other_downline], carrier: other_carrier)
      subject.add_downlines(upline: upline, downlines: [downline], carrier: carrier)
      downlines = subject.get_downlines(upline: upline, carrier: carrier)

      expect(downlines).to eq([downline])
    end

    it 'throws error if agent attempts to have multiple direct uplines on same carrier' do
      upline_1 = User.build!(level: '6', npn: 1, email: 'upline_1@example.com', name: 'upline_1', password: 'pass')
      upline_2 = User.build!(level: '6', npn: 2, email: 'upline_2@example.com', name: 'upline_2', password: 'pass')
      agent = User.build!(level: '4', npn: 3, email: 'agent@example.com', name: 'agent', password: 'pass')
      carrier = Carrier.build!(name: 'UPMC')
      subject.add_downlines(upline: upline_1, downlines: [agent], carrier: carrier)

      expect { subject.add_downlines(upline: upline_2, downlines: [agent], carrier: carrier) }.to raise_error(ActiveRecord::RecordNotUnique)
    end
  end
end
