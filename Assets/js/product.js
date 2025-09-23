 // Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle product actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Product details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit product form would open here');
                });
            });
            
            const copyButtons = document.querySelectorAll('.btn-outline-info');
            copyButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Product would be duplicated');
                });
            });
            
            // Category card clicks
            const categoryCards = document.querySelectorAll('.category-card');
            categoryCards.forEach(card => {
                card.addEventListener('click', function() {
                    alert('Products in this category would be filtered');
                });
            });
        });