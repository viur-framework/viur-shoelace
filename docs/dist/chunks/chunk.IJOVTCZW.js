import {
  clamp
} from "./chunk.T56CG5BM.js";
import {
  i as i2
} from "./chunk.75OJMBEA.js";
import {
  focusVisibleSelector
} from "./chunk.VE6SWBW2.js";
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
  n as n2
} from "./chunk.OPP7P5NL.js";
import {
  n,
  r,
  y
} from "./chunk.HHQFDLZX.js";
import {
  __decorateClass
} from "./chunk.QRXTBWFL.js";

// src/components/image-comparer/image-comparer.styles.ts
var image_comparer_styles_default = r`
  ${component_styles_default}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    pointer-events: none;
  }

  .image-comparer__before ::slotted(img),
  .image-comparer__after ::slotted(img),
  .image-comparer__before ::slotted(svg),
  .image-comparer__after ::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: rgb(var(--sl-color-neutral-0));
    transform: translateX(calc(var(--divider-width) / -2));
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: rgb(var(--sl-color-neutral-0));
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: rgb(var(--sl-color-neutral-500));
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle${focusVisibleSelector} {
    outline: none;
    box-shadow: var(--sl-focus-ring);
  }
`;

// src/components/image-comparer/image-comparer.ts
var SlImageComparer = class extends n {
  constructor() {
    super(...arguments);
    this.position = 50;
  }
  handleDrag(event) {
    const { width } = this.base.getBoundingClientRect();
    function drag(event2, container, onMove) {
      const move = (event3) => {
        const dims = container.getBoundingClientRect();
        const defaultView = container.ownerDocument.defaultView;
        const offsetX = dims.left + defaultView.pageXOffset;
        const offsetY = dims.top + defaultView.pageYOffset;
        const x = (event3.changedTouches ? event3.changedTouches[0].pageX : event3.pageX) - offsetX;
        const y2 = (event3.changedTouches ? event3.changedTouches[0].pageY : event3.pageY) - offsetY;
        onMove(x, y2);
      };
      move(event2);
      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("mouseup", stop);
        document.removeEventListener("touchend", stop);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", move);
      document.addEventListener("mouseup", stop);
      document.addEventListener("touchend", stop);
    }
    event.preventDefault();
    drag(event, this.base, (x) => {
      this.position = Number(clamp(x / width * 100, 0, 100).toFixed(2));
    });
  }
  handleKeyDown(event) {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;
      event.preventDefault();
      if (event.key === "ArrowLeft")
        newPosition = newPosition - incr;
      if (event.key === "ArrowRight")
        newPosition = newPosition + incr;
      if (event.key === "Home")
        newPosition = 0;
      if (event.key === "End")
        newPosition = 100;
      newPosition = clamp(newPosition, 0, 100);
      this.position = newPosition;
    }
  }
  handlePositionChange() {
    emit(this, "sl-change");
  }
  render() {
    return y`
      <div part="base" class="image-comparer" @keydown=${this.handleKeyDown}>
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div part="after" class="image-comparer__after" style=${i2({ clipPath: `inset(0 ${100 - this.position}% 0 0)` })}>
            <slot name="after"></slot>
          </div>
        </div>

        <div part="divider" class="image-comparer__divider" style=${i2({ left: this.position + "%" })} @mousedown=${this.handleDrag} @touchstart=${this.handleDrag}>
          <div part="handle" class="image-comparer__handle" role="scrollbar" aria-valuenow=${this.position} aria-valuemin="0" aria-valuemax="100" tabindex="0">
            <slot name="handle-icon">
              <sl-icon class="image-comparer__handle-icon" name="grip-vertical" library="system"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
};
SlImageComparer.styles = image_comparer_styles_default;
__decorateClass([
  i(".image-comparer")
], SlImageComparer.prototype, "base", 2);
__decorateClass([
  i(".image-comparer__handle")
], SlImageComparer.prototype, "handle", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], SlImageComparer.prototype, "position", 2);
__decorateClass([
  watch("position", { waitUntilFirstUpdate: true })
], SlImageComparer.prototype, "handlePositionChange", 1);
SlImageComparer = __decorateClass([
  n2("sl-image-comparer")
], SlImageComparer);
var image_comparer_default = SlImageComparer;

export {
  image_comparer_default
};
