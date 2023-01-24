import style from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>&copy; {new Date().getFullYear()} Kanta Oikawa</p>
    </footer>
  )
}
