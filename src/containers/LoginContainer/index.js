import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../../components/Login'

export default  function LoginContainer () {
	const history = useHistory()
	const [ email, setEmail ] = useState('super@iisi.com')
	const [ password, setPassword ] = useState('admin12341324')

	const onSubmitLogin = (e) => {
		e.preventDefault()
		localStorage.setItem('token', 'login1234')
		history.push('/verification')
	}

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
