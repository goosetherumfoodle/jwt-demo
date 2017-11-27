class User < ApplicationRecord
  has_secure_password

  enum role: { 'normal' => 0,
               'admin' => 1 }

  def as_json(options = {})
    super(options.merge({except: [:password_digest]}))
  end

  def to_token_payload
    {sub: id, role: role}
  end
end
