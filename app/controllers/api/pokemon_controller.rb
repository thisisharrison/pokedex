class Api::PokemonController < ApplicationController
    def show
        @poke = Pokemon.includes(:items).includes(:moves).find(params[:id])
        render :show
    end

    def index
        @pokemon = Pokemon.all.limit(3)
        render :index
    end
end
