RSpec.describe AgencyDashboardData do
  describe '::for_downlines' do
    it 'builds correct data structure' do
      agency = User.build!(level: '6',
                           npn: 1,
                           email: 'upline@example.com',
                           name: 'Hair Blair Bunch',
                           password: 'pass')


      expected = [{name: 'Hair Blair Bunch',
                   totalPoliciesSold: 100,
                   topAgents: [{name: 'Jez',
                                percentOfPolicies: 75}]}]

      result = AgencyDashboardData.for_downlines(agency)

      expect(result).to eq(expected)
    end
  end
end
