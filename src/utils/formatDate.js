import { format } from 'date-fns'
import es from 'date-fns/locale/es'

export const formatDate = (date) => {
  const res = new Date(date)
  const day = res.getDate()
  const month = res.getMonth()
  const year = res.getFullYear()

  return format(new Date(year, month, day), 'PPP', { locale: es })
}

export const formatHour = (date) => {
  const res = new Date(date)
  const hours = res.getUTCHours()
  const min = res.getMinutes()
  return `${hours}:${min}`
}
