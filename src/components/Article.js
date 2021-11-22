import React from "react";

function Article({ title, preview, minutes, date = "January 1, 1970" }) {
  function getCoffee(minutes) {
    let char, num;
    if (minutes > 30) {
      num = Math.ceil(minutes/10);
      char = "🍱";
    } else {
      num = Math.ceil(minutes/5);
      char = "☕️";
    }
    return characterMultiplier(char, num);
  }
  function characterMultiplier(char, multiplier) {
    let charChain = "";
    for (let i = 0; i < multiplier; i++) {
      charChain += char;
    }
    console.log(charChain);
    return charChain;
  }
  const readTime = `${getCoffee(minutes)} ${minutes} min read`;
  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date} • ${readTime}`}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;
