<script lang="ts">
  let responseMessage: string

  const submitForm = async (e: SubmitEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const options: RequestInit = {
      method: 'POST',
      body: formData
    }
    const response = await fetch('/api/login', options)
    if (response.status === 400) {
      const data = await response.json()
      responseMessage = data.message
    }
    window.location.href = response.url
  }
</script>

<form on:submit={submitForm}>
  <slot />
  {#if responseMessage}
    <p>{responseMessage}</p>
  {/if}
</form>
