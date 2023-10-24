'use client';
import React from 'react'
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
    </div>
  )
}

export default Loading