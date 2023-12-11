/*

Cookies, session storage, and local storage are mechanisms in JavaScript that allow you to store data on the client-side (in the user's browser). Each has its own purpose and characteristics.

Cookies:

Purpose: Cookies are small pieces of data that are sent from a server and stored in the user's browser. They are often used to store information about the user, such as authentication tokens or user preferences.
Lifetime: Cookies have an expiration date and time. They can be either persistent (stored across browser sessions) or session-based (deleted when the browser is closed).
Size Limit: Cookies have a size limit (usually around 4 KB) and can only store strings.

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";



Session Storage:

Purpose: Session storage is designed to store data for the duration of a page session. The data is available as long as the browser tab or window is open, and it is cleared when the tab or window is closed.
Lifetime: Limited to the duration of the page session.
Scope: Data is specific to a single tab or window.
Size Limit: Typically larger than cookies (usually around 5 MB).

// Store data
sessionStorage.setItem("key", "value");

// Retrieve data
var data = sessionStorage.getItem("key");


Local Storage:

Purpose: Local storage is similar to session storage, but the data persists even after the browser is closed and reopened. It provides a way to store larger amounts of data on the client-side.
Lifetime: Persists even after the browser is closed.
Scope: Data is specific to a single domain and protocol (e.g., http or https).
Size Limit: Similar to session storage, usually around 5 MB.

// Store data
localStorage.setItem("key", "value");

// Retrieve data
var data = localStorage.getItem("key");


It's important to note that while cookies are automatically sent with every HTTP request, session storage and local storage are not. They need to be explicitly accessed and manipulated through JavaScript. The choice between these storage mechanisms depends on the specific requirements of your application.
*/