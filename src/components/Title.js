import React from 'react'

function Title() {
    console.log("Rendering Children :TITLE");

    return (
        <div>
            WELCOME TO THE TITLE
        </div>
    )
}

export default React.memo(Title)
