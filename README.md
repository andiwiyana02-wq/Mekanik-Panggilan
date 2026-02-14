<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mekanik Pro Panggilan</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

 <header class="hero-section">
        <div class="overlay"></div>
        <div class="container">
            <h1>Mekanik Pro Panggilan 🛠️</h1>
            <p>Servis Mobil Profesional & Bergaransi Langsung di Lokasi Anda.</p>
            <div class="cta-buttons">
                <a href="https://wa.me/081395285914" class="btn-primary">Pesan via WhatsApp</a>
            </div>
        </div>
    </header>

<section class="services container">
        <h2 class="section-title">Layanan Unggulan</h2>
        <div class="grid">
            <div class="card"><h3>Tune Up</h3><p>Mesin kembali bertenaga.</p></div>
            <div class="card"><h3>Ganti Oli</h3><p>Praktis di rumah Anda.</p></div>
            <div class="card"><h3>Cek Rem</h3><p>Keamanan utama keluarga.</p></div>
        </div>
    </section>                          <a href="tel:081395285914" class="btn-float-call">
        <span>📞 Hubungi Sekarang</span>
    </a>

</body>
</html> 

</css>
/* General Style */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f0f2f5; color: #333; }

/* Gradasi Modern pada Hero Section */
.hero-section {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    padding: 100px 20px;
    text-align: center;
    position: relative;
}

.container { max-width: 1000px; margin: auto; }

h1 { font-size: 2.5rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 30px; }

/* Tombol Berwarna Cerah */
.btn-primary {
    background: #f39c12;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
    transition: 0.3s;
}

.btn-primary:hover { background: #e67e22; transform: scale(1.05); }

/* Card Services */
.section-title { text-align: center; margin: 40px 0 20px; color: #2c3e50; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px; }
.card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-top: 5px solid #2a5298;
}

/* Tombol Telpon Melayang */
.btn-float-call {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #27ae60;
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 999;
}
