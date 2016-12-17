Rails.application.routes.draw do
  devise_for :models
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/coffeeshop/update4square" => "coffeeshops#update4square"
  get "/coffeeshop/all" => "coffeeshops#all"
  post "/coffeeshop/update" => "coffeeshops#update"
  get "/coffeeshop/showjson" => "coffeeshops#showjson"
  get "/coffeeshop/show4square" => "coffeeshops#show4square"
  get '/coffeeshop/shop_map' => "coffeeshops#shop_map"
  get '/coffeeshop/main_map' => "coffeeshops#main_map"
  get '/coffeeshop/index_map' => "coffeeshops#index_map"

end

