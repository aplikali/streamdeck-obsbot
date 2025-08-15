import streamDeck, {LogLevel} from "@elgato/streamdeck";

import {TriggerPresetAction} from "./actions/trigger-preset-action";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the preset action.
streamDeck.actions.registerAction(new TriggerPresetAction());

// Finally, connect to the Stream Deck.
streamDeck.connect();
