export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: `api/users`,
    })
)

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    })
)


// export const patchUser = user => (
//     $.ajax({
//         method: 'PATCH',
//         url: `api/users/${user.id}`,
//         data: {user},
//     })
// )

// export const deleteUser = userId => (
//     $.ajax({
//         method: 'DELETE',
//         url: `api/users/${userId}`,
//     })

// )
