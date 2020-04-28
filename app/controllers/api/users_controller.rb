class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            signin(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private 
    def user_params
        params.require(:user).require(:username, :email, :password)
    end
end
