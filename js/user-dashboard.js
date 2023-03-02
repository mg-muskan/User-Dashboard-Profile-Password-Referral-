window.addEventListener('DOMContentLoaded', () => {

    const noImage = document.getElementById('user-dashboard-info-image');

    // Image not present
    if(document.getElementById('user-dashboard-image').getAttribute('src') == '') {
        const name = document.getElementById('user-dashboard-info-rest-name').innerText;
        noImage.innerText = name.charAt(0).trim();
    }

    // Image is present
    else {
        noImage.classList.remove('no-image');
    }

})

const dashboardNav = document.getElementById('collapse-dashboard');
const dashboardNavToggle = document.getElementById('user-dashboard-nav-toggle');
dashboardNavToggle.addEventListener('click', function() {
    dashboardNav.classList.toggle('active');
    console.log('hey');
})

// Password error warnings
prevPass = document.getElementById('user-dashboard-old-pass');
newPass = document.getElementById('user-dashboard-pass-error');
confPass = document.getElementById('user-dashboard-cpass-error');
pass = document.getElementById('user-dashboard-pass');
cpass = document.getElementById('user-dashboard-cpass');

pass.addEventListener('input', () => {validate();});
cpass.addEventListener('input', () => {validate();});

function validate() {
    if(pass.value == '' && cpass.value != '') {
        newPass.innerHTML = '';
        confPass.innerHTML = 'New Password cannot be empty'
    }
    else if(pass.value.length < 8) {
        newPass.innerHTML = 'Password cannot be less than 8 characters';
        confPass.innerHTML = '';
    }
    else if(pass.value != cpass.value && cpass.value != '') {
        newPass.innerHTML = '';
        confPass.innerHTML = 'Password does not match';
    }
    else {
        newPass.innerHTML = '';
        confPass.innerHTML = '';
    }
}