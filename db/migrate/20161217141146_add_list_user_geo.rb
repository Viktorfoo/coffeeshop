class AddListUserGeo < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :lonlat, :st_point, geographic: true
  end
end
