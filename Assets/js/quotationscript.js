// Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle quotation actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Quotation details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit quotation form would open here');
                });
            });
            
            const downloadButtons = document.querySelectorAll('.btn-outline-info');
            downloadButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Quotation would be downloaded as PDF');
                });
            });
            
            // Convert to order button
            const convertButton = document.querySelector('.btn-success');
            convertButton.addEventListener('click', function() {
                const confirmConvert = confirm('Convert this quotation to a sales order?');
                if (confirmConvert) {
                    alert('Quotation would be converted to sales order');
                }
            });
            
            // Send to client button
            const sendButton = document.querySelector('.btn-outline-primary');
            sendButton.addEventListener('click', function() {
                alert('Quotation would be sent to client via email');
            });
        });