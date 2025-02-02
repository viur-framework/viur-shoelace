import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/progress-ring/progress-ring.component.js';

const tagName = 'sl-progress-ring';
Component.define('sl-progress-ring');

/**
 * @summary Progress rings are used to show the progress of a determinate operation in a circular fashion.
 * @documentation https://shoelace.style/components/progress-ring
 * @status stable
 * @since 2.0
 *
 * @slot - A label to show inside the ring.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The progress ring label.
 *
 * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-width - The width of the indicator. Defaults to the track width.
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --indicator-transition-duration - The duration of the indicator's transition when the value changes.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'SlProgressRing'
});

export default reactWrapper;
