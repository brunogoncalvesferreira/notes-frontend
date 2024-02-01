import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://notes-api-hvbp.onrender.com',
})

// https://notes-api-hvbp.onrender.com - em produção
// http://localhost:3333 - em desenvolvimento
