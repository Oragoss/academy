'use client';
import React from 'react'

//Errors in layout.tsx will not be caught here
//In order to catch errors truely everywhere you'll need a global-error.tsx file

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    //Ultimately you'd want a real logging system like Elk or Sentry
    console.log('Error', error);
  return (
    <>
        <div>An unexpected error has occurred.</div>
        <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage