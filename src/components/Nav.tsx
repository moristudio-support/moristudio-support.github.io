import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Nav.module.css'
import logo from '../assets/images/ic-logo.png'

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}><img src={logo} alt="Mori Studio" className={styles.logoImg} /><span className={styles.logoText}>Mori Studio</span></Link>
        <div className={styles.links}>
          <button type="button" onClick={() => scrollTo('products')}>Products</button>
          <button type="button" onClick={() => scrollTo('skills')}>Skills</button>
          <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  )
}
