  
import React, { useState } from "react"
import video from "../data/video.js";
import ViewDate from "./ViewsDate";
import Title from "./Title"
import Votes from "./Votes"
import CommentSection from "./CommentSection"


function App() {
  console.log("Here's your data:", video);

  const [hideStatus, setHideStatus] = useState(false)
  const buttonText = hideStatus ? "Show Comments" : "Hide Comments"

  function handleClick(event) {
      setHideStatus((hideStatus) => (!hideStatus))
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Title title={video.title}/>
      <ViewDate views={video.views} createdAt={video.createdAt}/>
      <Votes upVotes={video.upvotes} downVotes={video.downvotes}/>
      <br></br>
      <button
            onClick={handleClick}
        >
        {buttonText}
        </button>
        <div>{hideStatus ? console.log("it's true") : console.log("it is false")}</div>
        <CommentSection hideStatus={hideStatus} comments={video.comments}></CommentSection>
    </div>
    
  );
}

export default App;