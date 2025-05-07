// Initialize leads array from localStorage or create empty array
let leads = [];

// Display existing leads on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event triggered for leads dashboard');
    
    // Get leads from localStorage
    const storedLeads = localStorage.getItem('contactFormLeads');
    if (storedLeads) {
        try {
            leads = JSON.parse(storedLeads);
            console.log('Loaded leads from localStorage:', leads);
        } catch (e) {
            console.error('Error parsing leads from localStorage:', e);
            leads = [];
            localStorage.setItem('contactFormLeads', JSON.stringify(leads));
        }
    } else {
        localStorage.setItem('contactFormLeads', JSON.stringify(leads));
    }
    
    updateLeadsTable();
    updateLeadsCount();
    
    // Setup clear all button
    document.getElementById('clearAllBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to delete all leads? This action cannot be undone.')) {
            leads = [];
            localStorage.setItem('contactFormLeads', JSON.stringify(leads));
            updateLeadsTable();
            updateLeadsCount();
        }
    });
});

// Delete a lead
function deleteLead(index) {
    console.log('Deleting lead at index:', index);
    leads.splice(index, 1);
    localStorage.setItem('contactFormLeads', JSON.stringify(leads));
    updateLeadsTable();
    updateLeadsCount();
}

// Update lead count
function updateLeadsCount() {
    document.getElementById('leadsCount').textContent = leads.length;
}

// Update the leads table
function updateLeadsTable() {
    console.log('Updating leads table');
    const tableBody = document.getElementById('leadsTableBody');
    const noLeadsMessage = document.getElementById('noLeadsMessage');
    
}