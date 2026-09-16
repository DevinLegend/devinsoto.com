/* ===== Web Apps Library — Search & Render ===== */

// Apps catalog — add new apps here
const APPS = [
    {
        id: 'cliplink',
        name: 'ClipLink',
        description: 'Paste a YouTube URL. Get short vertical 9:16 clips with captions when possible. Pro $19/mo available.',
        url: 'https://cliplink.grok.me/'
    },
    {
        id: 'midnight-slice',
        name: 'Midnight Slice',
        description: 'Night city arcade racer — 3D chase cam, nitro, high score.',
        url: 'https://midnight-slice.grok.me/'
    },
    {
        id: 'returnwindow',
        name: 'ReturnWindow',
        description: "Log a purchase's return window, see days left, download reminders before it expires.",
        url: 'https://bamboo-bird-cosmic-fair.grok.me/'
    },
    {
        id: 'trialguard',
        name: 'TrialGuard',
        description: 'Type the day your free trial ends. Get calendar reminders before they bill you. Pro $9 available.',
        url: 'https://zippy-sand-pixel-bison.grok.me/'
    },
    {
        id: 'flyerics',
        name: 'FlyerICS',
        description: 'Paste a flyer or photo. Get a calendar file with the events.',
        url: 'https://cobalt-xenon-baker-brush.grok.me/'
    },
    {
        id: 'approvepack',
        name: 'ApprovePack',
        description: 'Paste project + deliverable + amount, get a copyable approval-request email + printable Approved/Changes-requested checklist.',
        url: 'https://acre-moon-horizon-bloom.grok.me/'
    }
];

// DOM elements
const searchInput = document.getElementById('search-input');
const appsGrid = document.getElementById('apps-grid');
const emptyState = document.getElementById('empty-state');

// Render app cards
function renderApps(apps) {
    if (apps.length === 0) {
        appsGrid.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }

    appsGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    appsGrid.innerHTML = apps.map(app => `
        <a href="${app.url}" target="_blank" rel="noopener" class="app-card" data-app-id="${app.id}">
            <div class="app-card__header">
                <h2 class="app-card__name">${app.name}</h2>
                <span class="app-card__arrow">↗</span>
            </div>
            <p class="app-card__description">${app.description}</p>
        </a>
    `).join('');
}

// Filter apps based on search query
function filterApps(query) {
    const lowercaseQuery = query.toLowerCase().trim();
    
    if (!lowercaseQuery) {
        return APPS;
    }

    return APPS.filter(app => {
        const nameMatch = app.name.toLowerCase().includes(lowercaseQuery);
        const descriptionMatch = app.description.toLowerCase().includes(lowercaseQuery);
        return nameMatch || descriptionMatch;
    });
}

// Handle search input
function handleSearch() {
    const query = searchInput.value;
    const filteredApps = filterApps(query);
    renderApps(filteredApps);
}

// Event listeners
searchInput.addEventListener('input', handleSearch);

// Initial render
renderApps(APPS);
