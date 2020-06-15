class Api::UsersController < ApplicationController
    def create
        # debugger
        @user = User.new(user_params)
        # @user.picture ||= "https://blue-tube-dev.s3-us-west-1.amazonaws.com/smile.jpg";
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

    def index 
        @users = User.all
        render :index
    end

    private 
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
