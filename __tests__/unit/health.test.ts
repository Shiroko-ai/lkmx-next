it('Should be healthy and return a response with OK status', async () =>{
    const response = await fetch('http://localhost:3000/api/health')
    const body = await response.json()
    expect(response.status).toBe(200)
    expect(body).toEqual({ message: 'Everything seems fine!' })
})
