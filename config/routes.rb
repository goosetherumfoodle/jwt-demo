Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resource :animal, only: [:show] # demonstration route
  resource :agents, only: [:show]
  resource :agency_dashboard, only: [:show]
  resource :app_data, only: [:show]
end
