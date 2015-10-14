Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :albums
  end
  resources :users
  resource :session, only: [:new, :create, :destroy]
end
