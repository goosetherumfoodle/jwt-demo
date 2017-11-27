module AuthenticationSupport
  def auth_token_for(user)
    token = token_for_id(user.id)

    { 'Authorization': "Bearer #{token}" }
  end

  def bad_auth_token
    token = token_for_id "this isn't even an id"

    { 'Authorization': "Bearer #{token}" }
  end

  def token_for_id(id)
    Knock::AuthToken.new(payload: { sub: id }).token
  end
end
