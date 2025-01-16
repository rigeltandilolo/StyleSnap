import api from "../utils/api"

export const getClothes = async () => {
  const response = (await api.get('/clothes').then(res => res.json())).data
  return response
}

export const addNewClothes = async ({ name, type, color, image }) => {
  const data = new FormData()
  data.append('name', name)
  data.append('type', type)
  data.append('color', color)
  data.append('image', image)

  const response = await api.post('/clothes', data)
  return response
}