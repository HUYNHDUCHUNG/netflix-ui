import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)

function Header({ login }) {
  const navigate = useNavigate()
  return (
    <div className={cx('container')}>
      <div className={cx('logo')}>
        <img src={logo} alt='logo' />
      </div>
      <button onClick={() => navigate(login ? '/login' : '/signup')}>{login ? 'Login' : 'Sign In'}</button>
    </div>
  )
}

export default Header
