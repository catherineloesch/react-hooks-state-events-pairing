import React, { useState } from "react"

function Votes({ upVotes, downVotes }) {
    
    const [upV, setUpV] = useState(upVotes)
    const [downV, setDownV] = useState(downVotes)

    function handleUpClick() {
        setUpV((upV) => (upV+1))
    }

    function handleDownClick() {
        setDownV((downV) => (downV+1))
    }

    return (<div>
        <button onClick={handleUpClick}>
            {upV} 👍
        </button>
        <button onClick={handleDownClick}>
            {downV} 👎
        </button>
        </div>)
}

export default Votes