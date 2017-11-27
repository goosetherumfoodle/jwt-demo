Rails.application.routes.draw do
  post 'user_token' => 'user_token#create' # required by knock gem
  resource :users, only: [:show]
end
