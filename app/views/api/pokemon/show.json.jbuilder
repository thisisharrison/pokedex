json.pokemon do
    json.set! @poke.id do
        json.partial! 'api/pokemon/pokemon', poke: @poke
    end
end
json.moves do
    @poke.moves.each do |move|
        json.partial! 'api/pokemon/move', move: move
    end
end
if @poke.items.length != 0
    json.items do
        @poke.items.each do |item|
            json.partial! 'api/pokemon/item', item: item
        end
    end
else
    json.items ({})
end
    


# {
#   "pokemon": {
#             "1": {
#               "id": 1,
#               "name": "Bulbasaur",
#               "attack": 49,
#               "defense": 49,
#               "poke_type": "grass",
#               "image_url": "/pokemon_snaps/1.svg"
#             }
#           },
#  "moves": {
#             "1": {
#               "id": 1,
#               "name": "tackle"
#               },
#             /*...*/
#             },
# 
#   "items": {
#           "1": {
#             "id": 1,
#             "pokemon_id": 2419,
#             "name": "Sleek Marble Bench",
#             "price": 38,
#             "happiness": 43,
#             "image_url": "/assets/pokemon_potion.svg"
#           },
#           /*...*/
# 
#     }
# }