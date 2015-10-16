class AddPhotoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :photo_url, :string, default: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1445033817/dzkg6i40xsb16orsipu8.jpg"
  end
end
