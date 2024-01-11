import { BsArrowLeft } from 'react-icons/bs'
import video from '../../assets/Trailer_ Netflix.mp4'
import classNames from 'classnames/bind'
import styles from './Player.module.scss'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
function index() {
  const navigave = useNavigate()

  return (
    <div className={cx('container')}>
      <div className={cx('player')}>
        <div className={cx('back')}>
          <BsArrowLeft onClick={() => navigave(-1)} />
        </div>

        <video src={video} autoPlay loop controls muted></video>
      </div>
    </div>
  )
}

export default index
