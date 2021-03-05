import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { useHistory } from 'react-router-dom'
import Login from '../../components/Login'

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  }
}

function LoginContainer (props) {
	const history = useHistory()
	const { login } = props
	const [ email, setEmail ] = useState('super@iisi.com')
	const [ password, setPassword ] = useState('admin12341324')

	const onSubmitLogin = (e) => {
		e.preventDefault()
		login().then(() => {
			localStorage.setItem('token', 'login1234')
			history.push('/verification')
	})}

	return (
		<React.Fragment>
			<Login
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				onSubmitLogin={onSubmitLogin}
			/>
		</React.Fragment>
	)
}

export default connect(null, mapDispatchToProps)(LoginContainer)
