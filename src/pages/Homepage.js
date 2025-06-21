import React from 'react'

function Homepage() {
  return (
    
    <form class="form">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  required/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
        </div>
        <div>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password" />
                
              </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Homepage
