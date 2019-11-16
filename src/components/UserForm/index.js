import React, { Fragment } from 'react'
import { SubmitButton } from '../SubmitButton'
import { useInputValue } from '../../hooks/useInputValue'

import { PageTitle } from '../PageTitle'

export const UserForm = ({ error, disabled, onSubmit, title }) => {

	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ email: email.value, password: password.value })
	}

	return (
		<Fragment>
			<form disabled={disabled} onSubmit={handleSubmit}>
				<PageTitle text={title} />
				<input disabled={disabled} placeholder='email' {...email} required autoFocus />
				<input disabled={disabled} placeholder='password' type='password' {...password} required />
				<SubmitButton disabled={disabled}>{title}</SubmitButton>
			</form>
			{
				error && <span>{error}</span>
			}
		</Fragment>
	)
}