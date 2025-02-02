import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/card/card.component.js';

import { type EventName } from '@lit/react';
import type { SlChangeEvent } from '../../events/events.js';
export type { SlChangeEvent } from '../../events/events.js';

const tagName = 'sl-card';
Component.define('sl-card');

/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://shoelace.style/components/card
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @event sl-change - Emitted when the control's checked state changes.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --padding - The padding to use for the card's sections.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlChange: 'sl-change' as EventName<SlChangeEvent>
  },
  displayName: 'SlCard'
});

export default reactWrapper;
