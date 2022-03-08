import { createContext, Dispatch, SetStateAction } from 'react'

interface ICreated {
  name: string
  description: string | undefined
  price: number | undefined
  quantity: string | number | undefined
  date: string
}

interface watchListContextData {
  data: ICreated[]
  setData: Dispatch<SetStateAction<ICreated[]>>
}

const watchListContext = createContext({} as watchListContextData)

export default watchListContext
