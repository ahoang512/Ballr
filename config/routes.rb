Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users
  resource :session, only: [:new, :create, :destroy]
end
