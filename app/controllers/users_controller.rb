class UsersController < ApplicationController
  before_action :authenticate_user

  def show
    render json: current_user.as_json(only: [:role, :email])
  end
end
