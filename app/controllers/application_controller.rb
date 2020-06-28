class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in?, :require_sign_in

    def current_user
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
        @current_user = nil
    end

    def require_sign_in
        render json: { base: ["action requires sign in"]}, status: 401
    end
end
