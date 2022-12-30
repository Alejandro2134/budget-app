export const Title = ({ heading, text }) => {
    const renderTitle = () => {
        const selectTitleHeading = {
            h1: <h1 className="mt-3">{text}</h1>,
            h2: <h2 className="mt-3">{text}</h2>,
            h3: <h3 className="mt-3">{text}</h3>,
            h4: <h4 className="mt-3">{text}</h4>,
            h5: <h5 className="mt-3">{text}</h5>,
            h6: <h6 className="mt-3">{text}</h6>
        }

        return selectTitleHeading[heading] || <h1>{text}</h1>;
    }

    return (
        <>
            { renderTitle() }
        </>
    )
}