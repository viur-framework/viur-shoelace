import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.53VVVNUW.js";
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

// src/components/animated-image/animated-image.styles.ts
var animated_image_styles_default = r`
  ${component_styles_default}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);
    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
    transform: scale(1);
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }
`;

// src/components/animated-image/animated-image.ts
var SlAnimatedImage = class extends s {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      emit(this, "sl-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    emit(this, "sl-error");
  }
  async handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return p`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? p`
              <img class="animated-image__frozen" src=${this.frozenFrame} alt=${this.alt} aria-hidden=${this.play ? "true" : "false"} @click=${this.handleClick} />

              <div part="control-box" class="animated-image__control-box">
                ${this.play ? p`<sl-icon part="pause-icon" name="pause-fill" library="system"></sl-icon>` : p`<sl-icon part="play-icon" name="play-fill" library="system"></sl-icon>`}
              </div>
            ` : ""}
      </div>
    `;
  }
};
SlAnimatedImage.styles = animated_image_styles_default;
__decorateClass([
  t()
], SlAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  t()
], SlAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  i(".animated-image__animated")
], SlAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  e()
], SlAnimatedImage.prototype, "src", 2);
__decorateClass([
  e()
], SlAnimatedImage.prototype, "alt", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play")
], SlAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], SlAnimatedImage.prototype, "handleSrcChange", 1);
SlAnimatedImage = __decorateClass([
  n("sl-animated-image")
], SlAnimatedImage);
var animated_image_default = SlAnimatedImage;

export {
  animated_image_default
};
