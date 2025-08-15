import {OSCController} from "../osc";

type OBSBOTConfig = {
    host: string;
    port: number;
}

export class OBSBOTController {
    oscController: OSCController;

    constructor(config: OBSBOTConfig) {
        this.oscController = new OSCController(config);
    }

    async triggerPreset(preset: 0 | 1 | 2): Promise<void> {
        await this.oscController.sendCommand({
            address: '/OBSBOT/Camera/Tail2/TriggerPreset',
            args: [{type: 'integer', value: preset}]
        })
    }
}
