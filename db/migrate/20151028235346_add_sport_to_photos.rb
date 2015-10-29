class AddSportToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :sport, :string, default: "none", null: false
  end
end
