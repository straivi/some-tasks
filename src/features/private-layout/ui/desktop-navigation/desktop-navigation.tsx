import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { pages } from '../../lib/pages'
import classNames from 'classnames'
import styles from './desktop-navigation.module.scss'
import { useCallback, useMemo } from 'react'

interface Props {
  className?: string
}

export const DesktopNavigation = ({ className }: Props) => {
  const history = useHistory()
  const location = useLocation()

  const getKey = useCallback(
    (link: string) => link.split(`/`).filter(Boolean)[0],
    [],
  )

  const key = useMemo(
    () =>
      (
        pages.find((page) => location.pathname.includes(getKey(page.link))) ||
        pages[0]
      ).link,
    [getKey, location.pathname],
  )

  return (
    <Menu
      className={classNames(styles.menu, className)}
      mode='inline'
      selectedKeys={[key]}
    >
      {pages.map(({ title, link }) => (
        <Menu.Item
          key={link}
          className={styles.menuItem}
          onClick={() => history.push(link)}
        >
          {title}
        </Menu.Item>
      ))}
    </Menu>
  )
}
