import React from 'react'
import NavLink from '../ui/NavLink'

export default function Header() {
  return (
    <React.Fragment>
    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div class="flex flex-shrink-0 items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Company Name"></img>
      </div>
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <NavLink href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
          <NavLink href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</NavLink>
          <NavLink href="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</NavLink>
          <NavLink href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
