class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.timestamps null: false
    end

    add_index :albums, :owner_id
    add_index :albums, [:owner_id, :name], unique: true
  end
end
