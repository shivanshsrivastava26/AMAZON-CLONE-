// Simple JavaScript for Amazon Clone functionality

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    // Search when clicking the search icon
    searchIcon.addEventListener('click', function() {
        performSearch();
    });
    
    // Search when pressing Enter in the search box
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real implementation, this would redirect to search results page
            // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    // Cart functionality
    const cartIcon = document.querySelector('.nav-cart');
    cartIcon.addEventListener('click', function() {
        alert('Cart is empty');
        // In a real implementation, this would redirect to cart page
        // window.location.href = 'cart.html';
    });
    
    // "See more" links functionality
    const seeMoreLinks = document.querySelectorAll('.box-content p');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function() {
            const category = this.parentElement.querySelector('h2').textContent;
            alert(`Viewing ${category} products`);
            // In a real implementation, this would redirect to category page
            // window.location.href = `category.html?cat=${encodeURIComponent(category)}`;
        });
    });
    
    // Sign in functionality
    const signIn = document.querySelector('.nav-signin');
    signIn.addEventListener('click', function() {
        alert('Sign in functionality would open here');
        // In a real implementation, this would open sign in modal or redirect
        // window.location.href = 'signin.html';
    });
    
    // Returns & Orders functionality
    const returns = document.querySelector('.nav-return');
    returns.addEventListener('click', function() {
        alert('Returns & Orders page would open here');
        // In a real implementation, this would redirect to returns page
        // window.location.href = 'returns.html';
    });
    
    // Back to top functionality
    const backToTop = document.querySelector('.foot-panel1');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});