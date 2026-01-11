// Utility functions for cookie management
function setCookie(name, value, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check if user prefers dark mode based on system settings
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Apply theme to HTML element
function applyTheme(theme) {
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
        htmlElement.classList.add('dark-mode');
    } else {
        htmlElement.classList.remove('dark-mode');
    }
}

// Get current theme preference
function getCurrentTheme() {
    // First check if there's a saved preference in cookie
    const savedTheme = getCookie('theme');
    
    if (savedTheme) {
        return savedTheme;
    }
    
    // If no saved preference, use system preference
    return getSystemTheme();
}

// Initialize theme on page load
export function initTheme() {
    const currentTheme = getCurrentTheme();
    
    // Apply the theme
    applyTheme(currentTheme);
    
    // Save theme preference in cookie if not already saved
    if (!getCookie('theme')) {
        setCookie('theme', currentTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only update if user hasn't manually set a preference
            if (!getCookie('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
                setCookie('theme', newTheme);
            }
        });
    }
}

// Toggle theme function (for manual switching)
export function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    setCookie('theme', newTheme);
    
    return newTheme;
}

// Get current theme function (for components that need to know the current theme)
export function getTheme() {
    return getCurrentTheme();
}