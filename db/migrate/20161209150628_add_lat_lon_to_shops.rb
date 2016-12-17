class AddLatLonToShops < ActiveRecord::Migration[5.0]
  def change
  	add_column :shops, :lonlat, :st_point, geographic: true
  end
end
