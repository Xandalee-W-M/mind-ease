const resources = document.querySelectorAll('.resource');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
    resources.forEach(resource => {
        const tags = resource.getAttribute('data-tags').toLowerCase();
            if (tags.includes(searchTerm)) {
                  resource.style.display = 'block';
                      } else {
                            resource.style.display = 'none';
                                }
                                  });
                                  });