import axios from 'axios';

class Api {
	static async getUserInfo(username) {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`);
			console.log(response);
		} catch (err) {
			console.log('erro na API');
		}
	}
}

Api.getUserInfo('GabrielCC163');
Api.getUserInfo('asasssssssssssdasd');