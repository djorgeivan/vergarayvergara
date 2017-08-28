ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :neighborhood, :area, :price, :details, :phone, :landline, :kind, images: []

  index do 
    column :title
    column :price do |post|
      number_to_currency post.price
    end
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :title
      row :price
      row :neighborhood
      row :kind
    end

    active_admin_comments
  end

  
  form do |f|
    f.inputs "Admin Details" do
      f.input :title
      f.input :images, as: :file ,input_html: { multiple: true } 
      f.input :kind, as: :select, :selected => "Casas",  :collection => ["Casas", "Apartamentos", "Lotes", "Fincas", "Bodegas"]
      f.input :neighborhood
      f.input :area
      f.input :price
      f.input :details
      f.input :phone
      f.input :landline
    end
    f.actions
  end
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
