function generateCaptcha() {
    var captcha = Math.random().toString(36).slice(2, 8).toUpperCase();
    var captchaImage = document.querySelector('.captcha-image');
    captchaImage.src = 'https://dummyimage.com/200x50/000/fff&text=' + captcha;
    return captcha;
  }

  function refreshCaptcha() {
    document.getElementById('captcha').value = '';
    generateCaptcha();
  }
  

  function submitForm(event) {
    event.preventDefault();
  
    var captchaInput = document.getElementById('captcha').value.toUpperCase();
    var captchaImage = document.querySelector('.captcha-image').getAttribute('src');
    var captchaCode = captchaImage.substring(captchaImage.lastIndexOf('=') + 1);
  
    if (captchaInput !== captchaCode) {
      showMessage('Invalid CAPTCHA', 'form-error');
      return;
    }
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  

    showMessage('Form submitted successfully!', 'form-success');
  
    document.getElementById('contact-form').reset();
    refreshCaptcha();
  }
  

  function showMessage(message, className) {
    var formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = message;
    formMessage.className = 'form-message ' + className;
    formMessage.style.display = 'block';
  }
  
  generateCaptcha();
  
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  document.querySelector('.captcha-refresh').addEventListener('click', refreshCaptcha);
  