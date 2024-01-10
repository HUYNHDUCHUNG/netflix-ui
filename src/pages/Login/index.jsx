import React, { useState } from 'react'
import BackgroundImage from '../../components/BackgroundImage'
import Header from '../../components/Header'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { firebaseAuth } from '../../utils/firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function Login() {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      const { email, password } = formValue
      await signInWithEmailAndPassword(firebaseAuth, email, password)
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
        <Header login={false} />

        <div className={cx('body')}>
          <div className={cx('form-container')}>
            <div className={cx('title')}>
              <h3>Login</h3>
            </div>
            <div className={cx('form')}>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={setFormValue.email}
                onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
              />

              <input
                type='password'
                placeholder='Password'
                name='password'
                value={setFormValue.email}
                onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
              />

              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
