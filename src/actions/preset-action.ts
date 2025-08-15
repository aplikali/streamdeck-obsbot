import {action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";

/**
 * Settings for {@link PresetAction}.
 */
type PresetSettings = {
    value?: number;
};

@action({ UUID: "com.aplikali.obsbot.preset" })
export class PresetAction extends SingletonAction<PresetSettings> {

    override onWillAppear(event: WillAppearEvent<PresetSettings>): void | Promise<void> {
		return event.action.setTitle(`${event.payload.settings.value ?? 1}`);
	}

    override onDidReceiveSettings?(event: DidReceiveSettingsEvent<PresetSettings>): Promise<void> | void {
        return event.action.setTitle(`${event.payload.settings.value ?? 1}`);
    }

	override async onKeyDown(event: KeyDownEvent<PresetSettings>): Promise<void> {
		// todo: call preset OSC function
	}
}
