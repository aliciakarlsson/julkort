function createSnowflakes() {
  const numFlakes = 100; //antalet snöflingor
  const cardBottom = document.querySelector(".card-bottom");

  for (let i = 0; i < numFlakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";

    const size = Math.random() * 20 + 10; // Storlek på snöflingor
    snowflake.style.fontSize = `${size}px`;

    const startOffset = Math.random() * 100; //Startposition längs skärmen
    snowflake.style.left = `${startOffset}vw`;

    const fallDuration = Math.random() * 5 + 5;//Fallhastighet för snöflingorna
    snowflake.style.animation = `fall ${fallDuration}s linear infinite`;

    cardBottom.appendChild(snowflake);
  }
}

createSnowflakes();
