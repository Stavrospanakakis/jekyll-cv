var checkbox = document.querySelector('input[name=mode]')
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(--fg-color-dark)'})
    }
})