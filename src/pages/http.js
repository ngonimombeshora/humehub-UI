const http = (api) => {
  const request = async (method, endpoint='', body) => {
    const requestUrl = api + `/${endpoint}`

    const response = await fetch(requestUrl, {
      method: method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic UGFyZW50OnBhJCR3b3JkMTIz",
      },
    })
    
    return response.json()
  }

  return { request }
}

export default http

