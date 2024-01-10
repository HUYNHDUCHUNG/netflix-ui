import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
import styles from './Netflix.module.scss'
import classNames from 'classnames/bind'
import backGroundImage from '../../assets/home.jpg'
import MovieLogo from '../../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'
const cx = classNames.bind(styles)

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false)
  window.scroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.scroll = null)
  }

  return (
    <Container>
      <NavBar isScrolled={isScrolled} />
      <div className={cx('hero')}>
        <img src={backGroundImage} alt='background' className={cx('background-image')} />
      </div>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src={MovieLogo} alt='logo' />
        </div>

        <div className={cx('buttons')}>
          <button>
            <FaPlay />
          </button>
          <button>
            <AiOutlineInfoCircle />
          </button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div``
export default Netflix
