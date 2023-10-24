import { error } from 'console'
import React from 'react'

const CustomErrorPage = () => {
    throw error;
  return (
    <div>CustomErrorPage</div>
  )
}

export default CustomErrorPage