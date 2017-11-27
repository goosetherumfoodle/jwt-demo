RSpec.describe AgencyDashboardsController, type: :request do
  let(:user) { User.build!(level: '6', npn: 1, email: 'upline@example.com', name: 'Sally', password: 'pass') }

  describe "GET /agency_dashboard" do
    before do
      upline = user
      downline = User.build!(level: '4', npn: 2, email: 'downline@example.com', name: 'Liz', password: 'pass')
      carrier = Carrier.build!(name: 'UPMC')
      other_carrier = Carrier.build!(name: "Jim's cheap care")
      other_downline = User.build!(level: '4', npn: 3, email: 'other@example.com', name: 'other', password: 'pass')

      Mygs.add_downlines(upline: upline, downlines: [other_downline], carrier: other_carrier)
      Mygs.add_downlines(upline: upline, downlines: [downline], carrier: carrier)
    end

    describe 'good auth token' do
      it "Responds 200" do
        get agency_dashboard_path, headers: auth_token_for(user)

        expect(response).to be_success
      end

      it "response has correct JSON shape" do
        get agency_dashboard_path, headers: auth_token_for(user)

        expect(response).to match_response_schema("agency_dashboard")
      end
    end

    describe 'bad auth token' do
      it 'respond 401 unauthorized' do
        get agency_dashboard_path, headers: bad_auth_token

        expect(response.status).to eq(401)
      end
    end
  end
end
