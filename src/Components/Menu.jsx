import React from 'react'

export default function 

() {
  return (
    <div className='mx-10 justify-items-center grid md:grid-cols-3 lg:grid-cols-1'>
        <div className="relative flex items-center justify-center w-full dark:text-gray-50 mx-5">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://i.ibb.co/tsLWKNR/87881244-118979269684696-8527202024796717056-n.jpg" alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://i.ibb.co/5GTY6q9/89257382-120838276165462-7935662797663240192-n.jpg" alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://i.ibb.co/yg17xQY/89260200-124424499140173-5366430364971565056-n.jpg" alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://i.ibb.co/dtxJbwb/89603808-123704455878844-8944295992652464128-n.jpg" alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://i.ibb.co/25J7GRf/122470542-191081495807806-3350875807264421810-n.jpg" alt="Image 5" />
		</div>
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
</div>

    </div>
  )
}
