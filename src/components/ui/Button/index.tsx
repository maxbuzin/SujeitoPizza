/** @format */

import { ReactNode, ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
	children: ReactNode
}

export function Button({ loading, children, ...rest }: ButtonProps) {
	return (
		<button
			className='flex items-center justify-center h-full mt-1 bg-red-500'
			disabled={loading}
			{...rest}>
			{loading ? (
				<FaSpinner
					id='loading'
					className='m-auto'
				/>
			) : (
				<a href=''>{children}</a>
			)}
		</button>
	)
}
