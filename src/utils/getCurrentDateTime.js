export default () => {
  const date = new Date()
  date.setHours(date.getHours() + 1)
  return date
}
