import api from "../utils/api"

export const register = async ({ firstName, lastName, email, password }) => {
  const response = await api.post('/register', {
    firstName, lastName, email, password
  })

  if (response.status === 200) return true

  return false
}

export const login = async ({ email, password }) => {
  const response = await api.post('/login', {
    email, password
  })

  if (response.status === 200) return true

  return false
}