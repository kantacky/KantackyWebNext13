import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/IconDark.png'
import style from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header>
      <div className={style.header}>
        <div className={style.headerInner}>
          <div className={style.logo}>
            <Link href='/'>
              <Image alt='logo' src={logo} width={1024} height={1024} />
            </Link>
          </div>

          <div className={style.menu}>
            <nav>
              <ul>
                <li>
                  <Link href='/about'>
                    <p>ABOUT</p>
                  </Link>
                </li>
                <li>
                  <Link href='/works'>
                    <p>WORKS</p>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <p>CONTACT</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
