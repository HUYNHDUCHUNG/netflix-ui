import classNames from 'classnames/bind'
import styles from './BackgroundImage.module.scss'
import background from '../../assets/login.jpg'

const cx = classNames.bind(styles)

function BackgroundImage() {
  return (
    <div className={cx('container')}>
      <img className={cx('background')} src={background} alt='background' />
    </div>
  )
}

export default BackgroundImage
