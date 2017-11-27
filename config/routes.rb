Rails.application.routes.draw do
  resource :user_token, only: [:create]
  resource :users, only: [:show]
end
