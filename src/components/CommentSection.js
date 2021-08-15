import React from "react"
import Comment from "./Comment"

function CommentSection({ hideStatus, comments }) {

    const commentElements = comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment}></Comment>
    })
    
    

    const commentDisplay = hideStatus ? null : commentElements
    const titleDisplay = hideStatus ? null :  <h2>{comments.length} Comments</h2>

    return (<div>
        {titleDisplay}
        {commentDisplay}
    </div>)
}

export default CommentSection