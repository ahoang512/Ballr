Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:create, :destroy, :index]
    resources :photos, only: [:index, :create, :destroy] do
      collection do
        get 'random'
      end
    end
  end
  resources :users
  resource :session, only: [:new, :create, :destroy]
end
