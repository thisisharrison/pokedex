class Api::PokemonController < ApplicationController
    def show
        @poke = Pokemon.includes(:items).includes(:moves).find(params[:id])
        render :show
    end

    def index
        @pokemon = Pokemon.all.limit(3)
        render :index
    end

    def create
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            transaction do 
                move_1 = Move.find_or_create_by(name: params[:move_1])
                move_2 = Move.find_or_create_by(name: params[:move_2])
                PokeMove.create!(pokemon_id: @pokemon_id, move_id: move_1.id)
                PokeMove.create!(pokemon_id: @pokemon_id, move_id: move_2.id)
            end
            render :show
        else
            render json @pokemon.errors.full_messages, stat: 404
        end
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
    end

    def move_params
        params.require(:pokemon).permit(:move_1, :move_2)
    end

end
