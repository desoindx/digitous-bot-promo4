const { WebClient } = require("@slack/web-api");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.BOT_TOKEN);

const web = new WebClient(process.env.BOT_TOKEN);

web.users
  .info({ user: "U01E51PPC7R" })
  .then((response) => console.log(response));
web.chat.postMessage({
  channel: "digitous-promo4",
  text:
    "Hello la promo 4, c'est botty, le bot slack crée specialement pour vous!!!\nJ'ai hâte que vous avanciez en JS pour que vous puissez me rajouter plein de fonctionnalitées",
});
