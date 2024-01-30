import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New/new'
import { Home } from '../pages/Home/home'
import { Details } from '../pages/Details/details'
import { Profile } from '../pages/Profile/profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
