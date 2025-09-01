
        // Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle user actions
            const editButtons = document.querySelectorAll('.btn-outline-primary');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit user functionality would open here');
                });
            });
            
            const deleteButtons = document.querySelectorAll('.btn-outline-danger');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const confirmDelete = confirm('Are you sure you want to delete this user?');
                    if (confirmDelete) {
                        alert('User would be deleted now');
                    }
                });
            });
        });
    