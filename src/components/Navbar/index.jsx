import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import logo from '../../assets/logo.png'
import FaSearch from 'react-icons/fa'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
function index({ isScrolled }) {
  const links = [
    { name: 'home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' }
  ]

  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)
  return (
    <div className={cx('container')}>
      <div className={cx('content-left')}>
        <div className={cx('logo')}>
          <img src={logo} alt='logo' />
        </div>
        <ul className={cx('links')}>
          {links.map((name, link) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={cx('content-right')}>
        <div className={cx('search')}>
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default index
