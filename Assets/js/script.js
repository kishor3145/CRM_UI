// Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle task completion
            const checkboxes = document.querySelectorAll('.form-check-input');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        this.parentElement.parentElement.style.textDecoration = 'line-through';
                        this.parentElement.parentElement.style.opacity = '0.6';
                    } else {
                        this.parentElement.parentElement.style.textDecoration = 'none';
                        this.parentElement.parentElement.style.opacity = '1';
                    }
                });
            });
        });