import React from 'react'

type Props = {
    Name:string
}

const Section_Heading = (props: Props) => {
  return (
   <h2 className='text-3xl text-center font-medium capitalize mb-8 hover:scale-110 transition'>{props.Name}</h2>
  )
}

export default Section_Heading