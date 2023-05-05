/** @format */

import React from 'react'

function Footer() {
	return (
		<div className='fixed flex items-center gap-2 bottom-4'>
			<p className=''>Projeto criado por</p>
			<a
				href='https://sujeitoprogramador.com/fabricadeaplicativos/'
				target='_blank'
				className='text-red-500 underline transition-all duration-300 hover:text-red-400 underline-offset-4'>
				Sujeito Programador
			</a>
			<p>e reproduzido por Max Buzin</p>
		</div>
	)
}

export default Footer
