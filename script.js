// API Base URL - Replace with your actual backend URL
const API_BASE_URL = 'http://localhost:5000/api';

// DOM Elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const accountModal = document.getElementById('accountModal');
const openLoginBtn = document.getElementById('openLogin');
const openSignupBtn = document.getElementById('openSignup');
const closeLoginBtn = document.getElementById('closeLogin');
const closeSignupBtn = document.getElementById('closeSignup');
const closeAccountBtn = document.getElementById('closeAccount');
const switchToSignupBtn = document.getElementById('switchToSignup');
const switchToLoginBtn = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const accountForm = document.getElementById('accountForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');
const accountError = document.getElementById('accountError');
const signupSuccess = document.getElementById('signupSuccess');
const accountSuccess = document.getElementById('accountSuccess');
const authButtons = document.querySelector('.auth-buttons');
const userMenu = document.getElementById('userMenu');
const userAvatar = document.getElementById('userAvatar');
const userDropdown = document.getElementById('userDropdown');
const logoutBtn = document.getElementById('logoutBtn');
const accountButtons = document.querySelectorAll('.account-btn');
const heroOpenAccountBtn = document.getElementById('heroOpenAccount');
const accountModalTitle = document.getElementById('accountModalTitle');
const accountTypeInput = document.getElementById('accountType');

// Check if user is logged in
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (token && user.firstName) {
        // User is logged in
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
        userAvatar.textContent = user.firstName.charAt(0) + user.lastName.charAt(0);
    } else {
        // User is not logged in
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

// Event Listeners
openLoginBtn.addEventListener('click', () => loginModal.style.display = 'block');
openSignupBtn.addEventListener('click', () => signupModal.style.display = 'block');
closeLoginBtn.addEventListener('click', () => loginModal.style.display = 'none');
closeSignupBtn.addEventListener('click', () => signupModal.style.display = 'none');
closeAccountBtn.addEventListener('click', () => accountModal.style.display = 'none');
switchToSignupBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});
switchToLoginBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});
userAvatar.addEventListener('click', () => {
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});
logoutBtn.addEventListener('click', logout);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === signupModal) signupModal.style.display = 'none';
    if (e.target === accountModal) accountModal.style.display = 'none';
    if (!e.target.matches('.user-avatar')) {
        userDropdown.style.display = 'none';
    }
});

// Account buttons event listeners
accountButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const accountType = e.target.getAttribute('data-account-type');
        openAccountModal(accountType);
    });
});

heroOpenAccountBtn.addEventListener('click', () => {
    // Default to basic account when opening from hero section
    openAccountModal('basic');
});

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Store token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Update UI
            checkAuthStatus();
            
            // Close modal
            loginModal.style.display = 'none';
            loginForm.reset();
        } else {
            loginError.textContent = data.message || 'Login failed';
        }
    } catch (error) {
        console.error('Login error:', error);
        loginError.textContent = 'Login failed. Please try again.';
    }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    signupError.textContent = '';
    signupSuccess.textContent = '';
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        signupError.textContent = 'Passwords do not match';
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            signupSuccess.textContent = 'Account created successfully! You can now login.';
            signupForm.reset();
            
            // Switch to login after a delay
            setTimeout(() => {
                signupModal.style.display = 'none';
                loginModal.style.display = 'block';
            }, 2000);
        } else {
            signupError.textContent = data.message || 'Registration failed';
        }
    } catch (error) {
        console.error('Signup error:', error);
        signupError.textContent = 'Registration failed. Please try again.';
    }
});

// Account form submission
accountForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    accountError.textContent = '';
    accountSuccess.textContent = '';
    
    const accountType = accountTypeInput.value;
    const initialDeposit = document.getElementById('initialDeposit').value;
    const token = localStorage.getItem('token');
    
    if (!token) {
        accountError.textContent = 'Please login to open an account';
        setTimeout(() => {
            accountModal.style.display = 'none';
            loginModal.style.display = 'block';
        }, 1500);
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ type: accountType, balance: initialDeposit })
        });
        
        const data = await response.json();
        
        if (data.success) {
            accountSuccess.textContent = `Your ${accountType} account has been created successfully!`;
            accountForm.reset();
            
            // Close modal after a delay
            setTimeout(() => {
                accountModal.style.display = 'none';
            }, 2000);
        } else {
            accountError.textContent = data.message || 'Account creation failed';
        }
    } catch (error) {
        console.error('Account creation error:', error);
        accountError.textContent = 'Account creation failed. Please try again.';
    }
});

// Open account modal with selected account type
function openAccountModal(accountType) {
    const token = localStorage.getItem('token');
    
    if (!token) {
        // User not logged in, redirect to login
        accountModal.style.display = 'none';
        loginModal.style.display = 'block';
        return;
    }
    
    // Set account type in the form
    accountTypeInput.value = accountType;
    accountModalTitle.textContent = `Open ${capitalizeFirstLetter(accountType)} Account`;
    accountModal.style.display = 'block';
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Logout function
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    checkAuthStatus();
    userDropdown.style.display = 'none';
}

// Initialize page
checkAuthStatus();
