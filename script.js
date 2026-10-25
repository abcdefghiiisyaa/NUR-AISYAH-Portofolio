// Mengambil elemen kartu dari HTML
const card = document.getElementById('myCard');
const cardInner = card.querySelector('.card-inner');

// Mendeteksi event klik (atau ketukan di HP)
card.addEventListener('click', function() {
    // Menambah atau menghapus class 'is-flipped' secara bergantian
    cardInner.classList.toggle('is-flipped');
});
