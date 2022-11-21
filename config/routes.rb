Rails.application.routes.draw do
  namespace :api do
    resources :greetings, only: [:index]
  end
  # Defines the root path route ("/")
  root 'root#index'
end
