const guests = [
  { id: "1", name: "Papi & Mami", passes: 2 },
  { id: "2", name: "Chino, Steph, André & Ari", passes: 4 },
  { id: "3", name: "Geova & Ana", passes: 2 },
  { id: "4", name: "Rodrigo & Cori", passes: 2 },
  { id: "5", name: "Kathy", passes: 1 },
  { id: "6", name: "Jorge & Aura", passes: 2 },
  { id: "7", name: "Sergio & Ingrid", passes: 2 },
  { id: "8", name: "Walter & Mayra", passes: 1 },
  { id: "9", name: "Max & Josefina", passes: 2 },
  { id: "10", name: "Richard & Angelica", passes: 2 },
  { id: "11", name: "Rafael & Miriam", passes: 2 },
  { id: "12", name: "Adriana", passes: 1 },
  { id: "13", name: "Coco & Robyn", passes: 2 },
  { id: "14", name: "Abner & Edlin", passes: 2 },
  { id: "15", name: "Koko & Karina", passes: 2 },
  { id: "16", name: "Tía Carmen", passes: 1 },
  { id: "17", name: "Estefanía & Vale", passes: 2 },
  { id: "18", name: "Alejandro, Andrea, Anita & Ari", passes: 4 },
  { id: "19", name: "Rebeca", passes: 1 },
  { id: "20", name: "Linda", passes: 1 },
  { id: "21", name: "Barbarito & Frida", passes: 2 },
  { id: "22", name: "Cherry & Zoe", passes: 2 },
  { id: "23", name: "Paco & Marga", passes: 2 },
  { id: "24", name: "Omar", passes: 1 },
  { id: "25", name: "Adri", passes: 1 },
  { id: "26", name: "Gabriel y compañía", passes: 2 },
  { id: "27", name: "Don Enrique y Sra", passes: 2 },
  { id: "28", name: "Don Smith y Sra", passes: 2 },
  { id: "29", name: "Raul", passes: 1 },
  { id: "30", name: "Juan Marcos y Mariana", passes: 2 },
  { id: "31", name: "Nati", passes: 1 },
  { id: "32", name: "Dani", passes: 1 }, 
  { id: "33", name: "Gaby", passes: 1 },
  { id: "34", name: "Andrea y Eduardo", passes: 2 },
  { id: "35", name: "Javi y Dani", passes: 2 }
];

document.addEventListener("DOMContentLoaded", () => {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent((value || '').replace(/\+/g, ' '));
    }
    return params;
  }

  const queryParams = getQueryParams();
  const guestId = queryParams.id;
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    // Sección: guest-name
    const guestNameSection = document.getElementById('guest-name');
    const message = guest.passes > 1
      ? "Este momento no estaría completo sin ustedes."
      : "Este momento no estaría completo sin usted.";
  
    guestNameSection.innerHTML = `
      <span class="guest-title">¡${guest.name}!</span><br>
      <span class="guest-message">${message}</span>
    `;
  
    // Sección: passes
    const passesSection = document.getElementById('passes');
    passesSection.textContent =
      `${guest.passes} ${guest.passes === 1 ? 'lugar reservado con cariño.' : 'lugares reservados con cariño.'}`;

      if (!window.eventData) window.eventData = {};

window.eventData.rsvp = {
  rsvpImage: "/images/rsvp.png",
  form: `https://docs.google.com/forms/d/e/1FAIpQLSdAcHTQU0WBzqMlkJ4tIUVqY60DOG9GiDr0mCbFcBDhxmjITw/viewform?usp=pp_url&entry.42292443=${encodeURIComponent(guest.name)}&entry.800985369=${guest.passes}`
};
  
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }  
});

  