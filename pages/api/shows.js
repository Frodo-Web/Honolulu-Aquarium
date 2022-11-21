import shows from '@data/shows.js';

const handler = async (req, res) => {
  console.log('Processing API request at api/shows')
  if (process.env.USE_DATA_SOURCE === 'LOCAL') {
    res.status(200).json(shows);
  } else if (process.env.USE_DATA_SOURCE === 'DATABASE') {
    // DATABASE REQUEST HERE
    throw 'Database requests are not supported yet!';
  } else {
    throw 'Only local data fetch / import is supported';
  }
}

export default handler;