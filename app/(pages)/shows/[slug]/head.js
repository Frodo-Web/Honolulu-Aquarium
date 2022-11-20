// fetchData function will be here


const Head = async({ params }) => {
    return (
        // Here will be a call to fetchData function using params.slug. Get title, keywords, description
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='keywords' content={"keywords"} />
            <meta name='description' content={"description"} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{params.slug}</title>
        </>
    )
}

export default Head;