/** @format */

import React from 'react'

function Navbar() {
	return (
		<div className='fixed flex flex-col items-center gap-2 top-2'>
			<p className='opacity-70'>Página em Português do Brasil</p>
			<h2 className='flex gap-2'>
				Projeto do curso
				<a
					href='https://sujeitoprogramador.com/fabricadeaplicativos/'
					target='_blank'
					className='text-red-500 underline transition-all duration-300 hover:text-red-400 underline-offset-4'>
					Sujeito Programador
				</a>
			</h2>
		</div>
	)
}

export default Navbar
