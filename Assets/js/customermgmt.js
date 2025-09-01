        // Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle customer actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Customer details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit customer form would open here');
                });
            });
            
            const deleteButtons = document.querySelectorAll('.btn-outline-danger');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const confirmDelete = confirm('Are you sure you want to delete this customer?');
                    if (confirmDelete) {
                        alert('Customer would be deleted now');
                    }
                });
            });
        });
