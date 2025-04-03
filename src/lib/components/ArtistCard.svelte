<script>
  const {name, imageUrl} = $props()
</script>

<li>
  <img src={imageUrl} alt="" />
  <span>{name}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .9rem;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    text-align: center;
  }
</style>