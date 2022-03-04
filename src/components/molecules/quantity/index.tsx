import React, { FormEvent, useState } from 'react'

import styles from './styles.module.scss'

const Quantity = (): JSX.Element => {
  const [quantity, setQuantity] = useState('')

  return (
    <div className={styles.containerCoin}>
      <label htmlFor="">
        Quantity
        <input
          onChange={(e: FormEvent<HTMLInputElement>): void =>
            setQuantity(e.currentTarget.value)
          }
          value={quantity}
          className={styles.containerInput}
          type="number"
        />
      </label>
      {quantity === '' && 'Quantity must be filled!'}
    </div>
  )
}

export { Quantity }
