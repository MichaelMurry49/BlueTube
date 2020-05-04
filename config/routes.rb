Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	namespace :api, defaults: {format: :json} do
		resources :users
		resource :session
		resources :videos
	end
	# resource :uploads, only: :show
	root to: 'static_pages#root'
end
