const { Telegraf, Markup } = require('telegraf')
const support_text = `
Отримати консультацію по одному з питань:
`;
const support_button = [[
  Markup.button.url('Технічна підтримка', 'https://t.me/chaikivskyi'),
  Markup.button.url('Менеджер', 'https://t.me/sent_Irene'),
]];

const site_text = `
Бажаєте відправитися до нас на платформу?
`;
const site_button = [[
       Markup.button.url('Навчальна платформа', 'https://lms.udsh.info/my/'),
       Markup.button.url('Батьківський чат', 'https://t.me/+32pvsbQFC140Yjcy'),
     ],[
      Markup.button.url('Сайт закладу', 'https://udsh.info'),
      Markup.button.url('Ютуб школи', 'https://youtube.com/@user-ru9wt7nk3u'),
      Markup.button.url('Інстаграм школи', 'https://www.instagram.com/udshschool'),
     ]];
const class_text = `
Для перегляду розкладу оберіть потрібний<b> клас:</b>
`;
const class_button = [[
  Markup.button.url('1 клас', 'https://docs.google.com/spreadsheets/d/18lFR8kVu7-c4dlPRnWLmkc5DzhoGB9DZzkqDPVoeTHE/edit?usp=sharing'),
  Markup.button.url('2 клас', 'https://docs.google.com/spreadsheets/d/1rjGpVrl0KrzwTSS08p4M3HMFz_GGPJqGPognXSh8-VM/edit?usp=sharing'),
  Markup.button.url('3 клас', 'https://docs.google.com/spreadsheets/d/1OaMgX-EhE34YwXzdymxKiT5eH2VxCvoXPkwnUOLDyeo/edit?usp=sharing')
], [
  Markup.button.url('4 клас', 'https://docs.google.com/spreadsheets/d/1jJjT06_Ov-QrHdrYB-TM6xce4s_HO5nUKXwfC1uuC5g/edit?usp=sharing'),
  Markup.button.url('5 клас', 'https://docs.google.com/spreadsheets/d/1YYYeodujce6PX03p91TGrgZiVm0Cluft8UJzFHvK6-g/edit?usp=sharing'),
  Markup.button.url('6 клас', 'https://docs.google.com/spreadsheets/d/10mQlyv1PgiqDEd2wg_zFvX37FBOL8mUky0aajcHMS8U/edit?usp=sharing')
], [
  Markup.button.url('7 клас', 'https://docs.google.com/spreadsheets/d/1XZjdx1HPbBm0XqjsapyNKsUxxwJA8GmSL4QOSt42ios/edit?usp=sharing'),
  Markup.button.url('8 клас', 'https://docs.google.com/spreadsheets/d/1-khHi1CdgauOokOlOCWQ_M4vR7ilIVJJo3xmvGyZ_d8/edit?usp=sharing'),
  Markup.button.url('9 клас', 'https://docs.google.com/spreadsheets/d/1LMB-dYNj1SKjSnHxaSUb5BUE3uPyCpJfpQrynvM27dg/edit?usp=sharing')
],
[
  Markup.button.url('10 клас', 'https://docs.google.com/spreadsheets/d/1Aq6dVABw5nm_t62npu4BmYCeH1ZD1UqpueBZ-Yqp55w/edit?usp=sharing'),
  Markup.button.url('11 клас', 'https://docs.google.com/spreadsheets/d/13QOtpCv0Wa_D2F2kRihHsPdMiNRkhEMT9GMEvnYqFuM/edit?usp=sharing')
]];


module.exports.support_text = support_text;
module.exports.support_button = support_button;
module.exports.site_text = site_text;
module.exports.site_button = site_button;
module.exports.class_text = class_text;
module.exports.class_button = class_button;
