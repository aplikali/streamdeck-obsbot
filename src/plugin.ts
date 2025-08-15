import streamDeck, {LogLevel} from "@elgato/streamdeck";

import {PresetAction} from "./actions/preset-action";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the preset action.
streamDeck.actions.registerAction(new PresetAction());

// Finally, connect to the Stream Deck.
streamDeck.connect();
