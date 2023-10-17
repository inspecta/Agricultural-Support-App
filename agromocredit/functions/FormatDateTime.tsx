const formatDateTime = (
  dateTimeStr: string
): { date: string; time: string } => {
  const originalDate = new Date(dateTimeStr)

  const day: string = originalDate.getDate().toString().padStart(2, "0")
  const month: string = (originalDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")
  const year: string = (originalDate.getFullYear() % 100).toString()

  const formattedDate: string = `${day}/${month}/${year}`

  // Extract time components
  const hours: string = originalDate.getHours().toString().padStart(2, "0")
  const minutes: string = originalDate.getMinutes().toString().padStart(2, "0")

  // Format time as "HH:mm Hrs"
  const formattedTime: string = `${hours}:${minutes} Hrs`

  const DateTimeObj = {
    date: formattedDate,
    time: formattedTime,
  }
  return DateTimeObj
}

export default formatDateTime
