import React from "react"


function ViewDate({views, createdAt}) {
    return (<div>
        <p>{views} views | uploaded {createdAt}</p>
        </div>)
}


export default ViewDate