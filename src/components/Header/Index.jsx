import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { HeaderContainer, Profile, ButtonLogout } from './styles'
import { LogOut } from 'lucide-react'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <HeaderContainer>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <ButtonLogout onClick={handleSignOut}>
        <LogOut />
      </ButtonLogout>
    </HeaderContainer>
  )
}
