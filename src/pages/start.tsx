import React from 'react'
import Navbar from '@/components/Navbar'

type Props = {}

const Start = (props: Props) => {
  return (
    <div>
        <Navbar />
        <div>
            <h1>Kindly fill the form below</h1>
    <form action="">
    <input type="text" placeholder="Type here" className="input" />
    <input type="text" placeholder="Type here" className="input" />
    <input type="text" placeholder="Type here" className="input" />
    </form>

        </div>
    </div>
  )
}

export default Start