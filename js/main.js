function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}
var deck = [
  new card(
    "Temperance",
    "Temperance is the card for bringing balance, patience and moderation into your life. You are being invited to stabilise your energy and to allow the life force to flow through you without force or resistance. It’s time to recover your flow and get your life back into order and balance.",
    "./media/temperance.jpeg"
  ),
  new card(
    "The Sun",
    "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. People are drawn to you because you can always see the bright side and bring such warmth into other people’s lives. This beautiful, warm energy is what will get you through the tough times and help you succeed. You are also in a position where you can share your highest qualities and achievements with others. Radiate who you are and what you stand for; shine your love on those you care about.",
    "./media/sun.webp"
  ),
  new card(
    "The Star",
    "The Star brings renewed hope and faith, and a sense that you are truly blessed by the Universe. You are entering a peaceful, loving phase in your life, filled with calm energy, mental stability and more in-depth understanding of both yourself and others around you. This is a time of significant personal growth and development as you are now ready to receive the many blessings of the Universe.",
    "./media/star.jpg"
  ),
  new card(
    "The Priestess",
    " The High Priestess is a signal that you are being called to embrace the Divine Feminine – your connection to your intuition, compassion, empathy, and inner wisdom. Regardless of your gender, it is vital for you to balance and integrate your masculine and feminine energies, and the presence of The High Priestess signals that your sacred feminine needs your attention right now. Feel, rather than think. Collaborate, rather than compete. Create, rather than destroy. ",
    "./media/priestess.jpeg"
  ),
  new card(
    "The Moon",
    " The Moon can indicate a time of uncertainty and illusion, when nothing is what it seems. Be careful of making fast decisions when The Moon appears because you may later realize you only had half the information you needed. You need to listen to and trust your intuition so you can see beyond what is in front of you. ",
    "./media/moon.jpeg"
  ),
  new card(
    "The Lovers",
    "In its purest form, The Lovers card represents conscious connections and meaningful relationships. The arrival of this card in a Tarot reading shows that you have a beautiful, soul-honoring connection with a loved one. ",
    "./media/lovers.jpeg"
  ),
  new card(
    "The Hermit",
    "The Hermit invites you to retreat into your private world and experience a deep sense of seclusion and introspection. You know that you need to take this journey alone or with a small, intimate group of spiritually minded people. When you allow yourself to tune in to your inner, guiding light, you will hear the answers you need and grow wise beyond your years. Find your light, shine it on your soul and create your unique path.",
    "./media/hermit.jpeg"
  ),
  new card(
    "The Empress",
    "You are in a period of growth, in which all you have dreamed of is now coming to fruition. When The Empress appears in your Tarot readings, take a moment to reflect on the bounty that surrounds you and offer gratitude for all you have created so you can continue to build on this energy and create even more abundance in your life.",
    "./media/empress.jpeg"
  ),
  new card(
    "The Devil",
    "Shine your light on the negative patterns that have been standing in your way for so long, and over time, you will loosen the grip they have on you. ",
    "./media/devil.jpeg"
  ),
  new card(
    "Death",
    " Relax! The Death card can be one of the most positive cards in the deck, the Death card symbolizes the end of a major phase or aspect of your life that you realize is no longer serving you, opening up the possibility of something far more valuable and essential. You must close one door to open another. You need to put the past behind you and part ways, ready to embrace new opportunities and possibilities. It may be difficult to let go of the past, but you will soon see its importance and the promise of renewal and transformation. ",
    "./media/death.jpeg"
  ),
];

function getRandom(num) {
  let randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}
document.getElementById("draw").onclick = function () {
  let index = getRandom(10);
  let currentCard = deck[index];

  document.getElementById('display').innerHTML = `
  <div> <img src= "${currentCard.image}"> </div>
  <div class="columna"><h3>${currentCard.name}</h3>
  <p>${currentCard.description}</p></div>
  
  `;
};
