
export const fetchLikes = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/likes`,
    })
)

export const fetchLike = likeId => (
    $.ajax({
        method: 'GET',
        url: `api/likes/${likeId}`
    })
)



export const postLike = like => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `api/likes`,
        data: { like },
    })

}

export const patchComment = like => (
    $.ajax({
        method: 'PATCH',
        url: `api/likes/${like.id}`,
        data: { like },
    })
)

export const deleteLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${likeId}`
    })

)