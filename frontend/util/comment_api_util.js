export const fetchComments = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/comments`,
    })
)

export const fetchComment = commentId => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}`
    })
)

export const postComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `api/comments`,
        data: {comment},
    })

}

export const patchComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment},
    })
)

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })

)
