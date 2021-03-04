import React from 'react'
import SubHeading from '../SubHeading'
import SubmitBtn from '../SubmitBtn'
import ValidationInput from '../ValidationInput'

export default function Login (props) {
	const {
		email,
		setEmail,
		password,
		setPassword,
		onSubmitLogin,
	} = props
	
	return (
		<React.Fragment>
			<SubHeading heading="Login" />
			<form onSubmit={onSubmitLogin}>
        <ValidationInput
          label='Email'
          type="email"
          value={email}
          onChangeInput={setEmail}
        />
        <br />
        <ValidationInput
          label='Password'
          type="password"
          value={password}
          onChangeInput={setPassword}
        />
        <br />
        <SubmitBtn label="登入" isLoading={false}/>
      </form>
		</React.Fragment>
	)
}
