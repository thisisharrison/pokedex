class Api::PokemonController < ApplicationController
    def show
        sleep 0.5
        @poke = Pokemon.includes(:items).includes(:moves).find(params[:id])
        render :show
    end

    def index
        @pokemon = Pokemon.all.limit(10)
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