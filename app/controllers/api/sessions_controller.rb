class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_user_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            sign_in(@user)
            render "/"
        else
            render json: ["Invalid user credentials"]
        end
    end

    def destroy
        if(currentUser)
            signout(currentUser)
            render "/"
        else
            render :json ["Invalid action: no one is signed in"], status 404
        end

    end
end
