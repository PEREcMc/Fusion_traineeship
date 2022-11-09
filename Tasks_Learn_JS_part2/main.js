const alertBtn = document.querySelector('.alert-btn'),
      focus = document.getElementById('focus'),
      transitText = document.getElementById('transit-text'),
      transitBtn = document.querySelector('[data="transit-btn"]');
      
// 1
alertBtn.onclick = ( () => alert('уря!'));

// 2
focus.addEventListener('blur', function() {
    alert('Ждём возвращения!')
});

// 3
transitBtn.addEventListener('click', function() {
    if (transitText.value != '') transitBtn.innerText = transitText.value;   
})
