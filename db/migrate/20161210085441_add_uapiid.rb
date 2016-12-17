class AddUapiid < ActiveRecord::Migration[5.0]
  def change
  		add_column :shops, :Unique_API_ID, :string
  end
end
