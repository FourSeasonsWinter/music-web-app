
<div class="loader"></div>

<style>
  .loader {
    width: var(--size);
    height: var(--size);
    border: 4px solid rgba(0, 0, 0, 0.1); /* Light border */
    border-top-color: var(--color); /* Customizable color */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>