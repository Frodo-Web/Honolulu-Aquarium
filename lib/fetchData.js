import sleep from '@lib/sleep.js';

const fetchData = async (src) => {
    if (process.env.USE_FETCH_DELAY === 'YES') {
        await sleep(2000);
    }
    if (process.env.USE_DATA_SOURCE === 'LOCAL') {
        if (process.env.USE_API === 'YES') {
            const res = await fetch(`${process.env.API_HOST}/${src}`);
            return res.json();
        } else {
            const { default: data } = await import(`@data/${src}`);
            return data;
        }
    }
    if (process.env.USE_DATA_SOURCE === 'DATABASE') {
        if (process.env.USE_API === 'YES') {
            // DATABASE REQUEST ON API
            const res = await fetch(`${process.env.API_HOST}/${src}`);
            return res.json();
        } else {
            // DATABASE REQUEST DIRECTLY HERE
            throw 'Database requests are not supported yet!'
        }
    }
}
export default fetchData;