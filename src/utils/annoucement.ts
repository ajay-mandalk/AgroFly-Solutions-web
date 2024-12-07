export function initializeAnnouncement() {
    const closeButton = document.getElementById('close-announcement');
    const announcementBanner = document.getElementById('announcement-banner');
  
    // Simple close button handler
    closeButton?.addEventListener('click', () => {
      if (announcementBanner) {
        announcementBanner.classList.add('hidden');
        // Store the close timestamp
        localStorage.setItem('announcementClosed', new Date().toISOString());
      }
    });
  
    function checkAndShowAnnouncement() {
      const lastClosed = localStorage.getItem('announcementClosed');
      if (lastClosed && announcementBanner?.classList.contains('hidden')) {
        // Show the banner if it's hidden
        announcementBanner.classList.remove('hidden');
      }
    }
  
    // Check on page load
    document.addEventListener('DOMContentLoaded', checkAndShowAnnouncement);
  
    // Check every 10 seconds
    setInterval(checkAndShowAnnouncement, 10000);
  
    };