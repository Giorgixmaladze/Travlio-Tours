const fetchData = async (url,method = "GET",body = null,headers = { 
    "Content-Type":"application/json"
}) => {
    try {
        const response = await fetch(url,{
            method:method,
            headers:headers,
            body:body ? JSON.stringify(body) : undefined
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchData