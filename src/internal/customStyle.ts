//
// Runs this ,give webcompoent set style into shadmroot.
//
// Usage:
//
//  @customStyle()
//  WebCoponentClass extends LitElement {
//    ...
//  }
//

import { LitElement, ReactiveElement } from 'lit';
export function customStyle() {
  const key = 'customStyle';
  const keyCustomStyle = Symbol('keyCustomStyle');
  const keyName = Symbol('customStyle');
  return (protoOrDescriptor: typeof ReactiveElement) => {
    Object.defineProperty(protoOrDescriptor.prototype, key, {
      configurable: true,
      enumerable: true,
      set(value) {
        const element: LitElement = this;
        if (this[keyName] != value) {
          this[keyName] = value;
          element.updateComplete.then(() => {
            if ((element as any)[keyCustomStyle] == undefined) {
              const style = document.createElement('style');
              style.setAttribute('name', 'customStyle');
              (element as any)[keyCustomStyle] = style;
              element.renderRoot.appendChild(style);
            }
            if (value !== (element as any)[keyCustomStyle].textContent) {
              (element as any)[keyCustomStyle].textContent = value;
            }
            element.requestUpdate();
          });
        }
      },
      get() {
        return this[keyName];
      }
    });
  };
}
