import { useState } from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue, validation) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setDirty] = useState(false)
	const validate = useValidation(value, validation)

	const onChange = e => {
		setValue(e.target.value)
	}

	const onBlur = () => {
		setDirty(true)
	}

	return {
		isDirty,
		value,
		onChange,
		onBlur,
		...validate,
	}
}
