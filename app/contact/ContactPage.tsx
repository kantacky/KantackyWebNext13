'use client'
import { useForm, ValidationError } from '@formspree/react'
import React from 'react'
import style from '../../styles/Contact.module.scss'
import Succeeded from './Succeeded'

export default function ContactPage() {
  const [formState, handleSubmit] = useForm('mpzewdao')

  if (formState.succeeded) {
    return <Succeeded />
  }

  return (
    <div className={'underTheHeader'}>
      <h1 className={style.title}>Contact</h1>
      <div className={'container'}>
        <div className={'containerInner ' + style.form}>
          <form onSubmit={handleSubmit}>
            <input
              className={style.email}
              type='email'
              name='email'
              placeholder='Email (Required)'
            />
            <ValidationError prefix='Email' field='email' errors={formState.errors} />

            <textarea className={style.message} name='message' placeholder='Message (Required)' />
            <ValidationError prefix='Message' field='message' errors={formState.errors} />

            <button className={style.submit} type='submit' disabled={formState.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
