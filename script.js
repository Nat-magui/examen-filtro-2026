// Datos principales del personaje
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

// Calcula el daño restando la defensa al ataque
function calculateDamage(attack, defense) {
  const damage = attack - defense;

  if (damage < 0) {
    return 0;
  }

  return damage;
}

// Verifica si el personaje sigue vivo
const isAlive = (health) => health > 0;

// Verifica si el personaje puede lanzar un hechizo
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

// Devuelve la presentaciOn del personaje con el formato pedido
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// Resultados en consola
console.log("Daño calculado:", calculateDamage(attack, defense));
console.log("¿Está vivo?:", isAlive(health));
console.log("¿Puede lanzar hechizo?:", canCastSpell(mana, 30, false));
console.log("Presentación:", getPresentation(name, characterClass, level));