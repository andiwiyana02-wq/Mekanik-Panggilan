document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const car = document.getElementById('car').value;
    const issue = document.getElementById('issue').value;
    const location = document.getElementById('location').value;

    // Ganti dengan nomor WhatsApp Anda (Gunakan kode negara 62)
    const phoneNumber = "6281395285914"; 

    const text = `*ORDER MEKANIK PANGGILAN*%0A` +
                 `----------------------------%0A` +
                 `*Nama:* ${name}%0A` +
                 `*Mobil:* ${car}%0A` +
                 `*Masalah:* ${issue}%0A` +
                 `*Lokasi:* ${location}%0A` +
                 `----------------------------%0A` +
                 `Mohon segera diproses ya!`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
});
