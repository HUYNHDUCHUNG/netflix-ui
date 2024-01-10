import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import logo from '../../assets/logo.png'
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../../utils/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
const cx = classNames.bind(styles)
function index({ isScrolled }) {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate('/login')
    })
  }, [navigate])

  const links = [
    { name: 'home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' }
  ]

  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)
  return (
    <div className={cx(['container', isScrolled && 'scrolled'])}>
      <nav>
        <div className={cx('content-left')}>
          <div className={cx('logo')}>
            <img src={logo} alt='logo' />
          </div>
          <ul className={cx('links')}>
            {links.map((linkObj) => {
              const { name, link } = linkObj
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={cx('content-right')}>
          <div className={cx(['search', showSearch && 'showsearch'])}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false)
              }}
            >
              <FaSearch />
            </button>
            <input
              type='text'
              placeholder='Search'
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false)
                setInputHover(false)
              }}
            />
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default index
