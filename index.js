const { log } = require('console');
const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters');
const help_c = require('./help')
const data = require('./data_info')
const data_button = require('./button')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TELEGRAM);
bot.start((ctx) => ctx.reply(`Вітаємо в боті УДШ. ${ctx.message.from.first_name}, для ознайомлення оберіть: /help`));
bot.help((ctx) => ctx.reply(help_c.commands));
//!Робота з кнопками
function button_work(name,text,button,img){
  bot.command(name, async (ctx) => {
    try {
      if(img){
        await ctx.replyWithPhoto({ source: img })
        await  ctx.replyWithHTML(text ,Markup.inlineKeyboard(button))
      }else{
        await  ctx.replyWithHTML(text ,Markup.inlineKeyboard(button))
      }
      
    } catch (e) {
      console.error(e);
    }
  })
}
button_work('support',data_button.support_text,data_button.support_button,'./img/support.png');
button_work('class',data_button.class_text,data_button.class_button);
button_work('site',data_button.site_text,data_button.site_button, './img/170140.jpg');
//!Робота з текстом
function comand_text(name, text,) {
  bot.command(name, async (ctx) => {
    try {
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true
      })
    } catch (e) {
      console.error(e);
    }
  })
}
comand_text('delete', data.delete_info);
comand_text('extern',data.extern_info);
comand_text('structure', data.structure_info);
comand_text('cert', data.cert_info);
comand_text('doc', data.doc_info);
comand_text('teacher',data.teacher_info);
comand_text('cost',data.cost_info);
comand_text('pay',data.pay_info);
bot.launch();
// Enable graceful stop process.env.BOT_TOKEN
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

