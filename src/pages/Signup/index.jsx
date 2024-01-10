import React, { useState } from 'react'
import BackgroundImage from '../../components/BackgroundImage'
import Header from '../../components/Header'
import classNames from 'classnames/bind'
import styles from './Signup.module.scss'
import { firebaseAuth } from '../../utils/firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleSignUp = async () => {
    try {
      const { email, password } = formValue
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (e) {
      console.log(e)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/')
  })
  return (
    <div className={cx('container')}>
      <BackgroundImage />
      <div className={cx('content')}>
        <Header login />

        <div className={cx('body')}>
          <div className={cx('text')}>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className={cx('form')} style={{ gridTemplateColumns: showPassword ? '1fr 1fr' : '2fr 1fr' }}>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={setFormValue.email}
              onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
            />
            {showPassword && (
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={setFormValue.email}
                onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
              />
            )}
            {!showPassword && <button onClick={() => setShowPassword(!showPassword)}>Get Started</button>}
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
