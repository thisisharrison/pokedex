class Api::PokemonController < ApplicationController
    def show
        @poke = Pokemon.includes(:items).includes(:moves).find(params[:id])
        render :show
    end

    def index
        @pokemon = Pokemon.all
        render :index
    end
end
