// Basic interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const sidebarToggler = document.querySelector('.navbar-toggler');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggler.addEventListener('click', function() {
                sidebar.classList.toggle('d-none');
            });
            
            // Handle opportunity actions
            const viewButtons = document.querySelectorAll('.btn-outline-primary');
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Opportunity details view would open here');
                });
            });
            
            const editButtons = document.querySelectorAll('.btn-outline-success');
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Edit opportunity form would open here');
                });
            });
            
            const convertButtons = document.querySelectorAll('.btn-success');
            convertButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const confirmConvert = confirm('Convert this opportunity to an order?');
                    if (confirmConvert) {
                        alert('Opportunity would be converted to order');
                    }
                });
            });
            
            const moveButtons = document.querySelectorAll('.btn-outline-info');
            moveButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Move opportunity to next stage');
                });
            });
            
            // Simple drag and drop for pipeline (conceptual)
            const opportunityCards = document.querySelectorAll('.opportunity-card');
            opportunityCards.forEach(card => {
                card.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', this.id);
                });
            });
            
            const pipelineStages = document.querySelectorAll('.pipeline-stage');
            pipelineStages.forEach(stage => {
                stage.addEventListener('dragover', function(e) {
                    e.preventDefault();
                });
                
                stage.addEventListener('drop', function(e) {
                    e.preventDefault();
                    const id = e.dataTransfer.getData('text/plain');
                    const draggedElement = document.getElementById(id);
                    this.appendChild(draggedElement);
                });
            });
        });