json.set! item.id do
    json.id item.id
    json.pokemon_id item.pokemon_id
    json.name item.name
    json.price item.price
    json.happiness item.happiness
    json.image_url asset_path(item.image_url) 
end