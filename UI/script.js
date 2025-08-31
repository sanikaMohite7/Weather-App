// Weather Icons Configuration
const weatherIcons = {
    'sunny': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="20" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
        <g stroke="#FFD700" stroke-width="3" stroke-linecap="round">
            <line x1="50" y1="10" x2="50" y2="20"/>
            <line x1="50" y1="80" x2="50" y2="90"/>
            <line x1="10" y1="50" x2="20" y2="50"/>
            <line x1="80" y1="50" x2="90" y2="50"/>
            <line x1="21.21" y1="21.21" x2="28.28" y2="28.28"/>
            <line x1="71.72" y1="71.72" x2="78.79" y2="78.79"/>
            <line x1="78.79" y1="21.21" x2="71.72" y2="28.28"/>
            <line x1="28.28" y1="71.72" x2="21.21" y2="78.79"/>
        </g>
    </svg>`,
    
    'partly-cloudy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="15" fill="#FFD700" stroke="#FFA500" stroke-width="1.5"/>
        <g stroke="#FFD700" stroke-width="2" stroke-linecap="round">
            <line x1="35" y1="8" x2="35" y2="15"/>
            <line x1="8" y1="35" x2="15" y2="35"/>
            <line x1="18.93" y1="18.93" x2="23.64" y2="23.64"/>
            <line x1="55" y1="35" x2="62" y2="35"/>
            <line x1="46.36" y1="23.64" x2="51.07" y2="18.93"/>
        </g>
        <path d="M45 55 Q38 45 28 45 Q18 45 18 55 Q18 65 28 65 L65 65 Q75 65 75 55 Q75 45 65 45 Q58 45 55 50 Q52 45 45 45 Q45 50 45 55 Z" 
              fill="#E0E0E0" stroke="#CCCCCC" stroke-width="1"/>
    </svg>`,
    
    'cloudy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 55 Q18 45 28 45 Q38 45 45 55 Q52 45 55 45 Q65 45 65 55 Q75 45 75 55 Q75 65 65 65 L28 65 Q18 65 18 55 Z" 
              fill="#E0E0E0" stroke="#CCCCCC" stroke-width="2"/>
        <path d="M35 45 Q28 35 38 35 Q48 35 55 45 Q62 35 65 35 Q75 35 75 45 Q75 55 65 55 L38 55 Q28 55 28 45 Z" 
              fill="#F0F0F0" stroke="#DDDDDD" stroke-width="1"/>
    </svg>`,
    
    'rainy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45 Q18 35 28 35 Q38 35 45 45 Q52 35 55 35 Q65 35 65 45 Q75 35 75 45 Q75 55 65 55 L28 55 Q18 55 18 45 Z" 
              fill="#8E8E93" stroke="#6D6D70" stroke-width="2"/>
        <g stroke="#4A90E2" stroke-width="2" stroke-linecap="round">
            <line x1="30" y1="65" x2="32" y2="75"/>
            <line x1="40" y1="60" x2="42" y2="70"/>
            <line x1="50" y1="65" x2="52" y2="75"/>
            <line x1="60" y1="60" x2="62" y2="70"/>
            <line x1="35" y1="70" x2="37" y2="80"/>
            <line x1="55" y1="70" x2="57" y2="80"/>
        </g>
    </svg>`,
    
    'stormy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 40 Q18 30 28 30 Q38 30 45 40 Q52 30 55 30 Q65 30 65 40 Q75 30 75 40 Q75 50 65 50 L28 50 Q18 50 18 40 Z" 
              fill="#4A4A4A" stroke="#333333" stroke-width="2"/>
        <path d="M48 55 L42 70 L50 70 L45 85 L58 65 L50 65 L55 55 Z" 
              fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
        <g stroke="#4A90E2" stroke-width="2" stroke-linecap="round">
            <line x1="25" y1="60" x2="27" y2="70"/>
            <line x1="35" y1="65" x2="37" y2="75"/>
            <line x1="65" y1="60" x2="67" y2="70"/>
        </g>
    </svg>`,
    'thunderstorm': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 40 Q18 30 28 30 Q38 30 45 40 Q52 30 55 30 Q65 30 65 40 Q75 30 75 40 Q75 50 65 50 L28 50 Q18 50 18 40 Z" 
              fill="#4A4A4A" stroke="#333333" stroke-width="2"/>
        <path d="M48 55 L42 70 L50 70 L45 85 L58 65 L50 65 L55 55 Z" 
              fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
        <g stroke="#4A90E2" stroke-width="2" stroke-linecap="round">
            <line x1="25" y1="60" x2="27" y2="70"/>
            <line x1="35" y1="65" x2="37" y2="75"/>
            <line x1="65" y1="60" x2="67" y2="70"/>
        </g>
    </svg>`,
    'snowy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 40 Q18 30 28 30 Q38 30 45 40 Q52 30 55 30 Q65 30 65 40 Q75 30 75 40 Q75 50 65 50 L28 50 Q18 50 18 40 Z" 
              fill="#4A4A4A" stroke="#333333" stroke-width="2"/>
        <path d="M48 55 L42 70 L50 70 L45 85 L58 65 L50 65 L55 55 Z" 
              fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
        <g stroke="#4A90E2" stroke-width="2" stroke-linecap="round">
            <line x1="25" y1="60" x2="27" y2="70"/>
            <line x1="35" y1="65" x2="37" y2="75"/>
            <line x1="65" y1="60" x2="67" y2="70"/>
        </g>
    </svg>`,
    'foggy': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 40 Q18 30 28 30 Q38 30 45 40 Q52 30 55 30 Q65 30 65 40 Q75 30 75 40 Q75 50 65 50 L28 50 Q18 50 18 40 Z" 
              fill="#4A4A4A" stroke="#333333" stroke-width="2"/>
        <path d="M48 55 L42 70 L50 70 L45 85 L58 65 L50 65 L55 55 Z" 
              fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
        <g stroke="#4A90E2" stroke-width="2" stroke-linecap="round">
            <line x1="25" y1="60" x2="27" y2="70"/>
            <line x1="35" y1="65" x2="37" y2="75"/>
            <line x1="65" y1="60" x2="67" y2="70"/>
        </g>
    </svg>`
};

// API Configuration
const API_CONFIG = {
    baseUrl: "https://api.weatherapi.com/v1",   // ✅ base API
    apiKey: "1efc588b9dcd45d2ac335733252908",  // ✅ your key
    currentEndpoint: "/current.json",
    aqi: "yes"
};


// Current search parameters
let currentSearch = {
    city: '',
    days: 7
};

/**
 * Get appropriate weather icon based on condition
 * @param {string} condition - Weather condition text
 * @returns {string} SVG icon string
 */
function getWeatherIcon(condition) {
    // Map WeatherAPI.com conditions to our existing icons
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
        return weatherIcons.sunny;
    } else if (conditionLower.includes('partly cloudy')) {
        return weatherIcons['partly-cloudy'];
    } else if (conditionLower.includes('cloudy') || conditionLower.includes('overcast')) {
        return weatherIcons.cloudy;
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
        return weatherIcons.rainy;
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
        return weatherIcons.stormy;
    } else if (conditionLower.includes('snow') || conditionLower.includes('sleet')) {
        return weatherIcons.snowy;
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist') || conditionLower.includes('haze')) {
        return weatherIcons.foggy;
    } else {
        return weatherIcons.sunny; // Default to sunny
    }
}

/**
 * Format date string to day abbreviation
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Day abbreviation (Mon, Tue, etc.)
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

/**
 * Get current time formatted for display
 * @returns {string} Formatted current time
 */
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('en-US', { 
        weekday: 'long', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

/**
 * Render weather data to the DOM
 * @param {Object} data - Weather data from API
 */
function renderWeatherData(data) {
    const { city, region, country, localtime, current } = data;
    
    const content = `
        <button class="refresh-btn" onclick="refreshCurrentSearch()">Refresh</button>
        
        <div class="header">
            <div class="location-info">
                <h1>${city}, ${region}, ${country}</h1>
                <div class="date">${localtime}</div>
            </div>
            <div class="weather-title">
                <h2>Current Weather</h2>
                <div class="time">${current.condition}</div>
            </div>
        </div>

        <div class="current-weather">
            <div class="weather-icon">${getWeatherIcon(current.condition)}</div>
            <div class="temperature-info">
                <div class="temperature">${Math.round(current.temp)}°<span>C</span></div>
                <div class="feels-like">Feels like: ${Math.round(current.feelsLike)}°</div>
            </div>
        </div>

        <div class="weather-details">
            <div class="detail-item">
                <div class="label">Humidity</div>
                <div class="value">${current.humidity}%</div>
            </div>
            <div class="detail-item">
                <div class="label">Wind</div>
                <div class="value">${current.windSpeed} km/h ${current.windDir}</div>
            </div>
            <div class="detail-item">
                <div class="label">Pressure</div>
                <div class="value">${current.pressure} mb</div>
            </div>
            <div class="detail-item">
                <div class="label">Visibility</div>
                <div class="value">${Math.round(current.visibility / 1000)} km</div>
            </div>
            <div class="detail-item">
                <div class="label">UV Index</div>
                <div class="value">${current.uv}</div>
            </div>
            ${current.airQuality ? `
                <div class="detail-item">
                    <div class="label">Air Quality Index</div>
                    <div class="value">${current.airQuality['us-epa-index']}</div>
                </div>
                <div class="detail-item">
                    <div class="label">CO</div>
                    <div class="value">${current.airQuality.co} μg/m3</div>
                </div>
                <div class="detail-item">
                    <div class="label">NO2</div>
                    <div class="value">${current.airQuality.no2} μg/m3</div>
                </div>
                <div class="detail-item">
                    <div class="label">O3</div>
                    <div class="value">${current.airQuality.o3} μg/m3</div>
                </div>
                <div class="detail-item">
                    <div class="label">SO2</div>
                    <div class="value">${current.airQuality.so2} μg/m3</div>
                </div>
                <div class="detail-item">
                    <div class="label">PM2.5</div>
                    <div class="value">${current.airQuality['pm2_5']} μg/m3</div>
                </div>
                <div class="detail-item">
                    <div class="label">PM10</div>
                    <div class="value">${current.airQuality['pm10']} μg/m3</div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('weather-content').innerHTML = content;
    document.getElementById('weather-content').classList.remove('welcome');
}


/**
 * Show loading state
 */
function showLoading() {
    const content = document.getElementById('weather-content');
    if (!content) return;
    content.classList.remove('welcome');
    content.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Fetching latest weather...</p>
        </div>
    `;
}

/**
 * Show error message in the UI
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorHtml = `
        <div class="error-message">
            <p>${message}</p>
            <button onclick="refreshCurrentSearch()">Try Again</button>
            <p class="help-text">
                If the problem persists, please check:
                <ul>
                    <li>Your internet connection</li>
                    <li>That you've entered a valid city name</li>
                    <li>That the weather service is currently available</li>
                </ul>
            </p>
        </div>
    `;
    
    const content = document.getElementById('weather-content');
    content.innerHTML = errorHtml;
    content.classList.remove('welcome');
}

/**
 * Load weather data from API
 * @param {string} city - City name
 */
async function loadWeatherData(city) {
    try {
        showLoading();
        setFormEnabled(false);
        
        const apiUrl = buildApiUrl(city);
        console.log('Fetching weather data from:', apiUrl);
        
        // Add timeout to the fetch request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Weather API Response:', data);
        
        if (!data.location || !data.current) {
            throw new Error('Invalid API response structure');
        }
        
        const processedData = processWeatherData(data);
        renderWeatherData(processedData);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
        let errorMessage = 'Unable to fetch weather data. ';
        if (error.name === 'AbortError') {
            errorMessage += 'Request timed out. Please check your internet connection.';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage += 'Network error. Please check your internet connection.';
        } else {
            errorMessage += error.message || 'Please try again later.';
        }
        
        showError(errorMessage);
    } finally {
        setFormEnabled(true);
    }
}

/**
 * Refresh current search
 */
function refreshCurrentSearch() {
    if (currentSearch.city) {
        loadWeatherData(currentSearch.city);
    }
}

/**
 * Handle form submission
 * @param {Event} event - Form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    // Update current search
    currentSearch.city = city;
    
    // Load weather data
    loadWeatherData(city);
}

/**
 * Enable/disable form inputs
 * @param {boolean} enabled - Whether form should be enabled
 */
function setFormEnabled(enabled) {
    const form = document.getElementById('weather-form');
    const inputs = form.querySelectorAll('input, select, button');
    
    inputs.forEach(input => {
        input.disabled = !enabled;
    });
}

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Weather Dashboard initializing...');
    
    // Set up form event listener
    const form = document.getElementById('weather-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Focus on city input
    const cityInput = document.getElementById('city-input');
    if (cityInput) {
        cityInput.focus();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => { initializeApp(); loadWeatherData('India'); });

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showError('An unexpected error occurred. Please refresh the page.');
});

// Expose functions to global scope for button onclick events
window.refreshCurrentSearch = refreshCurrentSearch;

/**
 * Validate form inputs
 * @param {string} city - City name
 * @returns {Object} Validation result
 */
function validateInputs(city) {
    const errors = [];
    
    if (!city || city.trim().length === 0) {
        errors.push('City name is required');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

/**
 * Build API URL with parameters for current weather
 * @param {string} city - City name
 * @returns {string} Complete API URL
 */
function buildApiUrl(city) {
    const params = new URLSearchParams();
    params.append('key', API_CONFIG.apiKey);
    params.append('q', city.trim());
    params.append('aqi', API_CONFIG.aqi);
    
    return `${API_CONFIG.baseUrl}${API_CONFIG.currentEndpoint}?${params.toString()}`;
}

/**
 * Process and format current weather data from WeatherAPI.com
 * @param {Object} data - Raw weather data from API
 * @returns {Object} Formatted weather data for the UI
 */
function processWeatherData(data) {
    if (!data || !data.location || !data.current) {
        throw new Error('Invalid weather data received');
    }

    // Process current weather
    const current = {
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        windDir: data.current.wind_dir,
        pressure: data.current.pressure_mb,
        feelsLike: data.current.feelslike_c,
        visibility: data.current.vis_km,
        uv: data.current.uv,
        airQuality: data.current.air_quality ? {
            co: data.current.air_quality.co,
            no2: data.current.air_quality.no2,
            o3: data.current.air_quality.o3,
            so2: data.current.air_quality.so2,
            pm2_5: data.current.air_quality.pm2_5,
            pm10: data.current.air_quality.pm10,
            'us-epa-index': data.current.air_quality['us-epa-index']
        } : null,
        icon: data.current.condition.icon
    };

    return {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
        current: current
    };
}