// Hämta data från servern och visa det i listan
async function fetchUsers() {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (!response.ok) {
      throw new Error('Något gick fel vid hämtning av användare');
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error(error);
  }
}

// Visa användare i DOM
function displayUsers(users) {
  const userList = document.getElementById('user-list');
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.firstName} ${user.lastName} (${user.username})`;
    li.classList.add(user.color); // Lägg till färg som klass
    userList.appendChild(li);
  });
}

// Kör funktionen
fetchUsers();
