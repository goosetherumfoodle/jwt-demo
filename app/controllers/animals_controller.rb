class AnimalsController < ApplicationController
  before_action :authenticate_user
  # this controller is only here for demonstrating an api endpoint

  def show
    render json: {animal: pick_animal}
  end

private

  def pick_animal
    ["zebra", "horse", "cat", "monkey", "snail",
     "dog", "cobra", "dolphin", "jim d", "tiger",
     "lion", "elephant", "shark", "whale", "iguana"].sample
  end

end
