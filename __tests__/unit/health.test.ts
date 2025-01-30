import { loadEnvConfig } from '@next/env'
it('Should be healthy and return a response with OK status', async () =>{
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
    const body = await response.json()
    expect(response.status).toBe(200)
    expect(body).toEqual({ message: 'Everything seems fine!' })
})
