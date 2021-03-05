import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

function NavbarContainer (props) {
  const history = useHistory()
  const { logout, isAuth } = props

  const onClickLogout = () => {
    logout().then(() => localStorage.setItem('token', ''))
    history.push('/')
  }

  return (
    <React.Fragment>
      <Navbar
        isAuth={isAuth}
        onClickLogout={onClickLogout}
      />
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
