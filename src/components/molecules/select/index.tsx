import React, { FormEvent } from 'react'

import styles from './styles.module.scss'

interface IProps {
  filled: string
  onChange: (e: FormEvent<HTMLSelectElement>) => void
  coins: {
    label: string
    value: {
      id: number
      description: string
    }
  }[]
}

const Select = (props: IProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <label htmlFor="">
        Coin
        <select required onChange={props.onChange}>
          <option value="" selected disabled hidden>
            Select the coin...
          </option>
          {props.coins.map(eachCoin => (
            <option value={eachCoin.label} key={eachCoin.value.id}>
              {eachCoin.label}
            </option>
          ))}
        </select>
      </label>
      <span className={styles.validation}>
        {props.filled === '' && 'Coin must be filled!'}
      </span>
    </div>
  )
}

export { Select }
