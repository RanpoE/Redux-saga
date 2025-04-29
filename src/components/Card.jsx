import React from 'react'

const Card = ({item}) => {
  return (
    <div className='rounded-xl mt-5 p-10 border-[1px] w-[200px] flex flex-col items-center'>
        <h1>{item.name}</h1>
        <p>{item.content}</p>
        <i>{item.createdAt}</i>
    </div>
  )
}

export default Card