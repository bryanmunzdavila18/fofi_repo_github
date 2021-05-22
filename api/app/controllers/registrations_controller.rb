class RegistrationsController < ApplicationController
  def create
    user = User.create!(
      user_name: params['user']['user_name'],
      email: params['user']['email'],
      password: params['user']['password']
    )
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end
end