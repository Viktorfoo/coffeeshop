class AddFieldsWifi < ActiveRecord::Migration[5.0]
  def change
  	add_column :shops, :wifi, :boolean,default: false
  	add_column :shops, :power_outlet, :boolean, default: false
  	add_column :shops, :new_cafe, :boolean, default: false
  	add_column :shops, :trending, :boolean, default: false
  	add_column :shops, :crowd, :integer, default: 1

  end
end
