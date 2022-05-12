import React from "react"

const YouTubeIframe = ({ source, caption, credit }) => {
  return (
    <figure className="youtube">
      <iframe allowfullscreen="yes" frameborder="0" height="400px" src={source} title="YouTube-video" width="100%"></iframe>
      <figcaption><span>{caption}</span><span>{credit}</span></figcaption>
    </figure>
  )
}

export default YouTubeIframe