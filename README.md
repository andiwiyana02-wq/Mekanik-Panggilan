<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mekanik Panggilan Pro - Servis Mobil di Rumah</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="logo">Mekanik<span>Pro</span></div>
    </nav>

   <header class="hero">
        <h1>Mobil Mogok? <br>Tak Perlu Derek!</h1>
        <p>Mekanik ahli datang ke lokasi Anda 24/7. Cepat, Bergaransi, & Transparan.</p>
        <a href="#booking" class="btn-main">Pesan Sekarang</a>
    </header>

  <section class="features">
        <div class="feature-item">
            <span>🚀</span>
            <h4>Respon Cepat</h4>
            <p>Tiba di lokasi dalam 30-60 menit.</p>
        </div>
        <div class="feature-item">
            <span>💎</span>
            <h4>Teknisi Ahli</h4>
            <p>Berpengalaman menangani berbagai jenis mobil.</p>
        </div>
        <div class="feature-item">
            <span>💰</span>
            <h4>Harga Jujur</h4>
            <p>Estimasi biaya diberikan di awal.</p>
        </div>
    </section>

  <section id="services" class="services">
        <h2>Layanan Kami</h2>
        <div class="service-grid">
            <div class="service-card">
                <h3>Ganti Oli</h3>
                <p>Mulai dari Rp 150rb</p>
            </div>
            <div class="service-card">
                <h3>Tune Up</h3>
                <p>Mesin kembali bertenaga</p>
            </div>
            <div class="service-card">
                <h3>Cek Aki/Rem</h3>
                <p>Keamanan nomor satu</p>
            </div>
        </div>
    </section>
    <section id="booking" class="booking">
        <div class="form-container">
            <h2>Formulir Booking</h2>
            <form id="whatsappForm">
                <input type="text" id="name" placeholder="Nama Lengkap" required>
                <input type="text" id="car" placeholder="Merk & Tipe Mobil" required>
                <textarea id="issue" placeholder="Keluhan Mobil (Misal: Mesin tidak mau hidup)" required></textarea>
                <input type="text" id="location" placeholder="Lokasi Anda (Kelurahan/Kecamatan)" required>
                <button type="submit">Kirim ke WhatsApp Mekanik</button>
            </form>
        </div>
    </section>

   <footer>
        <p>&copy; 2024 Mekanik Panggilan Pro. Siap membantu kapan saja.</p>
    </footer>

  <script src="script.js"></script>
</body>
</html>
