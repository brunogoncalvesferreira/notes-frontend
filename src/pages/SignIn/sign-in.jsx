import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input/input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button/button'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { Loading } from '../../components/Loading/loading'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  async function handleSignIn() {
    setLoading(true)
    await signIn({ email, password }).then(() => setLoading(false))
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={handleSignIn}
          title={loading ? <Loading /> : 'Entrar'}
        />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
