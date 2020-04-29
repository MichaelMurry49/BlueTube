class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user[:session_token] = "off"
        @user[:created_at] = DateTime.now
        @user[:updated_at] = DateTime.now
        if @user.save
            sign_in!(@user)
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
        params.require(:user).permit(:username, :email, :password)
    end
end
