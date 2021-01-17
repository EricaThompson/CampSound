export const createStory = (userId, story) => (
    $.ajax({
        url: `/api/users/${userId}/stories`,
        method: 'POST',
        data: story,
        // contentType: false,
        // processData: false
    })
)

export const readAllStories = () => (
    $.ajax({
        url: `/api/stories`,
        method: 'GET'
    })
)