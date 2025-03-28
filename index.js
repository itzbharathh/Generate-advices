import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const advices = adv[Math.floor(Math.random() * adv.length)];
  res.render("index.ejs", {
    advice: advices,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const adv = [
  "The only way to do great work is to love what you do.",
  "Progress over perfection — small steps forward are better than standing still",

  "Failures are lessons — every setback is a setup for a stronger comeback",

  "You’re not behind — you’re exactly where you need to be to learn what you need to know",

  "Motivation is fleeting, discipline is forever — show up even when you don’t feel like it",

  "1% better every day — tiny improvements compound into massive success",

  "Do it scared — confidence comes after you start, not before",

  "You’ve overcome before — think back to how far you’ve come. You can do it again",

  "The hardest climb = the best view — tough times build resilience",

  "Don’t fear failure, fear regret — you miss 100% of the shots you don’t take",

  "Believe you’re worth it — the way you speak to yourself matters. Be kind",

  "Done is better than perfect — don’t let overthinking hold you back",

  "Rest, don’t quit — it’s okay to pause, but never give up",
  "Network genuinely — Build meaningful relationships, not just contacts.",
  "Be proactive — Take initiative and be responsible for your actions.",
  "Manage time well — Prioritize tasks and avoid burnout.",
  "Take ownership — Be accountable for your successes and mistakes.",
  "Stay positive — Focus on solutions, not problems.",
  "Work smart, not just hard — Efficiency matters as much as effort",
  "Seek feedback — Use constructive criticism to grow.",
  "Adapt to change — Embrace new challenges and be flexible.",
  "Stay organized — Keep your workspace and tasks in order.",
  "Practice self-care — Prioritize your mental and physical health.",
  "Set boundaries — Learn to say no and protect your time.",
  "Stay humble — Recognize that there's always more to learn.",
  "Be open-minded — Embrace diverse perspectives and ideas.",
  "Stay focused — Avoid distractions and stay on task.",
  "Be resilient — Learn from failures and keep moving forward.",
  "Embrace challenges — View obstacles as opportunities for growth.",
];
