class Api::VideosController < ApplicationController
    def index 
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        render :show
    end

    def update
        @video = Video.find_by(id: params[:id])
        if @video.update
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def create
        @video = Video.new(video_params)

        # debugger
        # @video[view_count] = 0
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        if current_user && @video.author_id == current_user.id
            @video.destroy
        else
            render json: @video.errors.full_messages, status: 401
        end
    end
    private
    def video_params
        puts params
        params.require(:video).permit(:title, :description, :author_id, :view_count, :upload, :thumbnail)
    end
end
