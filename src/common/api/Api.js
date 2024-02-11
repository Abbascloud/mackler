import { BOT_CONFIGS } from "./configs/botConfigs";

class Api {
  //@text MD разметка для вывода в тг группе
  //@errorHandler (err)=>void метод обработки ошибки
  makeTgUrl(token, method) {
    return `https://api.telegram.org/bot${token}/${method}`;
  }
  async sendMessage(text, errorHandler) {
    try {
      await fetch(this.makeTgUrl(BOT_CONFIGS.token, "sendMessage"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: BOT_CONFIGS.chat_id,
          text: text,
        }),
      });
    } catch (error) {
      errorHandler(error);
    }
  }
}

export const api = new Api();
