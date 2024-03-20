<script lang="ts">
  let responseMessage: string

  const submitForm = async (e: SubmitEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const options: RequestInit = {
      method: 'POST',
      body: formData
    }
    const response = await fetch('api/login', options)
    const data = await response.json()
    responseMessage = data.message
  }
</script>

<form on:submit={submitForm}>
  <label for="username">
    <span>Nombre de usuario</span>
    <input
      type="text"
      name="username"
      id="username"
      autocomplete="username"
      aria-label="Entrada del nombre de usuario"
      required
    />
  </label>
  <label for="password">
    <span>Contrasena</span>
    <input
      type="text"
      name="password"
      id="password"
      autocomplete="current-password"
      aria-label="Entrada de la contraseña actual"
      required
    />
  </label>
  <button>Enviar</button>
  {#if responseMessage}
    <p>{responseMessage}</p>
  {/if}
</form>
