import { useEffect, useState } from 'react'

export const useValidation = (value, validations) => {
	const [minLength, setMinLength] = useState(true)
	const [isEmpty, setEmpty] = useState(true)

	useEffect(() => {
		for (const key in validations) {
			switch (key) {
				case 'minLength':
					value.length < validations[key]
						? setMinLength(true)
						: setMinLength(false)
					break
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break
			}
		}
	}, [value])

	return {
		isEmpty,
		minLength,
	}
}
