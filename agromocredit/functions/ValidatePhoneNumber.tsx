const validatePhoneNumber = (phoneNumber: string): boolean => {
  phoneNumber = phoneNumber.replace(/[\s\-]/g, "")

  if (phoneNumber.length < 8) {
    return false
  }

  const allowedPrefixes = ["078", "077", "070", "031", "076", "039"]
  const startsWithAllowedPrefix = allowedPrefixes.some((prefix) =>
    phoneNumber.startsWith(prefix)
  )

  return startsWithAllowedPrefix
}

export default validatePhoneNumber
