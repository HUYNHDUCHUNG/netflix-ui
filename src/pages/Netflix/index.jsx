import { useEffect, useState } from 'react'
import NavBar from '../../components/Navbar'
import styles from './Netflix.module.scss'
import classNames from 'classnames/bind'
import backGroundImage from '../../assets/home.jpg'
import MovieLogo from '../../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchGenres } from '../../store'
const cx = classNames.bind(styles)

function Netflix() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setIsScrolled(!(window.scrollY === 0))
  }

  return (
    <div style={{ overflowY: 'auto' }}>
      <NavBar isScrolled={isScrolled} />
      <div className={cx('hero')}>
        <img src={backGroundImage} alt='background' className={cx('background-image')} />
      </div>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src={MovieLogo} alt='logo' />
        </div>
        <div className={cx('buttons')}>
          <button onClick={() => navigate('/player')}>
            <FaPlay />
            Play
          </button>
          <button>
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
      <div style={{ height: '200vh' }}></div>
    </div>
  )
}

export default Netflix
