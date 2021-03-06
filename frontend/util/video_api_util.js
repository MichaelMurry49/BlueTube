export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: `api/videos`,
    })
)

export const fetchVideo = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}`
    })
)

export const postVideo = video => (
    $.ajax({
        method: 'POST',
        url: `api/videos`,
        data: video,
        contentType: false,
        processData: false
    })

)

export const patchVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: video,
        contentType: false,
        processData: false
    })
)

export const deleteVideo = videoId => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/${videoId}`
    })

)
