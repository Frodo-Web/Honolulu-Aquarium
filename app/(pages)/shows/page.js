import { Suspense } from 'react';
import fetchAPI from '@lib/fetchAPI';

const Shows = async () => {

    const shows = fetchAPI('api/shows', 'shows.js', 'DATABASE REQUEST GOES HERE');
    
    return (
        <>
            <div>
                Shows!
            </div>

            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ListShows promise={shows} />
                </Suspense>
            </div>
        </>
    )
}

const ListShows = async ({ promise }) => {
    const shows = await promise;
    return (
        <ul>
            {shows.map((show) => (
                <li key={show.id}>{show.title}</li>
            ))}
        </ul>
    )
}
export default Shows;