import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// https://notes-api-hvbp.onrender.com - em produção
// http://localhost:3333 - em desenvolvimento
