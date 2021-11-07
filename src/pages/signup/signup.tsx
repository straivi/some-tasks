import { Button, Form, Input, Typography } from 'antd'
import styles from './signup.module.scss'
import { Link } from 'react-router-dom'
import { PUBLIC_PATH } from 'shared/config'

export const Signup = () => {
  return (
    <>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form>
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          name='surname'
          rules={[{ required: true, message: 'Введите фамилию' }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Введите почту' }]}
        >
          <Input placeholder='Почта' />
        </Form.Item>
        <Form.Item
          name='login'
          rules={[{ required: false, message: 'Введите логин' }]}
        >
          <Input placeholder='Логин' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Пароль' />
        </Form.Item>
        <Form.Item
          name='repeat-password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Повторите пароль' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' block>
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Form.Item>
          <Typography.Paragraph className={styles.signupText}>
            Уже есть аккаунт? <Link to={PUBLIC_PATH.LOGIN}>Войти?</Link>
          </Typography.Paragraph>
        </Form.Item>
      </Form>
    </>
  )
}
