import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

const TimeAgo = ({timeStamp}) => {
    let timeAgo = '';
    if(timeStamp) {
        const date = parseISO(timeStamp)
        const timePeroid = formatDistanceToNow(date)
        timeAgo = `${timePeroid} ago`
    }
    console.log(timeStamp," timeStamp")
  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
