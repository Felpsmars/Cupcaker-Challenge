import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  price: number | undefined
}

const Price = (props: IProps): JSX.Element => {
  return (
    <div className={styles.containerCoin}>
      <label className={styles.price} htmlFor="">
        Price
        <input
          className={styles.containerInput}
          value={props.price}
          disabled
          type="text"
        />
      </label>
    </div>
  )
}

export { Price }
