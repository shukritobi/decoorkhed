document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value || 'Belum confirm';
  const location = document.getElementById('location').value.trim() || 'Belum confirm';
  const idea = document.getElementById('idea').value.trim() || '-';
  const msg = `Hi Decoorkhed! Saya nak tanya untuk tempahan 👋\n\nNama: ${name}\nJenis: ${type}\nTarikh event: ${date}\nLokasi: ${location}\nIdea / tema: ${idea}\n\nBoleh share quotation & availability?`;
  window.open(`https://wa.me/60163473472?text=${encodeURIComponent(msg)}`, '_blank');
});
