'use client'
import { faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import background from '../public/background.jpg'
import aboutImg from '../public/f1_suzuka_2022_1.jpg'
import style from '../styles/Top.module.scss'

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  thumbnail_url?: string
  timestamp: Date
  username: string
}

interface Props {
  instagramPosts: [InstagramPost]
}

export default function HomePage({ instagramPosts }: Props) {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <div className={style.cover}>
        <Image src={background} alt='Background' width={width} />
      </div>

      <div className={'container'}>
        <div className={`containerInner ${style.about}`}>
          <Image className={style.aboutImg} src={aboutImg} alt={'About'} width={width / 2} />
          <div className={style.aboutIntro}>
            <h1 className={style.subtitle}>ABOUT</h1>
            <div className={style.socialIcons}>
              <Link
                className={`${style.btn} ${style.socialIcon}`}
                href='https://www.instagram.com/__kantacky__/'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                className={`${style.btn} ${style.socialIcon}`}
                href='https://www.twitter.com/__kantacky__'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                className={`${style.btn} ${style.socialIcon}`}
                href='https://www.youtube.com/@__kantacky__'
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link className={`${style.btn} ${style.socialIcon}`} href='https://chatlab.space'>
                <FontAwesomeIcon icon={faPodcast} />
              </Link>
              <Link
                className={`${style.btn} ${style.socialIcon}`}
                href='https://github.com/kantacky'
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
            <div className={`${style.btn} ${style.moreBtn}`}>SEE MORE</div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'containerInner'}>
          <>
            <h1 className={style.subtitle}>INSTAGRAM</h1>
            <div className={style.instagramPosts}>
              {instagramPosts.map((post: InstagramPost) => {
                return (
                  <Link key={post.id} href={post['permalink']}>
                    <Image
                      src={post['thumbnail_url'] ?? post['media_url']}
                      alt={`InstagramPost:${post['id']}`}
                      width={1024}
                      height={1024}
                    />
                  </Link>
                )
              })}
            </div>
          </>
        </div>
      </div>
    </>
  )
}
