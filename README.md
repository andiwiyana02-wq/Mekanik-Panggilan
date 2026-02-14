<!doctype html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mekanik Panggilan Profesional</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
        <h1>Mechanic On-Call 🛠️</h1>
        <p>Solusi servis mobil langsung di rumah Anda!</p>
    </header>

  <section id="services">
        <h3>Layanan Kami</h3>
        <ul>
            <li>✅ Ganti Oli & Filter</li>
            <li>✅ Cek Sistem Rem</li>
            <li>✅ Jumper Aki / Ganti Aki</li>
            <li>✅ Tune Up Mesin</li>
        </ul>
        </section>

<section id="booking">
        <h3>Pesan Mekanik Sekarang</h3>
        <form id="orderForm">
        <input type="text" id="name" placeholder="Nama Anda" required>
        <input type="text" id="carModel" placeholder="Model Mobil (Contoh: Toyota Avanza)" required>
        <textarea id="issue" placeholder="Ceritakan kendala mobil Anda..." required></textarea>
        <input type="text" id="address" placeholder="Alamat Lengkap" required>
        <button type="submit">Kirim via WhatsApp</button>
        </form>
        </section>

<script src="script.js"></script>
</body>
</html>   
/* Gaya dasar agar terlihat modern */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
}

header {
    text-align: center;
    background: #2c3e50;
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

#services {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

#booking {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

input, textarea {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Agar padding tidak merusak lebar */
}

button {
    width: 100%;
    background-color: #27ae60;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: #2ecc71;
}
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh

// 1. Ambil data dari input
    const name = document.getElementById('name').value;
    const car = document.getElementById('carModel').value;
    const issue = document.getElementById('issue').value;
    const address = document.getElementById('address').value;

// 2. const myPhoneNumber = "081395285914"; 

// 3. const message = Halo Mekanik! Saya ingin pesan servis:%0A%0A +
                    *Nama:* ${name}%0A + 
                    *Mobil:* ${car}%0A +
                    *Kendala:* ${issue}%0A +
                    *Alamat:* ${address};

// 4. const whatsappURL = https://wa.me/${myPhoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});
    
