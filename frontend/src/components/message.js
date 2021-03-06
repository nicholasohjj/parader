import React from 'react'



const Message = ({ message }) => {
    const messagestyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    
    if (message === null) {
    return null
  }
    return (
        <div style={messagestyle}>
        {message}
        </div>
        )
}

export default Message

//not relevant