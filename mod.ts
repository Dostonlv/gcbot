import {Bot, Composer, Context, InlineKeyboard,createConversation,conversations,session} from 'grammy'
import {composer} from './delta/start'
import {fullName} from './delta/getName'
import dotenv from 'dotenv'
dotenv.config()
export const bot = new Bot(process.env['BOT_TOKEN']!)


bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

bot.use(composer)
bot.use(createConversation(fullName))
console.log("Bot is running");
bot.start()