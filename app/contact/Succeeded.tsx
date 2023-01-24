import Link from 'next/link'

export default function Succeeded() {
  return (
    <div className={'underTheHeader'}>
      <div className={'container'}>
        <div className={'containerInner'}>
          <h1>Thanks for Submitting!!</h1>
          <Link className={'decorated'} href='/'>
            Return to the Top Page
          </Link>
        </div>
      </div>
    </div>
  )
}
