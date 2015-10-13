class Photos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.string :name, null: false
      t.integer :album_id, null: false
      t.timestamps null: false
    end
    add_index :photos, :album_id
    add_index :photos, [:name, :album_id], unique: true
  end
end
