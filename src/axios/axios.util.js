import axios from 'axios'


export const fetchPlayersData = async () => {

    const config = {
        method: 'GET',
        url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
    }

    const result = await axios(config);

    return result
}