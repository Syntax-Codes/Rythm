const {
  MessageEmbed
} = require(`discord.js`)
const config = require(`../../botconfig/config.json`)
const ee = require(`../../botconfig/embed.json`);
const {
  createBar,
  format
} = require(`../../handlers/functions`);
module.exports = {
  name: `replay`,
  category: `Song`,
  aliases: [``],
  description: `Resets the progress of the current song.`,
  usage: `replay`,
  run: async (client, message, args, cmduser, text, prefix) => {
      //get the voice channel of the member
      const { channel } = message.member.voice;
      //if he is not connected to a vc return error
      if (!channel)  return message.channel.send(`:x: **You have to be in a voice channel to use this command.**`);
      //send error if member is Deafed
      if(message.member.voice.selfDeaf) return message.channel.send(`:x: **You cannot run this command while deafened**`);
      //get voice channel of the bot
      const botchannel = message.guild.me.voice.channel;
      //get the music player
      const player = client.manager.players.get(message.guild.id);
      //if no player or no botchannel return error
      if(!player || !botchannel) return message.channel.send(`**:x: Nothing playing in this server**`);
      //if queue size too small return error
      if (!player.queue || !player.queue.current) return message.channel.send(`**:x: Nothing playing in this server**`);
      //if user is not in the right channel as bot, then return error
      if(player && channel.id !== player.voiceChannel)
        return message.channel.send(`**:x: You need to be in the same voice channel as Syntax x Rythm to use this command**`);
      //seek to the new Seek position
      player.seek(0);
      //Send Success Message
      return message.channel.send(`**:musical_note: Song progress reset :track_previous:**`);
  }
};
/**
 * @INFO
 * Bot Coded by SyntaxError The Dev 💜#3044 
 * @INFO
 * Work for Syntax Codes | https://bit.ly/Web_Syntax
 * @INFO
 * Please mention Him / Syntax Codes, when using this Code!
 * @INFO
 */