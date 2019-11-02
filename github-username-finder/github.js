class GitHub {
  constructor() {
    this.client_id = '9b7aaf48b66247ac95ec'
    this.client_secret = 'db98f163abdb4719eae8d9b09023ee2cf07551b9'
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrect=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}