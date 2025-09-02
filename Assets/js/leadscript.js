// Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle lead actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Lead details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit lead form would open here');
                });
            });
            
            const deleteButtons = document.querySelectorAll('.btn-outline-danger');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const confirmDelete = confirm('Are you sure you want to delete this lead?');
                    if (confirmDelete) {
                        alert('Lead would be deleted now');
                    }
                });
            });
            
            // Convert lead to opportunity
            const convertButtons = document.querySelectorAll('.btn-outline-info');
            convertButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const confirmConvert = confirm('Convert this lead to an opportunity?');
                    if (confirmConvert) {
                        alert('Lead would be converted to opportunity');
                    }
                });
            });
        });