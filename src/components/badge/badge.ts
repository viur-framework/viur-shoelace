import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './badge.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @csspart base - The base wrapper
 */
@customElement('sl-badge')
export default class SlBadge extends LitElement {
  static styles = styles;

  /** The badge's variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'info' | 'secondary' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          badge: true,
          'badge--primary': this.variant === 'primary',
          'badge--success': this.variant === 'success',
          'badge--neutral': this.variant === 'neutral',
          'badge--warning': this.variant === 'warning',
          'badge--danger': this.variant === 'danger',
          'badge--info': this.variant === 'info',
          'badge--secondary': this.variant === 'secondary',
          'badge--pill': this.pill,
          'badge--pulse': this.pulse
        })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-badge': SlBadge;
  }
}
