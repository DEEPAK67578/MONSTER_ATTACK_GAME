let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VAlUE = 17;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);


function attackMonster(damageMode) {
   const damage = dealMonsterDamage(damageMode);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost");
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You Have A Draw!");
  }
}
function attackHandler() {
//   const damage = dealMonsterDamage(ATTACK_VALUE);
//   currentMonsterHealth -= damage;
//   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
//   currentPlayerHealth -= playerDamage;
//   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
//     alert("You Won");
//   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
//     alert("You Lost");
//   } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
//     alert("You Have A Draw!");
//   }
attackMonster(ATTACK_VALUE)
}

function strongAttackHandler() {
//    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
//   currentMonsterHealth -= damage;
//   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
//   currentPlayerHealth -= playerDamage;
//   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
//     alert("You Won");
//   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
//     alert("You Lost");
//   } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
//     alert("You Have A Draw!");
//   }
attackMonster(STRONG_ATTACK_VAlUE)
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
