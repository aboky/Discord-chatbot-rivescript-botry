# botry
A simple and smart chatbot for discord with rivescript brains

## How to install ?
Clone the project and create a .env file at the root of your project and add your discord token to the .env file with the following line : `TOKEN_DISCORD=YOUR_TOKEN`. You bot require brains (.rive files), you can found some .rive files [here](https://www.rivescript.com/try), then you move them inside the brain directory.
After you have to run **npm update** to download required modules. Then you can launch the bot, run **node bot.js**. Your can see the result on your server.

## How to interact ?
In your discord server you have to prefix your question with !bot by default. For ex: hello => !bot hello, else it will ignore you. If you want to **replace this prefix**, just add the following line to the .env file : `PREFIX=YOUR PREFIX`.

## Why ?
Botry is made for any discord informative bot builder who want to spend more time on making the bot smart an testing quickly.
