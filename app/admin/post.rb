ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :neighborhood, :area, :price, :rooms, :bathrooms, :details, :phone, :landline, :kind, :latitude, :longitude, images: []

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
      f.input :title, placeholder: "Ej: Venta de casa en ..."
      f.input :images, as: :file ,input_html: { multiple: true }
      f.input :kind, as: :select, :selected => "Casas",  :collection => ["Casa", "Apartamento", "Lote", "Finca", "Bodega"]
      f.input :rooms, placeholder: "Cantidad de cuartos"
      f.input :bathrooms, placeholder: "Cantidad de baños"
      f.input :neighborhood, placeholder: "Barrio de ubicación"
      f.input :area, placeholder: "Ej: 150 (no agregue letras a este campo)"
      f.input :price, placeholder: "Ej 350000000 (no agregue puntos o comas)"
      f.input :details, placeholder: "Breve descripción del inmueble"
      f.input :phone, placeholder: "Telefono celular (no agregue espacios)"
      f.input :landline, placeholder: "Telefono fijo (no agregue espacios)"
      f.input :latitude, placeholder: "Latitud de google maps"
      f.input :longitude, placeholder: "longitud de google maps"
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
