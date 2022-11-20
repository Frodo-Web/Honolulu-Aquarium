import { shows } from '@data/shows.js';
import sleep from '@lib/sleep.js';

const handler = async (req, res) => {
  if (process.env.USE_API_DELAY === 'YES') {
    await sleep(2000);
  }
  res.status(200).json(shows);
}

export default handler;