import {
  e,
  n as n2
} from "./chunk.OPP7P5NL.js";
import {
  n
} from "./chunk.HHQFDLZX.js";
import {
  __decorateClass
} from "./chunk.QRXTBWFL.js";

// src/components/format-number/format-number.ts
var SlFormatNumber = class extends n {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return new Intl.NumberFormat(this.locale, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    }).format(this.value);
  }
};
__decorateClass([
  e({ type: Number })
], SlFormatNumber.prototype, "value", 2);
__decorateClass([
  e()
], SlFormatNumber.prototype, "locale", 2);
__decorateClass([
  e()
], SlFormatNumber.prototype, "type", 2);
__decorateClass([
  e({ attribute: "no-grouping", type: Boolean })
], SlFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  e()
], SlFormatNumber.prototype, "currency", 2);
__decorateClass([
  e({ attribute: "currency-display" })
], SlFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  e({ attribute: "minimum-integer-digits", type: Number })
], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  e({ attribute: "minimum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  e({ attribute: "maximum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  e({ attribute: "minimum-significant-digits", type: Number })
], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  e({ attribute: "maximum-significant-digits", type: Number })
], SlFormatNumber.prototype, "maximumSignificantDigits", 2);
SlFormatNumber = __decorateClass([
  n2("sl-format-number")
], SlFormatNumber);
var format_number_default = SlFormatNumber;

export {
  format_number_default
};
