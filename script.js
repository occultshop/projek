(function(){
  // ======= PENGATURAN =======
  var showAd = true; // true = tampilkan iklan, false = sembunyikan
  var menuItems = [
    { text: "Home", link: "#" },
    { text: "Produk", link: "#" },
    { text: "Kontak", link: "#" }
  ];
  var faviconPath = 'https://raw.githubusercontent.com/animalpsychic/chatai/refs/heads/main/public/favicon.png'; // Ganti dengan URL favicon PNG/JPG
  var faviconType = 'image/png'; // Ubah ke 'image/jpeg' kalau pakai JPG/JPEG
  // ==========================

  // Pasang favicon
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = faviconType;
  link.href = faviconPath;
  document.head.appendChild(link);

  // CSS
  var css = `
    /* Header Menu */
    .top-menu {
      background: #222;
      color: #fff;
      display: flex;
      gap: 20px;
      padding: 10px 20px;
    }
    .top-menu a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    .top-menu a:hover {
      text-decoration: underline;
    }

    /* Floating Ad */
    .floating-ad {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: calc(100% - 40px); /* total kosong kiri-kanan 20px + 20px */
  background: #ffcc00;
  color: #000;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px 10px 10px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.15);
  z-index: 9999;
}

    .floating-ad a {
      color: inherit;
      text-decoration: none;
    }
    .close-btn {
  position: absolute !important;
  top: 50% !important;
  right: 10px !important;
  transform: translateY(-50%) !important;
  background: #000 !important;
  color: #fff !important;
  border: none !important;
  border-radius: 50% !important;
  width: 22px !important;
  height: 22px !important;
  font-size: 16px !important;
  line-height: 20px !important;
  text-align: center !important;
  cursor: pointer !important;
  z-index: 2147483647 !important; /* selalu paling atas */
  display: inline-block !important;
}
  `;

  var style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);

  // Menu Header
  var menu = document.createElement('div');
  menu.className = 'top-menu';
  menu.innerHTML = menuItems.map(item => `<a href="${item.link}">${item.text}</a>`).join('');
  document.body.insertBefore(menu, document.body.firstChild);

// Floating Ad
if(showAd){
  var ad = document.createElement('div');
  ad.className = 'floating-ad';

  var btn = document.createElement('button');
  btn.className = 'close-btn';
  btn.innerHTML = '&times;';
  btn.addEventListener('click', function(){
    ad.remove();
  });

  var link = document.createElement('a');
  link.href = '#';
  link.target = '_blank';
  link.textContent = '🔥 Promo Spesial! Diskon 50%';

  ad.appendChild(btn);
  ad.appendChild(link);
  document.body.appendChild(ad);
}

})();






