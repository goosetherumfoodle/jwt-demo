class UserTokenController < Knock::AuthTokenController
  def create
    json = auth_token.as_json.merge(userRole: entity.role)
    render json: json, status: :created
  end
end
