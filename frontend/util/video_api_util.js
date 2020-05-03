export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: `api/videos`,
    })
)

export const fetchVideo = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/video/${videoId}`
    })
)

export const postVideo = video => (
    $.ajax({
        method: 'POST',
        url: `api/videos`,
        data: {video}
    })

)

export const patchVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: {video}
    })
)

export const deleteVideo = videoId => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/${videoId}`
    })

)
