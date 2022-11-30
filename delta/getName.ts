import {Bot, Composer, Context, InlineKeyboard} from 'grammy'
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";
import bot from '../mod.ts'

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

export async function getName(conversation, ctx) {
    await ctx.reply("Ismingiz nima?");
    const { message } = await conversation.wait();
    await ctx.reply(`Salom, ${message.text}!`);
}