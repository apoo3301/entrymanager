// hashElements.js
const argon2 = require("argon2");

async function hashElement(element) {
  try {
    const hashed = await argon2.hash(element);
    console.log(`Original: ${element}`);
    console.log(`Hashed: ${hashed}`);
  } catch (err) {
    console.error("Erreur lors du hachage de l'élément :", err);
  }
}

const elementToHash = process.argv[2] || "yourElementHere";

hashElement(elementToHash);
