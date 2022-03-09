import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  price: number | undefined
}

const Price = (props: IProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">
        Price
        <input
          className={styles.input}
          value={props.price}
          disabled
          type="text"
        />
      </label>
    </div>
  )
}

export { Price }
