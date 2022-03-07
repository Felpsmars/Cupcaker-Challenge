import React, { FormEvent } from 'react'

import styles from './styles.module.scss'

interface IProps {
  onChange: (e: FormEvent<HTMLInputElement>) => void
  quantity: string | number | undefined
}

const Quantity = (props: IProps): JSX.Element => {
  return (
    <div className={styles.containerCoin}>
      <label htmlFor="">
        Quantity
        <input
          onChange={props.onChange}
          value={props.quantity}
          className={styles.containerInput}
          type="number"
        />
      </label>
      <span className={styles.validation}>
        {props.quantity === '' && 'Quantity must be filled!'}
      </span>
    </div>
  )
}

export { Quantity }
