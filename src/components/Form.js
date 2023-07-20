import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='form'>
        <form className='form1'>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'></textarea>
        </form>
        <button className='btn'>Submit</button>
      
    </div>
  )
}

export default Form
