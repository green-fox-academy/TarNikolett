const backendURL = "http://localhost:5000";
const signupEndpoint = '/signup';

document.getElementById('signup-form').addEventListener('submit', (e) => {
    // e.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const signupParams = {};
    if (name.length > 0) {
        signupParams['q'] = name;
    }
});


