class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def react
    render 'layouts/application'
  end
end
