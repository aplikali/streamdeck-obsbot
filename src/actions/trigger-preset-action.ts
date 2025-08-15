import {action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";
import {OBSBOTController} from "../obsbot";

/**
 * Settings for {@link TriggerPresetAction}.
 */
type TriggerPresetSettings = {
    value?: 0 | 1 | 2;
}

@action({UUID: "com.aplikali.obsbot.trigger-preset"})
export class TriggerPresetAction extends SingletonAction<TriggerPresetSettings> {

    override onWillAppear(event: WillAppearEvent<TriggerPresetSettings>): void | Promise<void> {
        return event.action.setTitle(`${+(event.payload.settings.value ?? 0) + 1}`);
    }

    override onDidReceiveSettings?(event: DidReceiveSettingsEvent<TriggerPresetSettings>): Promise<void> | void {
        return event.action.setTitle(`${+(event.payload.settings.value ?? 0) + 1}`);
    }

    override async onKeyDown(event: KeyDownEvent<TriggerPresetSettings>): Promise<void> {
        const controller = new OBSBOTController({
            host: '192.168.1.12',
            port: 57110
        })
        await controller.triggerPreset(event.payload.settings.value ?? 0);
    }
}
