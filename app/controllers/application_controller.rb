class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in?

    # CSS SR
    def currentUser
        return @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def sign_in!(user)
        @current_user = user;
        session[:session_token] = user.reset_session_token!
    end

    def signed_in?
        !!current_user
    end

    def sign_out!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

end
