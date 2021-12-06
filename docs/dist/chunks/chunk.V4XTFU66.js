import {
  l as l2
} from "./chunk.JZAHJGTX.js";
import {
  hasSlot
} from "./chunk.IBDZI3K2.js";
import {
  focusVisibleSelector
} from "./chunk.64HFONKF.js";
import {
  l
} from "./chunk.JCGRKHRH.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.53VVVNUW.js";
import {
  o
} from "./chunk.IIBMGW45.js";
import {
  component_styles_default
} from "./chunk.34CCKGOJ.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.OPP7P5NL.js";
import {
  p,
  r,
  s
} from "./chunk.5BL2X74K.js";
import {
  __decorateClass
} from "./chunk.QRXTBWFL.js";

// src/components/radio/radio.styles.ts
var radio_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: var(--sl-input-border-color-focus);
    background-color: var(--sl-input-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    line-height: var(--sl-toggle-size);
    user-select: none;
  }
  .radio_label_has {
    margin-left: 0.5em;
  }
`;

// src/components/radio/radio.ts
var id = 0;
var SlRadio = class extends s {
  constructor() {
    super(...arguments);
    this.inputId = `radio-${++id}`;
    this.labelId = `radio-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
    this.hasSlotLabel = false;
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
  getAllRadios() {
    const radioGroup = this.closest("sl-radio-group");
    if (!radioGroup) {
      return [this];
    }
    return [...radioGroup.querySelectorAll("sl-radio")].filter((radio) => radio.name === this.name);
  }
  getSiblingRadios() {
    return this.getAllRadios().filter((radio) => radio !== this);
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "sl-blur");
  }
  handleCheckedChange() {
    if (this.checked) {
      this.getSiblingRadios().map((radio) => radio.checked = false);
    }
  }
  handleClick() {
    this.checked = true;
    emit(this, "sl-change");
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
  handleKeyDown(event) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this) + incr;
      if (index < 0)
        index = radios.length - 1;
      if (index > radios.length - 1)
        index = 0;
      this.getAllRadios().map((radio) => radio.checked = false);
      radios[index].focus();
      radios[index].checked = true;
      emit(radios[index], "sl-change");
      event.preventDefault();
    }
  }
  slotChangeHandler() {
    this.hasSlotLabel = hasSlot(this);
  }
  render() {
    return p`
      <label
        part="base"
        class=${o({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
        for=${this.inputId}
        @keydown=${this.handleKeyDown}
      >
        <input
          id=${this.inputId}
          class="radio__input"
          type="radio"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked ? "true" : "false"}
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" id=${this.labelId} class="radio__label ${this.hasSlotLabel ? " radio_label_has" : ""}">
          <slot @slotchange=${this.slotChangeHandler}></slot>
        </span>
      </label>
    `;
  }
};
SlRadio.styles = radio_styles_default;
__decorateClass([
  i('input[type="radio"]')
], SlRadio.prototype, "input", 2);
__decorateClass([
  t()
], SlRadio.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlRadio.prototype, "name", 2);
__decorateClass([
  e()
], SlRadio.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "invalid", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], SlRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlRadio.prototype, "handleDisabledChange", 1);
__decorateClass([
  t()
], SlRadio.prototype, "hasSlotLabel", 2);
SlRadio = __decorateClass([
  n("sl-radio")
], SlRadio);
var radio_default = SlRadio;

export {
  radio_default
};
