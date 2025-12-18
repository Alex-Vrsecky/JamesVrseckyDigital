import React from 'react'

export default function ServiceIcon({icon, name, colour}: {icon: React.ReactNode, name: string, colour: string}) {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-lg text-${colour}`}>
      {icon}
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    </div>
  )
}
