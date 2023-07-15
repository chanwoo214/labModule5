const GamesUiService = class {

    constructor (apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getAllPosts(limit) {

        var response = await fetch(`${this.apiBaseUrl}/posts?_limit=${limit}`);
        var posts = await response.json();
        return posts;
    }
}