document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // تحقق من اسم المستخدم وكلمة المرور
    if (username === 'admin' && password === 'password') { // يمكنك تغيير هذا
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});
