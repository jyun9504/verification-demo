import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'

function NavbarContainer (props) {
  const history = useHistory()
  const onClickLogout = () => {
    localStorage.setItem('token', '')
    history.push('/')
  }

  return (
    <React.Fragment>
      <Navbar
        isAuth={!!localStorage.getItem('token')}
        onClickLogout={onClickLogout}
      />
    </React.Fragment>
  )
}

export default NavbarContainer
