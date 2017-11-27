RSpec.describe UsersController, type: :request do
  describe '#show' do
    let(:user) {User.create! email: 'test-user@example.com', password: 'password', role: 'normal'}

    describe 'authenticated' do
      it 'responds 200' do
        get users_path, headers: auth_token_for(user)

        expect(response.status).to be(200)
      end

      it 'responds has correct schema' do
        get users_path, headers: auth_token_for(user)

        expect(response).to match_response_schema(:users)
      end
    end

    describe 'unauthenticated' do
      it 'responds 401 Unauthorized' do
        get users_path, headers: bad_auth_token

        expect(response.status).to be(401)
      end
    end
  end
end
