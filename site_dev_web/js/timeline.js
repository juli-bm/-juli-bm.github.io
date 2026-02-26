<script>
  const timelineContainer = document.querySelector('.timeline-container');
  timelineContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    timelineContainer.scrollLeft += e.deltaY * 2; // Ajustez le facteur de vitesse si nécessaire
  });
</script>