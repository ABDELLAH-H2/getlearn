/**
 * Simple logging utility for the Git Learning page.
 * Mimics a git log style.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const logContainer = document.getElementById('log-container');

    /**
     * Adds a new entry to the activity log.
     * @param {string} message - The message to log.
     * @param {string} type - 'commit' or 'info' (default: 'commit').
     */
    function addLog(message, type = 'commit') {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;

        const timestamp = new Date().toLocaleTimeString();
        const hash = Math.random().toString(16).substring(2, 8);

        entry.innerHTML = `
            <span class="log-hash">${type === 'commit' ? 'commit ' + hash : ''}</span>
            <span class="log-time">[${timestamp}]</span>
            <span class="log-message">${message}</span>
        `;

        if (logContainer) {
            logContainer.insertBefore(entry, logContainer.firstChild);
        }
        console.log(`[Log] ${message}`);
    }

    // Initial log
    addLog('Git Learning project initialized.', 'info');

    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            addLog(`Contact form submitted by ${name}`, 'commit');

            // Clear form
            contactForm.reset();

            // Visual feedback
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.style.backgroundColor = '#535bf2';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        });
    }

    // Export log function to window for global access
    window.gitLogger = { log: addLog };
});
