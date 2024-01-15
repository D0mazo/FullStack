'use strict';

console.log("front.js file was loaded");

const usersUrl = 'http://localhost:3000/api/users';

// parsisiusti
async function getUsers(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }

    const userData = await resp.json();
    console.log('userData ===', userData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getUsers(`${usersUrl}/1`);
getUsers(`${usersUrl}/2`);
getUsers(usersUrl);  // corrected from `${usersUrl}`
