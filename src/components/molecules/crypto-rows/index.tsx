import React from 'react'

import { Typography, TypographyVariant } from 'components/atoms'
import { Letter } from 'components/molecules'

import styles from './styles.module.scss'

interface ICreated {
  data: {
    name: string
    description: string | undefined
    price: number
    quantity: string | number
    date: Date
  }[]
}

const CryptoRows = (props: ICreated): JSX.Element => {
  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR').format(date)
  }

  return (
    <div className={styles.container}>
      {props.data.map(savedData => (
        <div className={styles.watchList}>
          <Letter className={styles.letter} coin={savedData.name} />
          <div className={styles.content}>
            <div>
              <Typography
                className={styles.name}
                text={savedData.name}
                variant={TypographyVariant.h3}
              />
              <Typography
                className={styles.date}
                text={`Added ${formatDate(savedData.date)}`}
                variant={TypographyVariant.p}
              />
            </div>
            <div className={styles.multiplied}>
              <Typography
                className={styles.caption}
                text={`R$ ${savedData.price * +savedData.quantity}`}
                variant={TypographyVariant.caption}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { CryptoRows }
