class GitHub {
    constructor() {
        this.client_id = '9d99a3eb959670afad04';
        this.client_secret = 'b526f53de343c168c8ce28c62367b1fbde0190e7';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}