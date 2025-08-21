function buyTicket(artist) {
  document.getElementById('ticketTitle').innerText = artist + " Ticket";
  document.getElementById('ticketModal').style.display = "block";
}

function closeModal() {
  document.getElementById('ticketModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('ticketModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}