require "pry"

class CoffeeshopsController < ApplicationController
	# GET /api/v1/topics/:id
  before_action :authenticate_user!, :only => [:create]
  #protect_from_forgery with: :null_session
  def all
    render json: Shop.all.to_json
  end

  def update

    shop = params[:coffeeshops].each do |shop_obj|# {name: "aa", lat: 1.2}
    Shop.create(name: shop_obj[:name], lat: shop_obj[:lat], long: shop_obj[:long])    
    end
      render text: "OK"
      #why do i need to render text ok?
      #
  end

  def shop_map

  end

  def main_map
  end

  def index_map
  end
  


  def showjson
    String phone_my = ""; 
    #shop = params[:coffeeshops].each do |shop_obj|# {name: "aa", lat: 1.2}
    shop = params[:meta][:code]
    #shop2 = shop_obj[:contact].each do |shop_obj2|#
     
    #format.ht†Ωmodeml {render :text => shop_obj[:name].html_content}
    #  phone_my=shop_obj2[:phone]

#    end
    #Shop.create(name: shop_obj[:name], lat: shop_obj[:lat], long: shop_obj[:long], phone_office: shop_obj[:contact][:phone])    
  #end
      render json: shop
  end
  
  def show4square_bk

  	param_lat = params[:lat]
  	param_lon = params[:lon]
  	param_distance = params[:distance]
	  shops = Shop.find_within(param_lon, param_lat, param_distance)
	  render json: shops.map { |shop| shop.api_representation }
  
  end

  def show4square
    
  end

  def update4square
  #response = HTTParty.get('https://api.foursquare.com/v2/venues/search?client_id=ILD5DYYDXBNK3SFMRR4O15U34EDA3YRMB0DM351Z0EJPZSSX&client_secret=FCXPOWELSYKJCHMUDBI3FIR1MOTH51I5KAFPQNPX0EZ2EKEQ&v=20130815&ll=1.2921502,103.8473175&query=coffee')
  param_lat = params[:lat]
  param_lon = params[:lon]
  param_distance = params[:distance] 
  response = HTTParty.get('https://api.foursquare.com/v2/venues/search?client_id=ILD5DYYDXBNK3SFMRR4O15U34EDA3YRMB0DM351Z0EJPZSSX&client_secret=FCXPOWELSYKJCHMUDBI3FIR1MOTH51I5KAFPQNPX0EZ2EKEQ&v=20130815&ll='+ param_lon + ',' +  param_lat +'&query=coffee&radius='+param_distance)
  
	
  #binding.pry
	responsevenue = response["response"]["venues"]
	#responsecategory = response["response"]["category"]

	responsevenue.each do |shop_obj|
		puts shop_obj["name"]
		puts shop_obj["contact"]["phone"]
		puts shop_obj["id"]
		puts shop_obj["location"]["crossStreet"]
		puts shop_obj["location"]["address"]
		puts shop_obj["location"]["postalCode"]
		puts shop_obj["location"]["lat"]
		puts shop_obj["location"]["lng"]
		puts shop_obj["location"]["country"]
		#Shop.create(name: shop_obj["name"], phone_office: shop_obj["contact"]["phone"], Unique_API_ID: shop_obj["id"])    
  		Shop.create(name: shop_obj["name"], phone_office: shop_obj["contact"]["phone"], Unique_API_ID: shop_obj["id"],address: shop_obj["location"]["crossStreet"], lonlat: "POINT(#{shop_obj['location']["lng"]} #{shop_obj["location"]["lat"]})")    
  		
		puts "_______________________________"		
  	end

      render text: "OK"    
  end

  def show
  
  end

  # GET /api/v1/topics
  def index

  end

  # POST /api/v1/topics
  def create

  end
end
