import fetchData from '@lib/fetchData';

const fetchAPI = (api, local, db) => {
    if (process.env.USE_DATA_SOURCE === 'LOCAL' || process.env.USE_DATA_SOURCE === 'DATABASE') {
        if (process.env.USE_API === 'YES') {
            return fetchData(api);
        } else if (process.env.USE_DATA_SOURCE === 'LOCAL') {
           return fetchData(local);
        } else if (process.env.USE_DATA_SOURCE === 'DATABASE') {
            return fetchData(db)
        } else {
            throw 'fetchShows(): Looks like some environment variables are not set or wrong!'
        }
    }
}

export default fetchAPI;