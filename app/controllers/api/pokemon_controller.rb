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
        @poke = Pokemon.new(pokemon_params)
        if @poke.save
            move_1 = Move.find_or_create_by(name: move_params[:move_1])
            move_2 = Move.find_or_create_by(name: move_params[:move_2])
            PokeMove.create!(pokemon_id: @poke.id, move_id: move_1.id)
            PokeMove.create!(pokemon_id: @poke.id, move_id: move_2.id)
            render :show
        else
            render json: @poke.errors.full_messages, status: 404
        end
    end

    private

    def move_params 
        params.require(:pokemon).permit(:move_1, :move_2)
    end

    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
    end

end

# Testing
# data = {pokemon: {name: 'garfield', attack: 1, defense: 1, poke_type: 'fire', image_url: 'https://pbs.twimg.com/profile_images/1242488527285190657/O6d8H8YA_400x400.jpg', move_1: 'sleep', move_2: 'eat'}}
# params = {:pokemon=> {:name=> 'garfield', :attack=> 1, :defense=> 1, :poke_type=> 'fire', :image_url=> 'https://pbs.twimg.com/profile_images/1242488527285190657/O6d8H8YA_400x400.jpg', :move_1=> 'sleep', :move_2=> 'eat'}}