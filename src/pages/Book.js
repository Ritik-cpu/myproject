import React from 'react'
import './Book.css'
import { useGlobalContext } from '../context'

export default function Book() {
  const { mybook } = useGlobalContext()
  return (
    <div>
<div className="container">  
  <form id="contact" action method="post">
    <h3>Movie name: {mybook.name}</h3>
    <fieldset>
      name: <input placeholder="Your name" value={mybook.name} type="text" tabIndex={1} required autofocus />
    </fieldset>
    <fieldset>
      status: <input placeholder="" type="text" value={mybook.status} tabIndex={2} required />
    </fieldset>
    <fieldset>
     language: <input placeholder=" " type="text" tabIndex={3} value={mybook.language} required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabIndex={5} required defaultValue={""} />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    </div>
  )
}
