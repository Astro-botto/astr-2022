import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*๐ฎ๐ฆ๐๐ฝ๐ฝ๐ผ๐ฟ๐ ๐๐ฟ๐ผ๐๐ฝ๐*\n\n
*ใโข|โชโอแฏอโอโอแฝอ โอแพอUอโอโฉ|โข: mainใ*:https://chat.whatsapp.com/https://chat.whatsapp.com/ErBf3cKDMSpIMq8OoxA5LJ  `,
           MessageType.text
        ))
        const n = [
            './assets/images/carter.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM๐ช\n` }
        )

        }
}
