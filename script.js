const QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  { text: "Stay hungry, stay foolish.", author: "Stewart Brand" },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "You can’t use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    text: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    text: "What we fear doing most is usually what we most need to do.",
    author: "Tim Ferriss",
  },
  {
    text: "You can’t build a reputation on what you are going to do.",
    author: "Henry Ford",
  },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Limit your ‘always’ and your ‘nevers.’", author: "Amy Poehler" },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  {
    text: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Unknown",
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Unknown",
  },
  { text: "Little things make big days.", author: "Unknown" },
  {
    text: "It’s going to be hard, but hard does not mean impossible.",
    author: "Unknown",
  },
  { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  {
    text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown",
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown",
  },
  { text: "Dream it. Believe it. Build it.", author: "Unknown" },
  {
    text: "Don’t wish it were easier. Wish you were better.",
    author: "Jim Rohn",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  { text: "Dreams don’t work unless you do.", author: "John C. Maxwell" },
  {
    text: "If you don’t build your dream, someone else will hire you to help them build theirs.",
    author: "Dhirubhai Ambani",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous",
  },
  {
    text: "Hustle until your haters ask if you’re hiring.",
    author: "Anonymous",
  },
  {
    text: "Some people want it to happen, some wish it would happen, others make it happen.",
    author: "Michael Jordan",
  },
  { text: "Do it with passion or not at all.", author: "Rosa Nouchette Carey" },
  {
    text: "A year from now you may wish you had started today.",
    author: "Karen Lamb",
  },
  {
    text: "Success is what happens after you have survived all your mistakes.",
    author: "Anora Lee",
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  {
    text: "Believe in your infinite potential. Your only limitations are those you set upon yourself.",
    author: "Roy T. Bennett",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen R. Covey",
  },
  {
    text: "Success is the progressive realization of a worthy goal or ideal.",
    author: "Earl Nightingale",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
  },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
];

function setRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  quoteElement.innerHTML = `"${randomQuote.text}" - ${randomQuote.author}`;
}

const state = {
  currentEngine: "google",
  searchEngines: {
    google: "https://www.google.com/search?q=",
    youtube: "https://www.youtube.com/results?search_query=",

    chatgpt: "https://chatgpt.com/?model=auto&q=",
    perplexity: "https://www.perplexity.ai/search?q=",
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = now.toLocaleTimeString("en-US", {
    second: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const timeElement = $("#current-time");
  if (timeElement) {
    timeElement.textContent = timeString;
  }

  const greeting =
    hours < 12
      ? "Already losing, aren’t you?"
      : hours < 14
      ? "Lunch won’t save you."
      : hours < 18
      ? "Still pretending, huh?"
      : hours < 22
      ? "Evening. Regrets piling up?"
      : "Can't outrun yourself, huh?";

  const greetingElement = $("#greeting");
  if (greetingElement) {
    greetingElement.textContent = `${greeting}`;
  }
}

function startClock() {
  updateTime();
  setInterval(updateTime, 1000);
}

async function loadRecentSites() {
  if (!chrome.topSites) return;

  try {
    const sites = await chrome.topSites.get();
    const recentSitesContainer = $("#recent-sites");

    recentSitesContainer.innerHTML = "";

    sites.slice(0, 8).forEach((site) => {
      const domain = new URL(site.url).hostname;
      const siteElement = document.createElement("span");
      siteElement.className = "icon";
      siteElement.title = site.title;

      const fallbackText = site.title[0].toUpperCase();
      const fallbackSvg = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white">${fallbackText}</text></svg>`;

      siteElement.innerHTML = `
        <img src="chrome://favicon/size/32/${site.url}"
             alt="${site.title}"
             onerror="this.src='${fallbackSvg}'"/>
      `;

      siteElement.addEventListener(
        "click",
        () => (window.location.href = site.url)
      );
      recentSitesContainer.appendChild(siteElement);
    });
  } catch (error) {
    console.log("Error loading recent sites:", error);
  }
}
function initializeSearch() {
  const searchInput = $("#search");
  const addonButtons = $$(".addon-btn");

  addonButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      addonButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentEngine = btn.dataset.engine;
      searchInput.focus();
    });
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (!query) return;
      const url =
        state.searchEngines[state.currentEngine] + encodeURIComponent(query);
      window.location.href = url;
    }
  });
}

async function loadRecentSites() {
  if (!chrome.topSites) return;

  try {
    const sites = await chrome.topSites.get();
    const recentSitesContainer = $("#recent-sites");

    recentSitesContainer.innerHTML = "";

    sites.slice(0, 8).forEach((site) => {
      const domain = new URL(site.url).hostname;
      const siteElement = document.createElement("span");
      siteElement.className = "icon";
      siteElement.title = site.title;

      siteElement.innerHTML = `
        <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" 
             alt="${site.title}"
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${site.title[0]}</text></svg>'"/>
      `;

      siteElement.addEventListener(
        "click",
        () => (window.location.href = site.url)
      );
      recentSitesContainer.appendChild(siteElement);
    });
  } catch (error) {
    console.log("Error loading recent sites:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startClock();
  setRandomQuote();
  initializeSearch();
  loadRecentSites();
  const searchInput = $("#search");
  if (searchInput) {
    searchInput.focus();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const numberOfParticles = 500; // Number of particles to create
  const body = document.body;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Randomize size and position
    const size = Math.random() * 1 + 1; // Size between 2px and 7px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = `rgba(255,255,255, .25)`;

    // Set random position
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;

    // Append particle to the body
    body.appendChild(particle);

    // Animate particle movement
    animateParticle(particle);
  }

  function animateParticle(particle) {
    const randomDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s
    particle.style.animationDuration = `${randomDuration}s`;

    // Randomly reposition the particle after animation ends
    particle.addEventListener("animationiteration", () => {
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.top = `${Math.random() * window.innerHeight}px`;
    });
  }
});
