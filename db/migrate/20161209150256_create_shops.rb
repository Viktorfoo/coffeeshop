class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.text :address
      t.string :website
      t.text :description
      t.string :claimed
      t.string :email
      t.string :phone_office
      t.string :phone_mobile
      t.string :postal_code

      t.timestamps
    end
  end
end
