import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData()
  const username = data.get('username')
  const password = data.get('password')
  if (!username || !password) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields'
      }),
      { status: 400 }
    )
  }
  return redirect('/', 307)
}
