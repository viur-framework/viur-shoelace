import {
  l as l2
} from "./chunk.YQKH74HU.js";
import {
  hasSlot
} from "./chunk.IBDZI3K2.js";
import {
  l
} from "./chunk.OU2AKS77.js";
import {
  focusVisibleSelector
} from "./chunk.VE6SWBW2.js";
import {
  isArray,
  isObject
} from "./chunk.UYG3ZEVK.js";
import {
  o
} from "./chunk.ODPXQ3L3.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.53VVVNUW.js";
import {
  component_styles_default
} from "./chunk.P6HXIBIO.js";
import {
  e,
  i,
  n as n2,
  t
} from "./chunk.OPP7P5NL.js";
import {
  n,
  r,
  y
} from "./chunk.HHQFDLZX.js";
import {
  __decorateClass
} from "./chunk.QRXTBWFL.js";

// src/components/checkbox/checkbox.styles.ts
var checkbox_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    --sl-checkbox-bg-color: var(--sl-color-primary-500);
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: rgb(var(--sl-input-color));
    vertical-align: middle;
    cursor: pointer;
  }
  /** type primary,neutral, success,danger,warning,dark  */

  :host([type='primary']) {
    --sl-checkbox-bg-color: var(--sl-color-primary-500);
  }
  :host([type='success']) {
    --sl-checkbox-bg-color: var(--sl-color-success-500);
  }
  :host([type='danger']) {
    --sl-checkbox-bg-color: var(--sl-color-danger-500);
  }
  :host([type='warning']) {
    --sl-checkbox-bg-color: var(--sl-color-warning-500);
  }
  :host([type='neutral']) {
    --sl-checkbox-bg-color: var(--sl-color-neutral-500);
  }
  sl-ripple {
    padding: 3px;
  }
  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    border-radius: 2px;
    background-color: rgb(var(--sl-input-background-color));
    color: rgb(var(--sl-color-neutral-0));
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-input-border-color-hover));
    background-color: rgb(var(--sl-input-background-color-hover));
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control {
    border-color: rgb(var(--sl-input-border-color-focus));
    background-color: rgb(var(--sl-input-background-color-focus));
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: rgb(var(--sl-checkbox-bg-color));
    background-color: rgb(var(--sl-checkbox-bg-color));
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-checkbox-bg-color));
    background-color: rgb(var(--sl-checkbox-bg-color));
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control {
    border-color: rgb(var(--sl-checkbox-bg-color));
    background-color: rgb(var(--sl-checkbox-bg-color));
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--sl-toggle-size);
    user-select: none;
  }
  .checkbox_label_hasSlot {
    margin-left: calc(0.4em - 3px);
  }
`;

// src/components/checkbox/checkbox.ts
var id = 0;
var SlCheckbox = class extends n {
  constructor() {
    super(...arguments);
    this.inputId = `checkbox-${++id}`;
    this.labelId = `checkbox-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
    this.invalid = false;
    this.type = "primary";
    this.hasLabelSlot = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    const beforeCheck = emit(this, "sl-before-change", {
      cancelable: true
    });
    if (!beforeCheck.defaultPrevented) {
      this.checked = !this.checked;
      this.indeterminate = false;
      this.ripple.showRipple();
      emit(this, "sl-change");
    }
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "sl-blur");
  }
  handleDisabledChange() {
    if (this.input) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "sl-focus");
  }
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }
  labelSlotChange() {
    this.hasLabelSlot = hasSlot(this);
  }
  render() {
    return y`
      <label
        part="base"
        class=${o({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
        for=${this.inputId}
      >
        <input
          id=${this.inputId}
          class="checkbox__input"
          type="checkbox"
          name=${l(this.name)}
          value=${isObject(this.value) || isArray(this.value) ? "" : l(this.value)}
          .indeterminate=${l2(this.indeterminate)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="checkbox"
          aria-checked=${this.checked ? "true" : "false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <sl-ripple unbounded centered id=${this.inputId + "_ripple"} .disabled=${this.disabled}>
          <span part="control" class="checkbox__control">
            ${this.checked ? y`
                  <span part="checked-icon" class="checkbox__icon">
                    <svg viewBox="0 0 16 16">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g stroke="currentColor" stroke-width="2">
                          <g transform="translate(3.428571, 3.428571)">
                            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                ` : ""}
            ${!this.checked && this.indeterminate ? y`
                  <span part="indeterminate-icon" class="checkbox__icon">
                    <svg viewBox="0 0 16 16">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g stroke="currentColor" stroke-width="2">
                          <g transform="translate(2.285714, 6.857143)">
                            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                ` : ""}
          </span>
        </sl-ripple>
        <span part="label" id=${this.labelId} class="checkbox__label ${this.hasLabelSlot ? "checkbox_label_hasSlot" : ""}">
          <slot @slotchange=${this.labelSlotChange}></slot>
        </span>
      </label>
    `;
  }
};
SlCheckbox.styles = checkbox_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorateClass([
  i("sl-ripple")
], SlCheckbox.prototype, "ripple", 2);
__decorateClass([
  t()
], SlCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlCheckbox.prototype, "name", 2);
__decorateClass([
  e()
], SlCheckbox.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "invalid", 2);
__decorateClass([
  e({ type: String, reflect: true })
], SlCheckbox.prototype, "type", 2);
__decorateClass([
  watch("disabled")
], SlCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);
__decorateClass([
  t()
], SlCheckbox.prototype, "hasLabelSlot", 2);
SlCheckbox = __decorateClass([
  n2("sl-checkbox")
], SlCheckbox);
var checkbox_default = SlCheckbox;

export {
  checkbox_default
};
