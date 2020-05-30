class Api::CommentsController < ApplicationController
    def index 
        @commeents = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
            # render json: ["Invalid video arguments"], status: 422
        end
    end

    def create
        # debugger
        @comment = Comment.new(comment_params)

        # debugger
        # @video[view_count] = 0
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if current_user && @comment.author_id == current_user.id
            @comment.destroy
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end
    private
    def comment_params
        # puts params
        params.require(:comment).permit(:body, :video_id, :author_id, :parent_id)
    end
end
