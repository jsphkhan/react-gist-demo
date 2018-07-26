const  BASE_URL = 'https://api.github.com';

export default {
    getAllGistUrl: (username) => {
        return `${BASE_URL}/users/${username}/gists`;
    },
    getSingleGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}