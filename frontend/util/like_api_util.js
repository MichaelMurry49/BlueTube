
export const fetchLikes = () => (
    $.ajax({
        method: 'GET',
        url: `api/likes`,
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

export const patchLike = like => (
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