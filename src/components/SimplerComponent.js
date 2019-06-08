// Code SimplerComponent Here

import React from 'react'



let SimplerComponent = (props) => {
    return(
        <div onClick={(e) => props.handleClick(e)}>
            I am just happy
        </div>
    )
}

export default SimplerComponent