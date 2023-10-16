import axios from "axios"

async function generateNewReferenceId(): Promise<string> {
  try {
    const response = await axios.get<string>(
      "https://www.uuidgenerator.net/api/version4"
    )
    return response.data
  } catch (error) {
    console.error("Failed to generate X-Reference-Id:", error)
    throw error
  }
}

export default generateNewReferenceId
