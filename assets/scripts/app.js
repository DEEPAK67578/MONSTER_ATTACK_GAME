
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VAlUE = 17;
const HEALVALUE = 20;


const enteredValue = prompt('Max life for you and the Monster','100')

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife<=0) {
   chosenMaxLife = 100;
}


let hasBonusLife = true;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You will be dead but the bonus life saved you");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost");
    reset();
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You Have A Draw!");
    reset();
  }
}

function attackMonster(damageMode) {
  const damage = dealMonsterDamage(damageMode);
  currentMonsterHealth -= damage;
  endRound();
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
  attackMonster(ATTACK_VALUE);
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
  attackMonster(STRONG_ATTACK_VAlUE);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEALVALUE) {
    alert("You can't heal more than your max initial health");
  } else {
    healValue = HEALVALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
