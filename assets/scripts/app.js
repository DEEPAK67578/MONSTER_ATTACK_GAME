const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VAlUE = 17;
const HEALVALUE = 20;
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Max life for you and the Monster", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let battleLog = [];
let hasBonusLife = true;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logentry;
  if (event == LOG_EVENT_PLAYER_ATTACK) {
    logentry = {
      event: event,
      value: value,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event == LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logentry = {
      event: event,
      value: value,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event == LOG_EVENT_MONSTER_ATTACK) {
    logentry = {
      event: event,
      value: value,
      target: "Player",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if ((event = LOG_EVENT_PLAYER_HEAL)) {
    logentry = {
      event: event,
      value: value,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if ((event = LOG_EVENT_GAME_OVER)) {
    logentry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }
  battleLog.push(logentry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK,playerDamage,currentMonsterHealth,currentPlayerHealth)
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You will be dead but the bonus life saved you");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
    writeToLog(LOG_EVENT_GAME_OVER,'PLAYER WON',currentMonsterHealth,currentPlayerHealth)
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost");
    writeToLog(LOG_EVENT_GAME_OVER,'MONSTER WON',currentMonsterHealth,currentPlayerHealth)
    reset();
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You Have A Draw!");
    writeToLog(LOG_EVENT_GAME_OVER,'DRAW',currentMonsterHealth,currentPlayerHealth)
    reset();
  }
}

function attackMonster(damageMode) {
  let logEvent
  if(damageMode == 10) {
    logEvent = LOG_EVENT_PLAYER_ATTACK
  } else if(damageMode == 17) {
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  }
  const damage = dealMonsterDamage(damageMode);
  currentMonsterHealth -= damage;
  writeToLog(logEvent,damage,currentMonsterHealth,currentPlayerHealth)
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
  console.log(healValue)
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
  writeToLog(LOG_EVENT_PLAYER_HEAL,healValue,currentMonsterHealth,currentPlayerHealth)
  
}

function printlogEntry() {
  console.log(battleLog)
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener('click',printlogEntry)