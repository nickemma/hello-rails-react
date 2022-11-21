class API::GreetingsController < ApplicationController
  def index
    render json: { greeting: 'Hello World!' }
    # @greetings = Greeting.order((Arel.sql('RANDOM()')).first)
  end
end