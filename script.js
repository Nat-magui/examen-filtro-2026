// Datos principales del personaje
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

// Costo del hechizo usado para probar la función canCastSpell
const spellCost = 30;

// Estado del personaje usado para probar si puede lanzar hechizos
const isStunned = false;

// Calcula el daño y evita devolver valores negativos
function calculateDamage(attack, defense) {
  const damage = attack - defense;

  if (damage < 0) {
    return 0;
  }

  return damage;
}

// Retorna true solo si la vida es mayor a cero
const isAlive = (health) => health > 0;

// Retorna true si hay mana suficiente y el personaje no está aturdido
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

// Devuelve la presentación del personaje con el formato exacto pedido
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// Muestra los resultados en la consola del navegador
console.log("Daño calculado:", calculateDamage(attack, defense));
console.log("¿Está vivo?:", isAlive(health));
console.log("¿Puede lanzar hechizo?:", canCastSpell(mana, spellCost, isStunned));
console.log("Presentación:", getPresentation(name, characterClass, level));