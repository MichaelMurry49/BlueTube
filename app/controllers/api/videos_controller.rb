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
        @video = Video.find_by(id: video_params[:id])
        updates = video_params
        debugger
        updates.delete("id")
        debugger
        if @video.update(updates)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def create
        if params[:video][:thumbnail] == "" && params[:video][:upload] == ""
            render json: ["Video and Thumbnail files are required"], status: 422
            return nil
        elsif params[:video][:thumbnail] == ""
            render json: ["Thumbnail file is required"], status: 422
            return nil
        elsif params[:video][:upload] == ""
            render json: ["Video file is required"], status: 422
            return nil
        end
        @video = Video.new(video_params)

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
        puts "video params #{params}"
        params.require(:video).permit(:id,:title, :description, :author_id, :view_count, :upload, :thumbnail)
    end
end
