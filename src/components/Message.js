import React from 'react'

function Message() {
  return (
    <div className='message-container'>
        <form>
            <input placeholder='name'></input>
            <input placeholder='id'></input>
            <textarea placeholder='message'></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Message