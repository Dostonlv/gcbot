import {Bot, Composer, Context, InlineKeyboard} from 'grammy'
export const composer = new Composer()

composer.command("start",   (ctx) =>{
    const message: string =
        `<b>Assalomu alaykum, hurmatli @${ctx.from?.username}!</b> \n` +
        `\n` +
        `Sizni ko'rib turganimdan bag'oyatda xursandman. `+
        `\n` +
    `Bu bot X firmaga tegishli bo'lib sizga X firmasining xizmatlaridan foydalanish imkoniyatini beradi. `+
        `\n` ;
    ctx.reply(message, {
        parse_mode: "HTML",
    })});