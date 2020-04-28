
export const signIn = user => (
    $.ajax({
        method: "POST",
        url: `api/session`,
        data: {user}
    })
)

export const signUp = user => (
    $.ajax({
        method: "POST",
        url: `api/users/${user.id}`,
        data: { user }
    })
)

export const signOut = () => (
    $.ajax({
        method: "DELETE",
        url: `api/users/${user.id}`,
    })
)