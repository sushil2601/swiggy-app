import React from 'react'

import { useRouteError } from 'react-router-dom'

const Error = () => {

  const err = useRouteError();

  return (
    <div className='p-2 m-2'>
      <h1 className='font-bold py-2'>Oops!!!!</h1>
      <h2 className='font-bold py-2'>{err.data}</h2>
      <h3 className='font-bold'>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error
