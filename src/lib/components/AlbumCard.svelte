<script>
  const { imageUrl, name, color } = $props()
</script>

<li>
  <img src={imageUrl} alt="" />
  <span>{name}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    gap: .6rem;
    width: 200px;
    position: relative;
    box-shadow: 0 -1px 1px black;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    position: relative;
  }

  li::before {
    content: '';
    position: absolute;
    z-index: -10;
    top: -9px; /* Move the shadow above the square */
    left: 50%; /* Center it horizontally */
    transform: translateX(-50%);
    width: 182px; /* Smaller width than the square */
    height: 10px; /* Height of the shadow */
    background-color: var(--color, rgb(13, 75, 17));
    border-radius: 10px 10px 0 0; /* Optional: rounded edges */
    box-shadow: 0 -1px 1px black;
    filter: brightness(.3);
  }

  li::after {
    content: '';
    position: absolute;
    z-index: -20;
    top: -14px; /* Move the shadow above the square */
    left: 50%; /* Center it horizontally */
    transform: translateX(-50%);
    width: 160px; /* Smaller width than the square */
    height: 10px; /* Height of the shadow */
    background-color: var(--color, rgb(5, 49, 8));
    border-radius: 10px 10px 0 0; /* Optional: rounded edges */
    filter: brightness(.3);
    opacity: .6;
  }
</style>
