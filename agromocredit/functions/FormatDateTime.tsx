const formatDateTime = (
  dateTimeStr: string
): { date: string; time: string } => {
  const originalDate = new Date(dateTimeStr)

  const day: string = originalDate.getDate().toString().padStart(2, "0")
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ]
  const month: string = monthNames[originalDate.getMonth()]

  const year: string = originalDate.getFullYear().toString().slice(-2)

  // Extract time components
  const hours: string = originalDate.getHours().toString().padStart(2, "0")
  const minutes: string = originalDate.getMinutes().toString().padStart(2, "0")

  const formattedDate: string = `${day} ${month} ${hours}:${minutes}`
  
  const formattedTime: string = `${hours}:${minutes} Hrs`

  const DateTimeObj = {
    date: formattedDate,
    time: formattedTime,
  }
  return DateTimeObj
}

export default formatDateTime
