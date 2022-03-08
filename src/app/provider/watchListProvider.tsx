import React, { ReactNode, useState } from 'react'

import watchListContext from './watchListContext'

interface ICreated {
  name: string
  description: string | undefined
  price: number | undefined
  quantity: string | number | undefined
  date: string
}

interface WatchListProviderProps {
  children: ReactNode
}

function WatchListProvider({ children }: WatchListProviderProps): JSX.Element {
  const [data, setData] = useState<ICreated[]>([])

  return (
    <watchListContext.Provider value={{ data, setData }}>
      {children}
    </watchListContext.Provider>
  )
}

export default WatchListProvider
