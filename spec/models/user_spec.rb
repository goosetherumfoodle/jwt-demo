RSpec.describe User do
  describe '#build!' do
    it 'correctly builds attributes' do
      user = User.build!(email: 'test@example.com', level: '4', npn: 235235, name: 'Mark', password: 'pass')
      level = user.level
      npn_number = user.npn.number
      email = user.email

      expect([level, npn_number, email]).to eq(['4', 235235, 'test@example.com'])
    end

    it "doesn't allow for two users to have same npn" do
      User.build!(email: 'test@example.com', level: '4', npn: 777, name: 'Jez', password: 'pass')

      expect { User.build!(email: 'new@example.com', level: '4', npn: 777, name: 'Jane', password: 'pass') }.to raise_error(ActiveRecord::RecordNotUnique)
    end

    it "doesn't allow for two users to have same email address" do
      User.build!(email: 'test@example.com', level: '4', npn: 1111, name: 'Big Suze', password: 'pass')

      expect { User.build!(email: 'test@example.com', level: '4', npn: 22222, name: 'Jane', password: 'pass') }.to raise_error(ActiveRecord::RecordNotUnique)
    end
  end
end
