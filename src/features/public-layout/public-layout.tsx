import { PageHeader } from 'antd'
import { ReactNode } from 'react'
import styles from './public-layout.module.scss'
import { motion } from 'framer-motion'
import { Logo } from 'shared/assets/'

interface Props {
  children: ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeader
        title={<Logo className={styles.logo} />}
        className={styles.header}
      />
      <main className={styles.wrapper}>{children}</main>
    </motion.div>
  )
}