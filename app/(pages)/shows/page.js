import { Suspense } from "react";

const fetchData = async () => {
    const res = await fetch(`${process.env.HOST}/api/shows`);
    // OR LOCAL DATA IMPORT / DATABASE REQUEST IF USE_API=NO
    return res.json();
}

const Shows = async () => {
    const shows = fetchData();
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