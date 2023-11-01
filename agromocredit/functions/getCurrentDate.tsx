const getCurrentDate = () => {
  const today = new Date()
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ]
  const month = monthNames[today.getMonth()]
  const year = today.getFullYear()

  return `${month} ${year}`
}

export default getCurrentDate
