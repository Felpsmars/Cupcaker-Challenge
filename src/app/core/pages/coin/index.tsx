import React, { useState, useEffect, FormEvent } from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { Button, Letter, Price, Quantity, Select } from 'components/molecules'

import coins from '../../../../data/data.json'
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
  const [quantity, setQuantity] = useState<string>()

  useEffect(() => {
    const foundCoin: ICoin | undefined = coins.find(curr => curr.label === coin)
    if (foundCoin) {
      setPrice(foundCoin.value.price)
      setDescription(foundCoin.value.description)
    }
  }, [coin])

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
          <Button>ADD COIN</Button>
        </div>
      </Panel>
    </div>
  )
}

export default Coin
