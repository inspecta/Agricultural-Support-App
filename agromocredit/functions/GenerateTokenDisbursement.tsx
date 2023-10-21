import axios from "axios"

const tokenManager = {
  accessToken: null as string | null,
  expirationTime: 0,
}

async function generateAccessTokenDisbursement(): Promise<string | null> {
  if (!tokenManager.accessToken || Date.now() >= tokenManager.expirationTime) {
    const tokenURL = "https://sandbox.momodeveloper.mtn.com/disbursement/token/"
    const headers = {
      Authorization:
        "Basic MTgwNGM2YzUtODAxZS00YWZhLTg1NGEtYzM2MmM0YjFjMTIxOmM0OTA1ZWJjNGNjODQ4NDliMGQyYTgxOGRiZDBiM2Uw",
      "Ocp-Apim-Subscription-Key": "470c1840a2ef48bbaf89b701f39f9d30",
    }

    try {
      const response = await axios.post(tokenURL, null, { headers })
      const responseData = response.data

      if (responseData.access_token && responseData.expires_in) {
        tokenManager.accessToken = responseData.access_token
        tokenManager.expirationTime =
          Date.now() + responseData.expires_in * 3000
        return responseData.access_token
      } else {
        console.error("Failed to obtain a valid access token.")
        return null
      }
    } catch (error) {
      console.error("Error generating token:", error)
      return null
    }
  } else {
    return tokenManager.accessToken
  }
}

export default generateAccessTokenDisbursement
