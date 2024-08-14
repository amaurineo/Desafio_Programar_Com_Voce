function toggleHeart(icon) {
    icon.classList.toggle('bi-heart');
    icon.classList.toggle('bi-heart-fill');
    icon.closest('.blog-post').classList.toggle('border-brand');
}

const searchInput = document.getElementById('searchInput');
const blogPosts = document.querySelectorAll('.blog-post');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();

    blogPosts.forEach(post => {
        const title = post.querySelector('.blog-post-title').textContent.toLowerCase();
        const text = post.querySelector('.blog-post-text').textContent.toLowerCase();

        if (title.includes(query) || text.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});