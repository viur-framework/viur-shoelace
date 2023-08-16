import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/checkbox/checkbox.component.js';

import { type EventName } from '@lit-labs/react';
import type { SlBlurEvent } from '../../../src/events/events';
import type { SlChangeEvent } from '../../../src/events/events';
import type { SlFocusEvent } from '../../../src/events/events';
import type { SlInputEvent } from '../../../src/events/events';
import type { SlInvalidEvent } from '../../../src/events/events';
export type { SlBlurEvent } from '../../../src/events/events';
export type { SlChangeEvent } from '../../../src/events/events';
export type { SlFocusEvent } from '../../../src/events/events';
export type { SlInputEvent } from '../../../src/events/events';
export type { SlInvalidEvent } from '../../../src/events/events';

const tagName = 'sl-checkbox';

const component = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlBlur: 'sl-blur' as EventName<SlBlurEvent>,
    onSlChange: 'sl-change' as EventName<SlChangeEvent>,
    onSlFocus: 'sl-focus' as EventName<SlFocusEvent>,
    onSlInput: 'sl-input' as EventName<SlInputEvent>,
    onSlInvalid: 'sl-invalid' as EventName<SlInvalidEvent>
  },
  displayName: 'SlCheckbox'
});

/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://shoelace.style/components/checkbox
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot - The checkbox's label.
 *
 * @event sl-blur - Emitted when the checkbox loses focus.
 * @event sl-change - Emitted when the checked state changes.
 * @event sl-focus - Emitted when the checkbox gains focus.
 * @event sl-input - Emitted when the checkbox receives input.
 * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<sl-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<sl-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 */
class SlComponent extends React.Component<Parameters<typeof component>[0]> {
  constructor(...args: Parameters<typeof component>) {
    super(...args);
    Component.define(tagName);
  }

  render() {
    const { children, ...props } = this.props;
    return React.createElement(component, props, children);
  }
}

export default SlComponent;
