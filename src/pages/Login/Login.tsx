import React, { useEffect } from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'

export default function Login() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')
    const new_user = params.get('new_user')

    localStorage.setItem('access_token', access_token as string)
    localStorage.setItem('refresh_token', refresh_token as string)
    // localStorage.setItem('new_user', new_user)
    navigate('/')
  }, [params, navigate])

  return (
    <div>Login</div>
  )
}
