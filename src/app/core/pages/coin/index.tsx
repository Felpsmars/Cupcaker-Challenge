import React, { useState, useEffect, FormEvent, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { Button, Letter, Price, Quantity, Select } from 'components/molecules'

import coins from '../../../../data/data.json'
import watchListContext from '../../../provider/watchListContext'
import styles from './styles.module.scss'

interface ICoin {
  label: string
  value: {
    id: number
    name: string
    description: string
    price: number
  }
}

const Coin = (): JSX.Element => {
  const [coin, setCoin] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [description, setDescription] = useState<string>()
  const [quantity, setQuantity] = useState<string>('')
  const { data, setData } = useContext(watchListContext)

  const history = useHistory()

  useEffect(() => {
    const foundCoin: ICoin | undefined = coins.find(curr => curr.label === coin)
    if (foundCoin) {
      setPrice(foundCoin.value.price)
      setDescription(foundCoin.value.description)
    }
  }, [coin])

  function saveAndRedirect(): void {
    if (coin && quantity) {
      const created = {
        name: coin,
        description: description,
        price: price,
        quantity: quantity,
        date: new Date().toLocaleString(),
      }
      setData([...data, created])
      history.push('/')
    }
  }

  return (
    <div className={styles.container}>
      <Typography text="Add New Coin" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
        <div className={styles.containerAll}>
          <div className={styles.containerInputs}>
            <div className={styles.containerCoins}>
              <Select
                onChange={(e: FormEvent<HTMLSelectElement>): void =>
                  setCoin(e.currentTarget.value)
                }
                filled={coin}
                coins={coins}
              />
              <Price price={price} />
              <Quantity
                quantity={quantity}
                onChange={(e: FormEvent<HTMLInputElement>): void =>
                  setQuantity(e.currentTarget.value)
                }
              />
            </div>
            <Letter coin={coin} description={description} />
          </div>
          <Button
            className={styles.button}
            onClick={(): void => saveAndRedirect()}
          >
            ADD COIN
          </Button>
        </div>
      </Panel>
    </div>
  )
}

export default Coin
