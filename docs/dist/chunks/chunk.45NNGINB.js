import {
  o
} from "./chunk.IIBMGW45.js";
import {
  component_styles_default
} from "./chunk.34CCKGOJ.js";
import {
  e,
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

// src/components/avatar/avatar.styles.ts
var avatar_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    overflow: hidden;
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// src/components/avatar/avatar.ts
var SlAvatar = class extends s {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.shape = "circle";
  }
  render() {
    return p`
      <div
        part="base"
        class=${o({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.alt}
      >
        ${this.initials ? p` <div part="initials" class="avatar__initials">${this.initials}</div> ` : p`
              <div part="icon" class="avatar__icon" aria-hidden="true">
                <slot name="icon">
                  <sl-icon name="person-fill" library="system"></sl-icon>
                </slot>
              </div>
            `}
        ${this.image && !this.hasError ? p` <img part="image" class="avatar__image" src="${this.image}" alt="" @error="${() => this.hasError = true}" /> ` : ""}
      </div>
    `;
  }
};
SlAvatar.styles = avatar_styles_default;
__decorateClass([
  t()
], SlAvatar.prototype, "hasError", 2);
__decorateClass([
  e()
], SlAvatar.prototype, "image", 2);
__decorateClass([
  e()
], SlAvatar.prototype, "alt", 2);
__decorateClass([
  e()
], SlAvatar.prototype, "initials", 2);
__decorateClass([
  e({ reflect: true })
], SlAvatar.prototype, "shape", 2);
SlAvatar = __decorateClass([
  n("sl-avatar")
], SlAvatar);
var avatar_default = SlAvatar;

export {
  avatar_default
};
