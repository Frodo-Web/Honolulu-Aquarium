const Head = async({ title, keywords, description }) => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </>
    )
}

Head.defaultProps = {
    title: 'Honolulu Aquarium',
    keywords: 'honolulu, aquarium, oceanarium, weekend',
    description: 'Honolulu Aquarium has 7 fish tanks',
}

export default Head;