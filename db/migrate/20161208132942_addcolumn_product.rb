class AddcolumnProduct < ActiveRecord::Migration[5.0]
  def change
  	add_column :products, :lonlat, :st_point, geographic: true
  end
end

