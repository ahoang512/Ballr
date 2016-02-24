Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:create, :destroy, :index]
    resources :photos, only: [:index, :create, :destroy, :update] do
      collection do
        get 'feed'
        get 'user_photos'
      end
    end
    resources :comments, only: [:create, :index]
  end
  resources :users , only: [:new, :show, :create, :update, :index] do

  end
  resource :session, only: [:new, :create, :destroy]
end
