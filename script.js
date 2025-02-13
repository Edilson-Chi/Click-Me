document.addEventListener("DOMContentLoaded", (event) => {
    yes = document.getElementById("yes");
    title = document.getElementById("title");
    no = document.getElementById("no");
    text = document.getElementById("text");
    rose = document.getElementById("rose");
    yay = document.getElementById("yay");

    let offsetFactorX = 40;
    let offsetFactorY = 40;
    let scale = 1
    no.addEventListener('mouseover', () => {
        val()
    })
    function val() {
        let bounding;
        const valentineBegs = [
            "I promise to bring you snacks whenever you want! 🍫",
            "Think of all the cute dates we could go on! 😍",
            "Roses are red, violets are blue, if you don’t click YES, I’ll be so blue! 💙",
            "I can’t imagine Valentine’s Day without you. 🥺",
            "You're my dream come true—say YES and make it real! ✨",
            "If you say YES, I'll be the happiest person alive! 😭",
            "I'll stop sending you memes at 3 AM if you say YES... maybe. 😜",
            "You’re the only person I want to annoy forever. 💕",
            "I’ll write you love notes every day if you say YES! 📝",
            "Be my Valentine, and I’ll let you pick the movie! 🍿",
            "Saying YES is risk-free! I come with unlimited hugs. 🤗",
            "I’ve been practicing my happy dance just for this moment. 💃🕺",
            "Imagine all the cute pictures we could take together! 📸",
            "I made a wish on a shooting star for this moment! 🌠",
            "I'll even share my fries with you—true love, right? 🍟",
            "Click YES, and I'll bring you coffee every morning! ☕",
            "You’re the peanut butter to my jelly—say YES! 🥪",
            "We’d be the cutest couple ever. Just saying. 😉",
            "I'll give you unlimited compliments if you say YES! 😍",
            "I've been waiting all year to ask you this! 💌",
            "Click YES, and I’ll be your personal cheerleader forever! 📣",
            "You’re too amazing to let this chance go! 💖",
            "I'll name a star after you if you say YES! ⭐",
            "I’d totally write a love song about you if you say YES! 🎶",
            "Say YES, and I'll never let you go! 💞",
            "If you say YES, we can have the best Valentine’s Day ever! 💘",
            "Life is better with you in it—please say YES! 🌎",
            "I’ll be the best Valentine ever, just give me a chance! 🎁",
            "You make my heart do a happy little dance. 💃",
            "If you say YES, I promise to make you laugh every day! 😂",
            "Say YES, and I’ll let you steal my hoodies! 🧥",
            "I already picked out matching couple outfits… no pressure. 😏",
            "I’d write you a 10-page love letter if you want! ✉️",
            "If you say YES, I’ll buy us matching plushies! 🧸",
            "If you click YES, we’ll have the best adventures together! ✈️",
            "Say YES, and I'll write your name with hearts everywhere! ❤️",
            "Clicking YES is the best decision you'll make today. Trust me. 😉",
        ];

        text.innerText = valentineBegs[Math.floor(Math.random() * valentineBegs.length)]
        do {
            offsetFactorX = 100 * Math.random()
            offsetFactorX = 100 * Math.random()
            no.style.transform = `translate(calc(${offsetFactorX}vw - ${no.getBoundingClientRect().left}px), calc(${offsetFactorY}vh - ${no.getBoundingClientRect().top}px))`;
            bounding = no.getBoundingClientRect()
        } while ((bounding.top < 0 || bounding.left < 0 || bounding.bottom > (window.innerHeight || document.documentElement.clientHeight) || bounding.right > (window.innerWidth || document.documentElement.clientWidth) || offsetFactorX > 5 || offsetFactorY < 5))
        scale += 0.5
        yes.style.scale = scale
    }
    no.addEventListener('click', () => {
        val()
    })
    yes.addEventListener('click', () => {
        rose.style.display = "none";
        no.style.display = "none";
        yes.style.display = "none";
        yay.style.display = "block";
        text.innerText = ""
        title.innerText = "See you on the 14th ;)"
    })
});
