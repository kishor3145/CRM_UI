 // Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle order actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Order details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit order form would open here');
                });
            });
            
            const shippingButtons = document.querySelectorAll('.btn-outline-info');
            shippingButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Shipping details would open here');
                });
            });
            
            // Update status button
            const updateStatusButton = document.querySelector('.btn-outline-primary');
            updateStatusButton.addEventListener('click', function() {
                alert('Order status update form would   open here');                
            });
            // Generate invoice button
            const generateInvoiceButton = document.querySelector('.btn-outline-success');
            generateInvoiceButton.addEventListener('click', function() {
                alert('Invoice generation process would start here');
            });
        });