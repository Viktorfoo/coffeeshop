class Shop < ApplicationRecord
    def self.find_within(lat, lon, distance=1000)
      lon, lat = ActiveRecord::Base.sanitize(lon), ActiveRecord::Base.sanitize(lat)
      select("*, ST_Distance(lonlat, ST_MakePoint(#{lon}, #{lat})) as distance").
       where("ST_DWithin(lonlat, ST_MakePoint(#{lon}, #{lat}), #{distance})").
        order("distance ASC")
    
    end
    def api_representation
    {
        latitude: lonlat.latitude,
        longitude: lonlat.longitude,
        name: name,
        wifi: wifi, 
        id: id,
        power_outlet: power_outlet,                                                           
        new_cafe: new_cafe,                                                             
        trending: trending
    }
    end	


end
