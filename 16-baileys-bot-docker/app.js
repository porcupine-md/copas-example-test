import express from 'express';
import qrcode from 'qrcode-terminal';
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';

const api = express();
api.get('/health', (_, res) => res.json({ status: 'ok' }));
api.listen(process.env.PORT || 3001, '0.0.0.0');

async function connect() {
  const { state, saveCreds } = await useMultiFileAuthState('/app/auth');
  const sock = makeWASocket({ auth: state, printQRInTerminal: false, markOnlineOnConnect: false });
  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) qrcode.generate(qr, { small: true });
    if (connection === 'open') console.log('WhatsApp connected');
    if (connection === 'close') {
      const code = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (code !== DisconnectReason.loggedOut) setTimeout(connect, 3000);
      else console.log('Logged out: remove auth volume to link again.');
    }
  });
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    for (const msg of messages) {
      const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text;
      if (text?.trim().toLowerCase() === 'ping' && msg.key.remoteJid) await sock.sendMessage(msg.key.remoteJid, { text: 'pong' });
    }
  });
}
connect();
