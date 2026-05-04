import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,  // ← baseURL set karo
    withCredentials: true,  // cookie automatically jayegi
})

export const createTicketAPI = async (businessId, { title, description }) => {
    const res = await api.post(`/api/tickets/create-ticket`, {
        title,
        description,
        businessId,  // ← body mein bhejo
    })
    return res.data
}

export const getAllTicketsAPI = async () => {
    const res = await api.get('/api/tickets/all-tickets')
    return res.data
}