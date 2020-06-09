class Api::LikesController < ApplicationController
    
    def show
        @like = Like.find_by(id: params[:id])
        render :show
    end

    def index 
        @likes = Like.all
        render :index
    end
    
    def update
        # debugger
        @like = Like.find_by(id: like_params[:id])
        if @like.update_attributes(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def create
        # debugger
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        @like = Like.find_by(id: params[:id])
        if current_user && @like.liker_id == current_user.id
            @like.destroy
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    private
    def like_params
        params.require(:like).permit(:id, :positive_like, :liker_id, :likeable_id, :likeable_type)
    end
end
