import {createSocket} from 'dgram';
import * as osc from 'osc-min';
import {OscPacketInput} from 'osc-min';
import streamDeck from "@elgato/streamdeck";

type OSCConfig = {
    host: string;
    port: number;
}

export class OSCController {
    private config: OSCConfig;

    constructor(config: OSCConfig) {
        this.config = config;
    }

    async sendCommand(command: OscPacketInput): Promise<void> {
        const socket = createSocket('udp4');
        try {
            await new Promise<void>((resolve, reject) => {
                const message = osc.toBuffer(command);
                socket.send(new Uint8Array(message.buffer), this.config.port, this.config.host, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
        } catch (error) {
            streamDeck.logger.error(`[OSCController] Cannot send command to ${this.config.host}:${this.config.port}`);
            streamDeck.logger.error(`[OSCController] Command = ${JSON.stringify(command, null, 2)}`);
            streamDeck.logger.error(error);
        } finally {
            socket.close()
        }
    }
}