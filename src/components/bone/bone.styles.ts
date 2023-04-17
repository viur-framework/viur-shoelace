import {css} from 'lit';
import componentStyles from '../../styles/component.styles';
//language=CSS
export default css`
  ${componentStyles}


  :host {
    --input-border-color: var(--sl-color-neutral-400);
    --label-background-color: var(--sl-color-neutral-100);
    --hover-color: rgba(0, 0, 0, .2);
  }

  :host {
    display: block;
  }

  .bone-wrapper{
    display: grid;
    grid-template-columns: 230px 1fr;
    margin-bottom: 20px;
  }

  .bone-wrapper sl-input,
  .bone-wrapper sl-select{
    flex: 1;
  }

  .bone-name{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding: 0.4em 0.7em;
    color: var(--sl-color-neutral-900);
    background-color: var(--label-background-color);
    border: 1px solid var(--label-background-color);
    border: none;
    border-top-left-radius: var(--sl-input-border-radius-medium);
    border-bottom-left-radius: var(--sl-input-border-radius-medium);
    gap: 10px;
  }

  sl-input[disabled]::part(base){
    opacity: .7;
    border-style: dashed;
  }

  sl-input::part(base),
  sl-select::part(control),
  sl-select::part(combobox){
    box-shadow: none !important;
    background-color: transparent;
    border: 1px solid var(--input-border-color);
    color: var(--sl-color-neutral-900);
  }

  sl-select::part(display-input){
    color: var(--sl-color-neutral-900);
  }

  sl-select::part(listbox){
    background-color: var(--sl-color-neutral-50);
    color: var(--sl-color-neutral-900);
  }

  sl-option::part(base){
    background-color: transparent;
    color: var(--sl-color-neutral-900);
  }

  sl-option:hover::part(base){
    background-color: var(--hover-color);
  }

  .bone-type-select sl-select::part(combobox) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  sl-input::part(input){
    color: var(--sl-color-neutral-900);
  }

  sl-input::part(input)::placeholder{
    color: var(--sl-color-neutral-900);
  }

  .bone-name + sl-input::part(base),
  .bone-name + sl-select::part(control),
  .bone-name + .tooltip-wrap > sl-input::part(base),
  .bone-name + .tooltip-wrap > sl-select::part(control){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .file-container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1;
  }

  .file-container sl-input{
    flex: 1;
  }
  .file-container sl-progress-bar{
    flex: 1;
  }

  .file-container sl-input::part(base){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .file-container sl-input::part(input){
    cursor: pointer;
  }

  .file-container .upload-button,
  .file-container .clear-button{
    margin-left: var(--sl-spacing-small);;
  }

  .bone-wrapper .upload-button::part(base),
  .bone-wrapper .clear-button::part(base),
  .bone-wrapper .undo-button::part(base){
    aspect-ratio: 1;
  }

  .bone-wrapper sl-switch{
    border: 1px solid var(--sl-color-neutral-300);
    padding: .4em .1em .4em .4em;
    border-top-right-radius: var(--sl-input-border-radius-medium);
    border-bottom-right-radius: var(--sl-input-border-radius-medium);

    --height: calc(var(--sl-input-height-medium) - 1em);
    --width: calc( 1.7 * (var(--sl-input-height-medium) - 0.8em) );
    --thumb-size: calc(var(--sl-input-height-medium) - 1.1em);
  }

  .bone-inner-wrap{
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .bone-inner-button-wrap{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
  }

  .bone-inner-button-wrap .clear-button,
  .bone-inner-button-wrap .undo-button{
    margin-right: var(--sl-spacing-small);
  }

  .bone-inner-button-wrap .add-button{
    margin-left: auto;
  }

  .bone-inner-button-wrap .add-button sl-icon{
    margin-right: var(--sl-spacing-small);
  }

  .bone-inner-button-wrap .multiple-placeholder{
    pointer-events: none;
    margin-right: var(--sl-spacing-small);
  }

  .bone-inner-button-wrap .multiple-placeholder::part(base){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid var(--input-border-color);
  }

  .bone-type-record .bone-inner-wrap{
    border-top: 1px solid var(--sl-color-neutral-200);
    padding-top: var(--sl-spacing-small);
    grid-column: span 2;
  }

  .bone-type-record > .bone-inner-wrap > .multiple-wrapper > .multi-input{
    border-bottom: 1px solid var(--sl-color-neutral-200);
  }

  .bone-type-record > .bone-name{
    border-bottom: none;
    border-top-right-radius: var(--sl-input-border-radius-medium);
    border-bottom-left-radius: 0;
  }

  .multi-input{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 10px;
  }

  .multi-input > div{
    flex: 1;
  }

  .multi-input sl-input{
    flex: 1;
  }

  .multi-input .clear-button{
    margin-left: var(--sl-spacing-small);
  }

  .multi-input .add-button::part(base){
    aspect-ratio: 1;
  }

  .drag-button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--sl-input-height-medium);
    width: var(--sl-input-height-medium);
    cursor: move;
    padding: var(--sl-spacing-small);
    flex: 0 0 var(--sl-input-height-medium) !important;
  }

  .is-dragged{
    position: absolute;
    z-index: 2;
    background-color: rgba(255, 255, 255, .5);
    box-shadow: 0 0 5px 0 var(--sl-color-neutral-200);
  }

  .fake-drag-element{
    border: dashed 2px var(--sl-color-primary-500);
  }

  .language-tab-group{
    flex: 1;
    height: 100%;
    border: none;
    --indicator-color: var(--sl-color-neutral-900);
    --track-color: transparent;
  }

  .language-tab-group::part(base){
    border: none;
    height: 100%;
  }

  .language-tab-group::part(body){
    overflow-x: hidden;
    padding: 0 0 10px 0;
  }

  .language-tab-group::part(nav){
    align-self: flex-start;
    margin-top: auto;
  }

  .language-tab-group sl-tab-panel::part(base){
    padding: 0;
    border: none;
  }

  .language-tab-group sl-tab::part(base){
    padding: calc(var(--sl-spacing-x-small) / 2) var(--sl-spacing-x-small) 0 var(--sl-spacing-x-small);
    color: var(--sl-color-neutral-900);
  }

  .language-tab-group sl-tab[aria-selected="false"]::part(base){
    opacity: .4;
  }

  .language-wrapper .multi-input sl-input:first-child::part(base),
  .language-wrapper .multi-input sl-select:first-child::part(control){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .error-container::part(base){
    grid-column: 2;
    margin-top: var(--sl-spacing-small);
    margin-bottom: var(--sl-spacing-small);
  }

  .error-container::part(message){
    padding: 8px var(--sl-spacing-small);
  }

  .error-container::part(icon){
    padding-left: 10px;
  }

  .error-msg{
    font-weight: bold;
  }

  .tooltip-bubble{
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--sl-input-height-medium) * .4);
    height: calc(var(--sl-input-height-medium) * .4);
    min-width: calc(var(--sl-input-height-medium) * .4);
    min-height: calc(var(--sl-input-height-medium) * .4);
    margin-left: auto;
  }

  .tooltip-bubble::part(base){
    width: 100%;
    height: 100%;
    background-color: var(--sl-color-info-500);
  }

  .tooltip-icon{
    width: 60%;
    height: 60%;
  }

  .tooltip{
    --sl-tooltip-background-color: var(--sl-color-info-500)
  }

  .tooltip::part(body){
    padding: var(--sl-spacing-small);
  }

  .relBone-wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .relBone-wrap[data-multiple="false"] sl-input::part(base){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .relBone-wrap .add-button{
    margin-left: var(--sl-spacing-small);
  }

  .color-bone::part(trigger){
    border-radius: 0;
    width: calc(2 * var(--sl-input-height-medium));
    border-top-right-radius: var(--sl-input-border-radius-medium);
    border-bottom-right-radius: var(--sl-input-border-radius-medium);
  }

  .color-bone::part(trigger):before{
    box-shadow: none;
    border-top: 1px solid var(--sl-color-neutral-200);
  }

  .spatial-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .lat-input::part(base){
    border-radius: 0 !important;
    border-right: none;
  }

  .lng-input::part(base){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 900px) {
    .bone-wrapper{
      grid-template-columns: 1fr;
      margin-bottom: var(--sl-spacing-large);
    }

    .multiple-wrapper{
      margin-top: 10px;
    }

    .bone-name{
      width: 100%;
      border-top-left-radius: var(--sl-input-border-radius-medium);
      border-top-right-radius: var(--sl-input-border-radius-medium);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .bone-name + sl-input::part(base),
    .bone-name + sl-select::part(control),
    .bone-name + .tooltip-wrap > sl-input::part(base),
    .bone-name + .tooltip-wrap > sl-select::part(control) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--sl-input-border-radius-medium);
    }

    .bone-wrapper sl-switch{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--sl-input-border-radius-medium);
    }

    .language-wrapper .multi-input sl-input:first-child::part(base),
    .language-wrapper .multi-input sl-select:first-child::part(control){
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .error-container::part(base){
      grid-column: 1;
    }

    .tooltip-bubble{
      position: absolute;
      top: calc(0px - var(--sl-input-height-medium));
      right: 0;
    }

    .bone-type-record .bone-inner-wrap{
      padding-top: 0;
    }

    .record-wrapper .bone-wrapper{
      margin-bottom: var(--sl-spacing-small);
    }

    .color-bone{
      display: contents;
    }

    .color-bone::part(trigger){
      width: 100%;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--sl-input-border-radius-medium);
      border-bottom-right-radius: var(--sl-input-border-radius-medium);
    }

    .tox-tinymce{
      border-top-right-radius: 0 !important;
    }

    .spatial-wrapper{
      flex-direction: column;
    }

    .lat-input::part(base){
      border-right: 1px solid var(--sl-color-neutral-200);
      border-bottom: none;
    }

    .lng-input::part(base){
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--sl-input-border-radius-medium);
    }
  }

  code{
    background-color:#e8e8e8;
    border-radius:3px;
    padding:.1rem .2rem
  }

  .mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}

  .mce-content-body .mce-item-anchor{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A") no-repeat center}.mce-content-body .mce-item-anchor:empty{cursor:default;display:inline-block;height:12px!important;padding:0 2px;-webkit-user-modify:read-only;-moz-user-modify:read-only;-webkit-user-select:all;-moz-user-select:all;user-select:all;width:8px!important}.mce-content-body .mce-item-anchor:not(:empty){background-position-x:2px;display:inline-block;padding-left:12px}.mce-content-body .mce-item-anchor[data-mce-selected]{outline-offset:1px}.tox-comments-visible .tox-comment[contenteditable=false]:not([data-mce-selected]),.tox-comments-visible span.tox-comment img:not([data-mce-selected]),.tox-comments-visible span.tox-comment span.mce-preview-object:not([data-mce-selected]),.tox-comments-visible span.tox-comment>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment>video:not([data-mce-selected]){outline:3px solid #ffe89d}.tox-comments-visible .tox-comment[contenteditable=false][data-mce-annotation-active=true]:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] img:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] span.mce-preview-object:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>video:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment:not([data-mce-selected]){background-color:#ffe89d;outline:0}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]:not([data-mce-selected=inline-boundary]){background-color:#fed635}.tox-checklist>li:not(.tox-checklist--hidden){list-style:none;margin:.25em 0}.tox-checklist>li:not(.tox-checklist--hidden)::before{content:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");cursor:pointer;height:1em;margin-left:-1.5em;margin-top:.125em;position:absolute;width:1em}.tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked::before{content:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A")}[dir=rtl] .tox-checklist>li:not(.tox-checklist--hidden)::before{margin-left:0;margin-right:-1.5em}code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.mce-content-body{overflow-wrap:break-word;word-wrap:break-word}.mce-content-body .mce-visual-caret{background-color:#000;background-color:currentColor;position:absolute}.mce-content-body .mce-visual-caret-hidden{display:none}.mce-content-body [data-mce-caret]{left:-1000px;margin:0;padding:0;position:absolute;right:auto;top:0}.mce-content-body .mce-offscreen-selection{left:-2000000px;max-width:1000000px;position:absolute}.mce-content-body [contentEditable=false]{cursor:default}.mce-content-body [contentEditable=true]{cursor:text}.tox-cursor-format-painter{cursor:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A"),default}div.mce-footnotes hr{margin-inline-end:auto;margin-inline-start:0;width:25%}div.mce-footnotes li>a.mce-footnotes-backlink{text-decoration:none}@media print{sup.mce-footnote a{color:#000;text-decoration:none}div.mce-footnotes{break-inside:avoid;width:100%}div.mce-footnotes li>a.mce-footnotes-backlink{display:none}}.mce-content-body figure.align-left{float:left}.mce-content-body figure.align-right{float:right}.mce-content-body figure.image.align-center{display:table;margin-left:auto;margin-right:auto}.mce-preview-object{border:1px solid gray;display:inline-block;line-height:0;margin:0 2px 0 2px;position:relative}.mce-preview-object .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.mce-preview-object[data-mce-selected="2"] .mce-shim{display:none}.mce-content-body .mce-mergetag:hover{background-color:rgba(0,108,231,.1)}.mce-content-body .mce-mergetag-affix{background-color:rgba(0,108,231,.1);color:#006ce7}.mce-object{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A") no-repeat center;border:1px dashed #aaa}.mce-pagebreak{border:1px dashed #aaa;cursor:default;display:block;height:5px;margin-top:15px;page-break-before:always;width:100%}@media print{.mce-pagebreak{border:0}}.tiny-pageembed .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.tiny-pageembed[data-mce-selected="2"] .mce-shim{display:none}.tiny-pageembed{display:inline-block;position:relative}.tiny-pageembed--16by9,.tiny-pageembed--1by1,.tiny-pageembed--21by9,.tiny-pageembed--4by3{display:block;overflow:hidden;padding:0;position:relative;width:100%}.tiny-pageembed--21by9{padding-top:42.857143%}.tiny-pageembed--16by9{padding-top:56.25%}.tiny-pageembed--4by3{padding-top:75%}.tiny-pageembed--1by1{padding-top:100%}.tiny-pageembed--16by9 iframe,.tiny-pageembed--1by1 iframe,.tiny-pageembed--21by9 iframe,.tiny-pageembed--4by3 iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.mce-content-body[data-mce-placeholder]{position:relative}.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before{color:rgba(34,47,62,.7);content:attr(data-mce-placeholder);position:absolute}.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks)::before{left:1px}.mce-content-body[dir=rtl][data-mce-placeholder]:not(.mce-visualblocks)::before{right:1px}.mce-content-body div.mce-resizehandle{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;height:10px;position:absolute;width:10px;z-index:1298}.mce-content-body div.mce-resizehandle:hover{background-color:#4099ff}.mce-content-body div.mce-resizehandle:nth-of-type(1){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(2){cursor:nesw-resize}.mce-content-body div.mce-resizehandle:nth-of-type(3){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(4){cursor:nesw-resize}.mce-content-body .mce-resize-backdrop{z-index:10000}.mce-content-body .mce-clonedresizable{cursor:default;opacity:.5;outline:1px dashed #000;position:absolute;z-index:10001}.mce-content-body .mce-clonedresizable.mce-resizetable-columns td,.mce-content-body .mce-clonedresizable.mce-resizetable-columns th{border:0}.mce-content-body .mce-resize-helper{background:#555;background:rgba(0,0,0,.75);border:1px;border-radius:3px;color:#fff;display:none;font-family:sans-serif;font-size:12px;line-height:14px;margin:5px 10px;padding:5px;position:absolute;white-space:nowrap;z-index:10002}.tox-rtc-user-selection{position:relative}.tox-rtc-user-cursor{bottom:0;cursor:default;position:absolute;top:0;width:2px}.tox-rtc-user-cursor::before{background-color:inherit;border-radius:50%;content:'';display:block;height:8px;position:absolute;right:-3px;top:-3px;width:8px}.tox-rtc-user-cursor:hover::after{background-color:inherit;border-radius:100px;box-sizing:border-box;color:#fff;content:attr(data-user);display:block;font-size:12px;font-weight:700;left:-5px;min-height:8px;min-width:8px;padding:0 12px;position:absolute;top:-11px;white-space:nowrap;z-index:1000}.tox-rtc-user-selection--1 .tox-rtc-user-cursor{background-color:#2dc26b}.tox-rtc-user-selection--2 .tox-rtc-user-cursor{background-color:#e03e2d}.tox-rtc-user-selection--3 .tox-rtc-user-cursor{background-color:#f1c40f}.tox-rtc-user-selection--4 .tox-rtc-user-cursor{background-color:#3598db}.tox-rtc-user-selection--5 .tox-rtc-user-cursor{background-color:#b96ad9}.tox-rtc-user-selection--6 .tox-rtc-user-cursor{background-color:#e67e23}.tox-rtc-user-selection--7 .tox-rtc-user-cursor{background-color:#aaa69d}.tox-rtc-user-selection--8 .tox-rtc-user-cursor{background-color:#f368e0}.tox-rtc-remote-image{background:#eaeaea url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A") no-repeat center center;border:1px solid #ccc;min-height:240px;min-width:320px}.mce-match-marker{background:#aaa;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-match-marker-selected::-moz-selection{background:#39f;color:#fff}.mce-match-marker-selected::selection{background:#39f;color:#fff}.mce-content-body audio[data-mce-selected],.mce-content-body embed[data-mce-selected],.mce-content-body img[data-mce-selected],.mce-content-body object[data-mce-selected],.mce-content-body table[data-mce-selected],.mce-content-body video[data-mce-selected]{outline:3px solid #b4d7ff}.mce-content-body hr[data-mce-selected]{outline:3px solid #b4d7ff;outline-offset:1px}.mce-content-body [contentEditable=false] [contentEditable=true]:focus{outline:3px solid #b4d7ff}.mce-content-body [contentEditable=false] [contentEditable=true]:hover{outline:3px solid #b4d7ff}.mce-content-body [contentEditable=false][data-mce-selected]{cursor:not-allowed;outline:3px solid #b4d7ff}.mce-content-body.mce-content-readonly [contentEditable=true]:focus,.mce-content-body.mce-content-readonly [contentEditable=true]:hover{outline:0}.mce-content-body [data-mce-selected=inline-boundary]{background-color:#b4d7ff}.mce-content-body .mce-edit-focus{outline:3px solid #b4d7ff}.mce-content-body td[data-mce-selected],.mce-content-body th[data-mce-selected]{position:relative}.mce-content-body td[data-mce-selected]::-moz-selection,.mce-content-body th[data-mce-selected]::-moz-selection{background:0 0}.mce-content-body td[data-mce-selected]::selection,.mce-content-body th[data-mce-selected]::selection{background:0 0}.mce-content-body td[data-mce-selected] *,.mce-content-body th[data-mce-selected] *{outline:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mce-content-body td[data-mce-selected]::after,.mce-content-body th[data-mce-selected]::after{background-color:rgba(180,215,255,.7);border:1px solid rgba(180,215,255,.7);bottom:-1px;content:'';left:-1px;mix-blend-mode:multiply;position:absolute;right:-1px;top:-1px}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.mce-content-body td[data-mce-selected]::after,.mce-content-body th[data-mce-selected]::after{border-color:rgba(0,84,180,.7)}}.mce-content-body img[data-mce-selected]::-moz-selection{background:0 0}.mce-content-body img[data-mce-selected]::selection{background:0 0}.ephox-snooker-resizer-bar{background-color:#b4d7ff;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ephox-snooker-resizer-cols{cursor:col-resize}.ephox-snooker-resizer-rows{cursor:row-resize}.ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging{opacity:1}.mce-spellchecker-word{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default;height:2rem}.mce-spellchecker-grammar{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default}.mce-toc{border:1px solid gray}.mce-toc h2{margin:4px}.mce-toc li{list-style-type:none}.mce-item-table:not([border]),.mce-item-table:not([border]) caption,.mce-item-table:not([border]) td,.mce-item-table:not([border]) th,.mce-item-table[border="0"],.mce-item-table[border="0"] caption,.mce-item-table[border="0"] td,.mce-item-table[border="0"] th,table[style*="border-width: 0px"],table[style*="border-width: 0px"] caption,table[style*="border-width: 0px"] td,table[style*="border-width: 0px"] th{border:1px dashed #bbb}.mce-visualblocks address,.mce-visualblocks article,.mce-visualblocks aside,.mce-visualblocks blockquote,.mce-visualblocks div:not([data-mce-bogus]),.mce-visualblocks dl,.mce-visualblocks figcaption,.mce-visualblocks figure,.mce-visualblocks h1,.mce-visualblocks h2,.mce-visualblocks h3,.mce-visualblocks h4,.mce-visualblocks h5,.mce-visualblocks h6,.mce-visualblocks hgroup,.mce-visualblocks ol,.mce-visualblocks p,.mce-visualblocks pre,.mce-visualblocks section,.mce-visualblocks ul{background-repeat:no-repeat;border:1px dashed #bbb;margin-left:3px;padding-top:10px}.mce-visualblocks p{background-image:url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7)}.mce-visualblocks h1{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==)}.mce-visualblocks h2{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==)}.mce-visualblocks h3{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7)}.mce-visualblocks h4{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==)}.mce-visualblocks h5{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==)}.mce-visualblocks h6{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==)}.mce-visualblocks div:not([data-mce-bogus]){background-image:url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7)}.mce-visualblocks section{background-image:url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=)}.mce-visualblocks article{background-image:url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7)}.mce-visualblocks blockquote{background-image:url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7)}.mce-visualblocks address{background-image:url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=)}.mce-visualblocks pre{background-image:url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==)}.mce-visualblocks figure{background-image:url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7)}.mce-visualblocks figcaption{border:1px dashed #bbb}.mce-visualblocks hgroup{background-image:url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7)}.mce-visualblocks aside{background-image:url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=)}.mce-visualblocks ul{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==)}.mce-visualblocks ol{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==)}.mce-visualblocks dl{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==)}.mce-visualblocks:not([dir=rtl]) address,.mce-visualblocks:not([dir=rtl]) article,.mce-visualblocks:not([dir=rtl]) aside,.mce-visualblocks:not([dir=rtl]) blockquote,.mce-visualblocks:not([dir=rtl]) div:not([data-mce-bogus]),.mce-visualblocks:not([dir=rtl]) dl,.mce-visualblocks:not([dir=rtl]) figcaption,.mce-visualblocks:not([dir=rtl]) figure,.mce-visualblocks:not([dir=rtl]) h1,.mce-visualblocks:not([dir=rtl]) h2,.mce-visualblocks:not([dir=rtl]) h3,.mce-visualblocks:not([dir=rtl]) h4,.mce-visualblocks:not([dir=rtl]) h5,.mce-visualblocks:not([dir=rtl]) h6,.mce-visualblocks:not([dir=rtl]) hgroup,.mce-visualblocks:not([dir=rtl]) ol,.mce-visualblocks:not([dir=rtl]) p,.mce-visualblocks:not([dir=rtl]) pre,.mce-visualblocks:not([dir=rtl]) section,.mce-visualblocks:not([dir=rtl]) ul{margin-left:3px}.mce-visualblocks[dir=rtl] address,.mce-visualblocks[dir=rtl] article,.mce-visualblocks[dir=rtl] aside,.mce-visualblocks[dir=rtl] blockquote,.mce-visualblocks[dir=rtl] div:not([data-mce-bogus]),.mce-visualblocks[dir=rtl] dl,.mce-visualblocks[dir=rtl] figcaption,.mce-visualblocks[dir=rtl] figure,.mce-visualblocks[dir=rtl] h1,.mce-visualblocks[dir=rtl] h2,.mce-visualblocks[dir=rtl] h3,.mce-visualblocks[dir=rtl] h4,.mce-visualblocks[dir=rtl] h5,.mce-visualblocks[dir=rtl] h6,.mce-visualblocks[dir=rtl] hgroup,.mce-visualblocks[dir=rtl] ol,.mce-visualblocks[dir=rtl] p,.mce-visualblocks[dir=rtl] pre,.mce-visualblocks[dir=rtl] section,.mce-visualblocks[dir=rtl] ul{background-position-x:right;margin-right:3px}.mce-nbsp,.mce-shy{background:#aaa}.mce-shy::after{content:'-'}

  .mce-content-body .mce-item-anchor{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A") no-repeat center}.mce-content-body .mce-item-anchor:empty{cursor:default;display:inline-block;height:12px!important;padding:0 2px;-webkit-user-modify:read-only;-moz-user-modify:read-only;-webkit-user-select:all;-moz-user-select:all;user-select:all;width:8px!important}.mce-content-body .mce-item-anchor:not(:empty){background-position-x:2px;display:inline-block;padding-left:12px}.mce-content-body .mce-item-anchor[data-mce-selected]{outline-offset:1px}.tox-comments-visible .tox-comment[contenteditable=false]:not([data-mce-selected]),.tox-comments-visible span.tox-comment img:not([data-mce-selected]),.tox-comments-visible span.tox-comment span.mce-preview-object:not([data-mce-selected]),.tox-comments-visible span.tox-comment>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment>video:not([data-mce-selected]){outline:3px solid #ffe89d}.tox-comments-visible .tox-comment[contenteditable=false][data-mce-annotation-active=true]:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] img:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] span.mce-preview-object:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>video:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment:not([data-mce-selected]){background-color:#ffe89d;outline:0}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]:not([data-mce-selected=inline-boundary]){background-color:#fed635}.tox-checklist>li:not(.tox-checklist--hidden){list-style:none;margin:.25em 0}.tox-checklist>li:not(.tox-checklist--hidden)::before{content:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");cursor:pointer;height:1em;margin-left:-1.5em;margin-top:.125em;position:absolute;width:1em}.tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked::before{content:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A")}[dir=rtl] .tox-checklist>li:not(.tox-checklist--hidden)::before{margin-left:0;margin-right:-1.5em}code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.mce-content-body{overflow-wrap:break-word;word-wrap:break-word}.mce-content-body .mce-visual-caret{background-color:#000;background-color:currentColor;position:absolute}.mce-content-body .mce-visual-caret-hidden{display:none}.mce-content-body [data-mce-caret]{left:-1000px;margin:0;padding:0;position:absolute;right:auto;top:0}.mce-content-body .mce-offscreen-selection{left:-2000000px;max-width:1000000px;position:absolute}.mce-content-body [contentEditable=false]{cursor:default}.mce-content-body [contentEditable=true]{cursor:text}.tox-cursor-format-painter{cursor:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A"),default}div.mce-footnotes hr{margin-inline-end:auto;margin-inline-start:0;width:25%}div.mce-footnotes li>a.mce-footnotes-backlink{text-decoration:none}@media print{sup.mce-footnote a{color:#000;text-decoration:none}div.mce-footnotes{break-inside:avoid;width:100%}div.mce-footnotes li>a.mce-footnotes-backlink{display:none}}.mce-content-body figure.align-left{float:left}.mce-content-body figure.align-right{float:right}.mce-content-body figure.image.align-center{display:table;margin-left:auto;margin-right:auto}.mce-preview-object{border:1px solid gray;display:inline-block;line-height:0;margin:0 2px 0 2px;position:relative}.mce-preview-object .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.mce-preview-object[data-mce-selected="2"] .mce-shim{display:none}.mce-content-body .mce-mergetag:hover{background-color:rgba(0,108,231,.1)}.mce-content-body .mce-mergetag-affix{background-color:rgba(0,108,231,.1);color:#006ce7}.mce-object{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A") no-repeat center;border:1px dashed #aaa}.mce-pagebreak{border:1px dashed #aaa;cursor:default;display:block;height:5px;margin-top:15px;page-break-before:always;width:100%}@media print{.mce-pagebreak{border:0}}.tiny-pageembed .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.tiny-pageembed[data-mce-selected="2"] .mce-shim{display:none}.tiny-pageembed{display:inline-block;position:relative}.tiny-pageembed--16by9,.tiny-pageembed--1by1,.tiny-pageembed--21by9,.tiny-pageembed--4by3{display:block;overflow:hidden;padding:0;position:relative;width:100%}.tiny-pageembed--21by9{padding-top:42.857143%}.tiny-pageembed--16by9{padding-top:56.25%}.tiny-pageembed--4by3{padding-top:75%}.tiny-pageembed--1by1{padding-top:100%}.tiny-pageembed--16by9 iframe,.tiny-pageembed--1by1 iframe,.tiny-pageembed--21by9 iframe,.tiny-pageembed--4by3 iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.mce-content-body[data-mce-placeholder]{position:relative}.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before{color:rgba(34,47,62,.7);content:attr(data-mce-placeholder);position:absolute}.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks)::before{left:1px}.mce-content-body[dir=rtl][data-mce-placeholder]:not(.mce-visualblocks)::before{right:1px}.mce-content-body div.mce-resizehandle{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;height:10px;position:absolute;width:10px;z-index:1298}.mce-content-body div.mce-resizehandle:hover{background-color:#4099ff}.mce-content-body div.mce-resizehandle:nth-of-type(1){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(2){cursor:nesw-resize}.mce-content-body div.mce-resizehandle:nth-of-type(3){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(4){cursor:nesw-resize}.mce-content-body .mce-resize-backdrop{z-index:10000}.mce-content-body .mce-clonedresizable{cursor:default;opacity:.5;outline:1px dashed #000;position:absolute;z-index:10001}.mce-content-body .mce-clonedresizable.mce-resizetable-columns td,.mce-content-body .mce-clonedresizable.mce-resizetable-columns th{border:0}.mce-content-body .mce-resize-helper{background:#555;background:rgba(0,0,0,.75);border:1px;border-radius:3px;color:#fff;display:none;font-family:sans-serif;font-size:12px;line-height:14px;margin:5px 10px;padding:5px;position:absolute;white-space:nowrap;z-index:10002}.tox-rtc-user-selection{position:relative}.tox-rtc-user-cursor{bottom:0;cursor:default;position:absolute;top:0;width:2px}.tox-rtc-user-cursor::before{background-color:inherit;border-radius:50%;content:'';display:block;height:8px;position:absolute;right:-3px;top:-3px;width:8px}.tox-rtc-user-cursor:hover::after{background-color:inherit;border-radius:100px;box-sizing:border-box;color:#fff;content:attr(data-user);display:block;font-size:12px;font-weight:700;left:-5px;min-height:8px;min-width:8px;padding:0 12px;position:absolute;top:-11px;white-space:nowrap;z-index:1000}.tox-rtc-user-selection--1 .tox-rtc-user-cursor{background-color:#2dc26b}.tox-rtc-user-selection--2 .tox-rtc-user-cursor{background-color:#e03e2d}.tox-rtc-user-selection--3 .tox-rtc-user-cursor{background-color:#f1c40f}.tox-rtc-user-selection--4 .tox-rtc-user-cursor{background-color:#3598db}.tox-rtc-user-selection--5 .tox-rtc-user-cursor{background-color:#b96ad9}.tox-rtc-user-selection--6 .tox-rtc-user-cursor{background-color:#e67e23}.tox-rtc-user-selection--7 .tox-rtc-user-cursor{background-color:#aaa69d}.tox-rtc-user-selection--8 .tox-rtc-user-cursor{background-color:#f368e0}.tox-rtc-remote-image{background:#eaeaea url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A") no-repeat center center;border:1px solid #ccc;min-height:240px;min-width:320px}.mce-match-marker{background:#aaa;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-match-marker-selected::-moz-selection{background:#39f;color:#fff}.mce-match-marker-selected::selection{background:#39f;color:#fff}.mce-content-body audio[data-mce-selected],.mce-content-body embed[data-mce-selected],.mce-content-body img[data-mce-selected],.mce-content-body object[data-mce-selected],.mce-content-body table[data-mce-selected],.mce-content-body video[data-mce-selected]{outline:3px solid #b4d7ff}.mce-content-body hr[data-mce-selected]{outline:3px solid #b4d7ff;outline-offset:1px}.mce-content-body [contentEditable=false] [contentEditable=true]:focus{outline:3px solid #b4d7ff}.mce-content-body [contentEditable=false] [contentEditable=true]:hover{outline:3px solid #b4d7ff}.mce-content-body [contentEditable=false][data-mce-selected]{cursor:not-allowed;outline:3px solid #b4d7ff}.mce-content-body.mce-content-readonly [contentEditable=true]:focus,.mce-content-body.mce-content-readonly [contentEditable=true]:hover{outline:0}.mce-content-body [data-mce-selected=inline-boundary]{background-color:#b4d7ff}.mce-content-body .mce-edit-focus{outline:3px solid #b4d7ff}.mce-content-body td[data-mce-selected],.mce-content-body th[data-mce-selected]{position:relative}.mce-content-body td[data-mce-selected]::-moz-selection,.mce-content-body th[data-mce-selected]::-moz-selection{background:0 0}.mce-content-body td[data-mce-selected]::selection,.mce-content-body th[data-mce-selected]::selection{background:0 0}.mce-content-body td[data-mce-selected] *,.mce-content-body th[data-mce-selected] *{outline:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mce-content-body td[data-mce-selected]::after,.mce-content-body th[data-mce-selected]::after{background-color:rgba(180,215,255,.7);border:1px solid rgba(180,215,255,.7);bottom:-1px;content:'';left:-1px;mix-blend-mode:multiply;position:absolute;right:-1px;top:-1px}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.mce-content-body td[data-mce-selected]::after,.mce-content-body th[data-mce-selected]::after{border-color:rgba(0,84,180,.7)}}.mce-content-body img[data-mce-selected]::-moz-selection{background:0 0}.mce-content-body img[data-mce-selected]::selection{background:0 0}.ephox-snooker-resizer-bar{background-color:#b4d7ff;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ephox-snooker-resizer-cols{cursor:col-resize}.ephox-snooker-resizer-rows{cursor:row-resize}.ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging{opacity:1}.mce-spellchecker-word{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default;height:2rem}.mce-spellchecker-grammar{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default}.mce-toc{border:1px solid gray}.mce-toc h2{margin:4px}.mce-toc li{list-style-type:none}.mce-item-table:not([border]),.mce-item-table:not([border]) caption,.mce-item-table:not([border]) td,.mce-item-table:not([border]) th,.mce-item-table[border="0"],.mce-item-table[border="0"] caption,.mce-item-table[border="0"] td,.mce-item-table[border="0"] th,table[style*="border-width: 0px"],table[style*="border-width: 0px"] caption,table[style*="border-width: 0px"] td,table[style*="border-width: 0px"] th{border:1px dashed #bbb}.mce-visualblocks address,.mce-visualblocks article,.mce-visualblocks aside,.mce-visualblocks blockquote,.mce-visualblocks div:not([data-mce-bogus]),.mce-visualblocks dl,.mce-visualblocks figcaption,.mce-visualblocks figure,.mce-visualblocks h1,.mce-visualblocks h2,.mce-visualblocks h3,.mce-visualblocks h4,.mce-visualblocks h5,.mce-visualblocks h6,.mce-visualblocks hgroup,.mce-visualblocks ol,.mce-visualblocks p,.mce-visualblocks pre,.mce-visualblocks section,.mce-visualblocks ul{background-repeat:no-repeat;border:1px dashed #bbb;margin-left:3px;padding-top:10px}.mce-visualblocks p{background-image:url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7)}.mce-visualblocks h1{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==)}.mce-visualblocks h2{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==)}.mce-visualblocks h3{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7)}.mce-visualblocks h4{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==)}.mce-visualblocks h5{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==)}.mce-visualblocks h6{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==)}.mce-visualblocks div:not([data-mce-bogus]){background-image:url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7)}.mce-visualblocks section{background-image:url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=)}.mce-visualblocks article{background-image:url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7)}.mce-visualblocks blockquote{background-image:url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7)}.mce-visualblocks address{background-image:url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=)}.mce-visualblocks pre{background-image:url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==)}.mce-visualblocks figure{background-image:url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7)}.mce-visualblocks figcaption{border:1px dashed #bbb}.mce-visualblocks hgroup{background-image:url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7)}.mce-visualblocks aside{background-image:url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=)}.mce-visualblocks ul{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==)}.mce-visualblocks ol{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==)}.mce-visualblocks dl{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==)}.mce-visualblocks:not([dir=rtl]) address,.mce-visualblocks:not([dir=rtl]) article,.mce-visualblocks:not([dir=rtl]) aside,.mce-visualblocks:not([dir=rtl]) blockquote,.mce-visualblocks:not([dir=rtl]) div:not([data-mce-bogus]),.mce-visualblocks:not([dir=rtl]) dl,.mce-visualblocks:not([dir=rtl]) figcaption,.mce-visualblocks:not([dir=rtl]) figure,.mce-visualblocks:not([dir=rtl]) h1,.mce-visualblocks:not([dir=rtl]) h2,.mce-visualblocks:not([dir=rtl]) h3,.mce-visualblocks:not([dir=rtl]) h4,.mce-visualblocks:not([dir=rtl]) h5,.mce-visualblocks:not([dir=rtl]) h6,.mce-visualblocks:not([dir=rtl]) hgroup,.mce-visualblocks:not([dir=rtl]) ol,.mce-visualblocks:not([dir=rtl]) p,.mce-visualblocks:not([dir=rtl]) pre,.mce-visualblocks:not([dir=rtl]) section,.mce-visualblocks:not([dir=rtl]) ul{margin-left:3px}.mce-visualblocks[dir=rtl] address,.mce-visualblocks[dir=rtl] article,.mce-visualblocks[dir=rtl] aside,.mce-visualblocks[dir=rtl] blockquote,.mce-visualblocks[dir=rtl] div:not([data-mce-bogus]),.mce-visualblocks[dir=rtl] dl,.mce-visualblocks[dir=rtl] figcaption,.mce-visualblocks[dir=rtl] figure,.mce-visualblocks[dir=rtl] h1,.mce-visualblocks[dir=rtl] h2,.mce-visualblocks[dir=rtl] h3,.mce-visualblocks[dir=rtl] h4,.mce-visualblocks[dir=rtl] h5,.mce-visualblocks[dir=rtl] h6,.mce-visualblocks[dir=rtl] hgroup,.mce-visualblocks[dir=rtl] ol,.mce-visualblocks[dir=rtl] p,.mce-visualblocks[dir=rtl] pre,.mce-visualblocks[dir=rtl] section,.mce-visualblocks[dir=rtl] ul{background-position-x:right;margin-right:3px}.mce-nbsp,.mce-shy{background:#aaa}.mce-shy::after{content:'-'}body{font-family:sans-serif}table{border-collapse:collapse}

  .tox{box-shadow:none;box-sizing:content-box;color:#222f3e;cursor:auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:normal;-webkit-tap-highlight-color:transparent;text-decoration:none;text-shadow:none;text-transform:none;vertical-align:initial;white-space:normal}.tox :not(svg):not(rect){box-sizing:inherit;color:inherit;cursor:inherit;direction:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;-webkit-tap-highlight-color:inherit;text-align:inherit;text-decoration:inherit;text-shadow:inherit;text-transform:inherit;vertical-align:inherit;white-space:inherit}.tox :not(svg):not(rect){background:0 0;border:0;box-shadow:none;float:none;height:auto;margin:0;max-width:none;outline:0;padding:0;position:static;width:auto}.tox:not([dir=rtl]){direction:ltr;text-align:left}.tox[dir=rtl]{direction:rtl;text-align:right}
  .tox-tinymce{
    background-color: transparent;
    color: var(--sl-color-neutral-900);
    border:1px solid var(--input-border-color);
    border-radius: var(--sl-input-border-radius-medium);
    border-top-left-radius: 0;box-shadow:none;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    overflow:hidden;
    position:relative;visibility:inherit!important}.tox.tox-tinymce-inline{border:none;box-shadow:none;overflow:initial}.tox.tox-tinymce-inline .tox-editor-container{overflow:initial}.tox.tox-tinymce-inline
  .tox-editor-header{
    background-color:transparent;border:2px solid #eee;border-radius:10px;box-shadow:none;overflow:hidden}.tox-tinymce-aux{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;z-index:1300}.tox-tinymce :focus,.tox-tinymce-aux :focus{outline:0}button::-moz-focus-inner{border:0}.tox[dir=rtl] .tox-icon--flip svg{transform:rotateY(180deg)}.tox .accessibility-issue__header{align-items:center;display:flex;margin-bottom:4px}.tox .accessibility-issue__description{align-items:stretch;border:1px solid #eee;border-radius:6px;display:flex;justify-content:space-between}.tox .accessibility-issue__description>div{padding-bottom:4px}.tox .accessibility-issue__description>div>div{align-items:center;display:flex;margin-bottom:4px}.tox .accessibility-issue__description>:last-child:not(:only-child){border-color:#eee;border-style:solid}.tox .accessibility-issue__repair{margin-top:16px}.tox .tox-dialog__body-content .accessibility-issue--info .accessibility-issue__description{background-color:rgba(0,108,231,.1);border-color:#006ce7;color:#222f3e}.tox .tox-dialog__body-content .accessibility-issue--info .accessibility-issue__description>:last-child{border-color:#006ce7}.tox .tox-dialog__body-content .accessibility-issue--info .tox-form__group h2{color:#006ce7}.tox .tox-dialog__body-content .accessibility-issue--info .tox-icon svg{fill:#006ce7}.tox .tox-dialog__body-content .accessibility-issue--info a .tox-icon{color:#006ce7}.tox .tox-dialog__body-content .accessibility-issue--warn .accessibility-issue__description{background-color:rgba(255,165,0,.1);border-color:rgba(255,165,0,.5);color:#222f3e}.tox .tox-dialog__body-content .accessibility-issue--warn .accessibility-issue__description>:last-child{border-color:rgba(255,165,0,.5)}.tox .tox-dialog__body-content .accessibility-issue--warn .tox-form__group h2{color:#cc8500}.tox .tox-dialog__body-content .accessibility-issue--warn .tox-icon svg{fill:#cc8500}.tox .tox-dialog__body-content .accessibility-issue--warn a .tox-icon{color:#cc8500}.tox .tox-dialog__body-content .accessibility-issue--error .accessibility-issue__description{background-color:rgba(204,0,0,.1);border-color:rgba(204,0,0,.4);color:#222f3e}.tox .tox-dialog__body-content .accessibility-issue--error .accessibility-issue__description>:last-child{border-color:rgba(204,0,0,.4)}.tox .tox-dialog__body-content .accessibility-issue--error .tox-form__group h2{color:#c00}.tox .tox-dialog__body-content .accessibility-issue--error .tox-icon svg{fill:#c00}.tox .tox-dialog__body-content .accessibility-issue--error a .tox-icon{color:#c00}.tox .tox-dialog__body-content .accessibility-issue--success .accessibility-issue__description{background-color:rgba(120,171,70,.1);border-color:rgba(120,171,70,.4);color:#222f3e}.tox .tox-dialog__body-content .accessibility-issue--success .accessibility-issue__description>:last-child{border-color:rgba(120,171,70,.4)}.tox .tox-dialog__body-content .accessibility-issue--success .tox-form__group h2{color:#78ab46}.tox .tox-dialog__body-content .accessibility-issue--success .tox-icon svg{fill:#78ab46}.tox .tox-dialog__body-content .accessibility-issue--success a .tox-icon{color:#78ab46}.tox .tox-dialog__body-content .accessibility-issue__header h1,.tox .tox-dialog__body-content .tox-form__group .accessibility-issue__description h2{margin-top:0}.tox:not([dir=rtl]) .tox-dialog__body-content .accessibility-issue__header .tox-button{margin-left:4px}.tox:not([dir=rtl]) .tox-dialog__body-content .accessibility-issue__header>:nth-last-child(2){margin-left:auto}.tox:not([dir=rtl]) .tox-dialog__body-content .accessibility-issue__description{padding:4px 4px 4px 8px}.tox:not([dir=rtl]) .tox-dialog__body-content .accessibility-issue__description>:last-child{border-left-width:1px;padding-left:4px}.tox[dir=rtl] .tox-dialog__body-content .accessibility-issue__header .tox-button{margin-right:4px}.tox[dir=rtl] .tox-dialog__body-content .accessibility-issue__header>:nth-last-child(2){margin-right:auto}.tox[dir=rtl] .tox-dialog__body-content .accessibility-issue__description{padding:4px 8px 4px 4px}.tox[dir=rtl] .tox-dialog__body-content .accessibility-issue__description>:last-child{border-right-width:1px;padding-right:4px}.tox .tox-anchorbar{display:flex;flex:0 0 auto}.tox .tox-bar{display:flex;flex:0 0 auto}.tox .tox-button{background-color:#006ce7;background-image:none;background-position:0 0;background-repeat:repeat;border-color:#006ce7;border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;font-style:normal;font-weight:700;letter-spacing:normal;line-height:24px;margin:0;outline:0;padding:4px 16px;position:relative;text-align:center;text-decoration:none;text-transform:none;white-space:nowrap}.tox .tox-button::before{border-radius:6px;bottom:-1px;box-shadow:inset 0 0 0 2px #fff,0 0 0 1px #006ce7,0 0 0 3px rgba(0,108,231,.25);content:'';left:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px}.tox .tox-button[disabled]{background-color:#006ce7;background-image:none;border-color:#006ce7;box-shadow:none;color:rgba(255,255,255,.5);cursor:not-allowed}.tox .tox-button:focus:not(:disabled){background-color:#0060ce;background-image:none;border-color:#0060ce;box-shadow:none;color:#fff}.tox .tox-button:focus-visible:not(:disabled)::before{opacity:1}.tox .tox-button:hover:not(:disabled){background-color:#0060ce;background-image:none;border-color:#0060ce;box-shadow:none;color:#fff}.tox .tox-button:active:not(:disabled){background-color:#0054b4;background-image:none;border-color:#0054b4;box-shadow:none;color:#fff}.tox .tox-button--secondary{background-color:#f0f0f0;background-image:none;background-position:0 0;background-repeat:repeat;border-color:#f0f0f0;border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;color:#222f3e;font-size:14px;font-style:normal;font-weight:700;letter-spacing:normal;outline:0;padding:4px 16px;text-decoration:none;text-transform:none}.tox .tox-button--secondary[disabled]{background-color:#f0f0f0;background-image:none;border-color:#f0f0f0;box-shadow:none;color:rgba(34,47,62,.5)}.tox .tox-button--secondary:focus:not(:disabled){background-color:#e3e3e3;background-image:none;border-color:#e3e3e3;box-shadow:none;color:#222f3e}.tox .tox-button--secondary:hover:not(:disabled){background-color:#e3e3e3;background-image:none;border-color:#e3e3e3;box-shadow:none;color:#222f3e}.tox .tox-button--secondary:active:not(:disabled){background-color:#d6d6d6;background-image:none;border-color:#d6d6d6;box-shadow:none;color:#222f3e}.tox .tox-button--icon,.tox .tox-button.tox-button--icon,.tox .tox-button.tox-button--secondary.tox-button--icon{padding:4px}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{display:block;fill:currentColor}.tox .tox-button-link{background:0;border:none;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;white-space:nowrap}.tox .tox-button-link--sm{font-size:14px}.tox .tox-button--naked{background-color:transparent;border-color:transparent;box-shadow:unset;color:#222f3e}.tox .tox-button--naked[disabled]{background-color:rgba(34,47,62,.12);border-color:transparent;box-shadow:unset;color:rgba(34,47,62,.5)}.tox .tox-button--naked:hover:not(:disabled){background-color:rgba(34,47,62,.12);border-color:transparent;box-shadow:unset;color:#222f3e}.tox .tox-button--naked:focus:not(:disabled){background-color:rgba(34,47,62,.12);border-color:transparent;box-shadow:unset;color:#222f3e}.tox .tox-button--naked:active:not(:disabled){background-color:rgba(34,47,62,.18);border-color:transparent;box-shadow:unset;color:#222f3e}.tox .tox-button--naked .tox-icon svg{fill:currentColor}.tox .tox-button--naked.tox-button--icon:hover:not(:disabled){color:#222f3e}.tox .tox-checkbox{align-items:center;border-radius:6px;cursor:pointer;display:flex;height:36px;min-width:36px}.tox .tox-checkbox__input{height:1px;overflow:hidden;position:absolute;top:auto;width:1px}.tox .tox-checkbox__icons{align-items:center;border-radius:6px;box-shadow:0 0 0 2px transparent;box-sizing:content-box;display:flex;height:24px;justify-content:center;padding:calc(4px - 1px);width:24px}.tox .tox-checkbox__icons .tox-checkbox-icon__unchecked svg{display:block;fill:rgba(34,47,62,.3)}.tox .tox-checkbox__icons .tox-checkbox-icon__indeterminate svg{display:none;fill:#006ce7}.tox .tox-checkbox__icons .tox-checkbox-icon__checked svg{display:none;fill:#006ce7}.tox .tox-checkbox--disabled{color:rgba(34,47,62,.5);cursor:not-allowed}.tox .tox-checkbox--disabled .tox-checkbox__icons .tox-checkbox-icon__checked svg{fill:rgba(34,47,62,.5)}.tox .tox-checkbox--disabled .tox-checkbox__icons .tox-checkbox-icon__unchecked svg{fill:rgba(34,47,62,.5)}.tox .tox-checkbox--disabled .tox-checkbox__icons .tox-checkbox-icon__indeterminate svg{fill:rgba(34,47,62,.5)}.tox input.tox-checkbox__input:checked+.tox-checkbox__icons .tox-checkbox-icon__unchecked svg{display:none}.tox input.tox-checkbox__input:checked+.tox-checkbox__icons .tox-checkbox-icon__checked svg{display:block}.tox input.tox-checkbox__input:indeterminate+.tox-checkbox__icons .tox-checkbox-icon__unchecked svg{display:none}.tox input.tox-checkbox__input:indeterminate+.tox-checkbox__icons .tox-checkbox-icon__indeterminate svg{display:block}.tox input.tox-checkbox__input:focus+.tox-checkbox__icons{border-radius:6px;box-shadow:inset 0 0 0 1px #006ce7;padding:calc(4px - 1px)}.tox:not([dir=rtl]) .tox-checkbox__label{margin-left:4px}.tox:not([dir=rtl]) .tox-checkbox__input{left:-10000px}.tox:not([dir=rtl]) .tox-bar .tox-checkbox{margin-left:4px}.tox[dir=rtl] .tox-checkbox__label{margin-right:4px}.tox[dir=rtl] .tox-checkbox__input{right:-10000px}.tox[dir=rtl] .tox-bar .tox-checkbox{margin-right:4px}.tox .tox-collection--toolbar .tox-collection__group{display:flex;padding:0}.tox .tox-collection--grid .tox-collection__group{display:flex;flex-wrap:wrap;max-height:208px;overflow-x:hidden;overflow-y:auto;padding:0}.tox .tox-collection--list .tox-collection__group{border-bottom-width:0;border-color:#e3e3e3;border-left-width:0;border-right-width:0;border-style:solid;border-top-width:1px;padding:4px 0}.tox .tox-collection--list .tox-collection__group:first-child{border-top-width:0}.tox .tox-collection__group-heading{background-color:#fcfcfc;color:rgba(34,47,62,.7);cursor:default;font-size:12px;font-style:normal;font-weight:400;margin-bottom:4px;margin-top:-4px;padding:4px 8px;text-transform:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tox .tox-collection__item{align-items:center;border-radius:3px;color:#222f3e;display:flex;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tox .tox-collection--list .tox-collection__item{padding:4px 8px}.tox .tox-collection--toolbar .tox-collection__item{border-radius:3px;padding:4px}.tox .tox-collection--grid .tox-collection__item{border-radius:3px;padding:4px}.tox .tox-collection--list .tox-collection__item--enabled{background-color:#fff;color:#222f3e}.tox .tox-collection--list .tox-collection__item--active{background-color:#cce2fa}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#a6ccf7;color:#222f3e}.tox .tox-collection--toolbar .tox-collection__item--active{background-color:#cce2fa}.tox .tox-collection--grid .tox-collection__item--enabled{background-color:#a6ccf7;color:#222f3e}.tox .tox-collection--grid .tox-collection__item--active:not(.tox-collection__item--state-disabled){background-color:#cce2fa;color:#222f3e}.tox .tox-collection--list .tox-collection__item--active:not(.tox-collection__item--state-disabled){color:#222f3e}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--state-disabled){color:#222f3e}.tox .tox-collection__item-checkmark,.tox .tox-collection__item-icon{align-items:center;display:flex;height:24px;justify-content:center;width:24px}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:currentColor}.tox .tox-collection--toolbar-lg .tox-collection__item-icon{height:48px;width:48px}.tox .tox-collection__item-label{color:currentColor;display:inline-block;flex:1;font-size:14px;font-style:normal;font-weight:400;line-height:24px;text-transform:none;word-break:break-all}.tox .tox-collection__item-accessory{color:rgba(34,47,62,.7);display:inline-block;font-size:14px;height:24px;line-height:24px;text-transform:none}.tox .tox-collection__item-caret{align-items:center;display:flex;min-height:24px}.tox .tox-collection__item-caret::after{content:'';font-size:0;min-height:inherit}.tox .tox-collection__item-caret svg{fill:#222f3e}.tox .tox-collection__item--state-disabled{background-color:transparent;color:rgba(34,47,62,.5);cursor:not-allowed}.tox .tox-collection__item--state-disabled .tox-collection__item-caret svg{fill:rgba(34,47,62,.5)}.tox .tox-collection--list .tox-collection__item:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{display:none}.tox .tox-collection--list .tox-collection__item:not(.tox-collection__item--enabled) .tox-collection__item-accessory+.tox-collection__item-checkmark{display:none}.tox .tox-collection--horizontal{background-color:#fff;border:1px solid #e3e3e3;border-radius:6px;box-shadow:0 0 2px 0 rgba(34,47,62,.2),0 4px 8px 0 rgba(34,47,62,.15);display:flex;flex:0 0 auto;flex-shrink:0;flex-wrap:nowrap;margin-bottom:0;overflow-x:auto;padding:0}.tox .tox-collection--horizontal .tox-collection__group{align-items:center;display:flex;flex-wrap:nowrap;margin:0;padding:0 4px}.tox .tox-collection--horizontal .tox-collection__item{height:28px;margin:6px 1px 5px 0;padding:0 4px}.tox .tox-collection--horizontal .tox-collection__item-label{white-space:nowrap}.tox .tox-collection--horizontal .tox-collection__item-caret{margin-left:4px}.tox .tox-collection__item-container{display:flex}.tox .tox-collection__item-container--row{align-items:center;flex:1 1 auto;flex-direction:row}.tox .tox-collection__item-container--row.tox-collection__item-container--align-left{margin-right:auto}.tox .tox-collection__item-container--row.tox-collection__item-container--align-right{justify-content:flex-end;margin-left:auto}.tox .tox-collection__item-container--row.tox-collection__item-container--valign-top{align-items:flex-start;margin-bottom:auto}.tox .tox-collection__item-container--row.tox-collection__item-container--valign-middle{align-items:center}.tox .tox-collection__item-container--row.tox-collection__item-container--valign-bottom{align-items:flex-end;margin-top:auto}.tox .tox-collection__item-container--column{align-self:center;flex:1 1 auto;flex-direction:column}.tox .tox-collection__item-container--column.tox-collection__item-container--align-left{align-items:flex-start}.tox .tox-collection__item-container--column.tox-collection__item-container--align-right{align-items:flex-end}.tox .tox-collection__item-container--column.tox-collection__item-container--valign-top{align-self:flex-start}.tox .tox-collection__item-container--column.tox-collection__item-container--valign-middle{align-self:center}.tox .tox-collection__item-container--column.tox-collection__item-container--valign-bottom{align-self:flex-end}.tox:not([dir=rtl]) .tox-collection--horizontal .tox-collection__group:not(:last-of-type){border-right:1px solid transparent}.tox:not([dir=rtl]) .tox-collection--list .tox-collection__item>:not(:first-child){margin-left:8px}.tox:not([dir=rtl]) .tox-collection--list .tox-collection__item>.tox-collection__item-label:first-child{margin-left:4px}.tox:not([dir=rtl]) .tox-collection__item-accessory{margin-left:16px;text-align:right}.tox:not([dir=rtl]) .tox-collection .tox-collection__item-caret{margin-left:16px}.tox[dir=rtl] .tox-collection--horizontal .tox-collection__group:not(:last-of-type){border-left:1px solid transparent}.tox[dir=rtl] .tox-collection--list .tox-collection__item>:not(:first-child){margin-right:8px}.tox[dir=rtl] .tox-collection--list .tox-collection__item>.tox-collection__item-label:first-child{margin-right:4px}.tox[dir=rtl] .tox-collection__item-accessory{margin-right:16px;text-align:left}.tox[dir=rtl] .tox-collection .tox-collection__item-caret{margin-right:16px;transform:rotateY(180deg)}.tox[dir=rtl] .tox-collection--horizontal .tox-collection__item-caret{margin-right:4px}.tox .tox-color-picker-container{display:flex;flex-direction:row;height:225px;margin:0}.tox .tox-sv-palette{box-sizing:border-box;display:flex;height:100%}.tox .tox-sv-palette-spectrum{height:100%}.tox .tox-sv-palette,.tox .tox-sv-palette-spectrum{width:225px}.tox .tox-sv-palette-thumb{background:0 0;border:1px solid #000;border-radius:50%;box-sizing:content-box;height:12px;position:absolute;width:12px}.tox .tox-sv-palette-inner-thumb{border:1px solid #fff;border-radius:50%;height:10px;position:absolute;width:10px}.tox .tox-hue-slider{box-sizing:border-box;height:100%;width:25px}.tox .tox-hue-slider-spectrum{background:linear-gradient(to bottom,red,#ff0080,#f0f,#8000ff,#00f,#0080ff,#0ff,#00ff80,#0f0,#80ff00,#ff0,#ff8000,red);height:100%;width:100%}.tox .tox-hue-slider,.tox .tox-hue-slider-spectrum{width:20px}.tox .tox-hue-slider-thumb{background:#fff;border:1px solid #000;box-sizing:content-box;height:4px;width:100%}.tox .tox-rgb-form{display:flex;flex-direction:column;justify-content:space-between}.tox .tox-rgb-form div{align-items:center;display:flex;justify-content:space-between;margin-bottom:5px;width:inherit}.tox .tox-rgb-form input{width:6em}.tox .tox-rgb-form input.tox-invalid{border:1px solid red!important}.tox .tox-rgb-form .tox-rgba-preview{border:1px solid #000;flex-grow:2;margin-bottom:0}.tox:not([dir=rtl]) .tox-sv-palette{margin-right:15px}.tox:not([dir=rtl]) .tox-hue-slider{margin-right:15px}.tox:not([dir=rtl]) .tox-hue-slider-thumb{margin-left:-1px}.tox:not([dir=rtl]) .tox-rgb-form label{margin-right:.5em}.tox[dir=rtl] .tox-sv-palette{margin-left:15px}.tox[dir=rtl] .tox-hue-slider{margin-left:15px}.tox[dir=rtl] .tox-hue-slider-thumb{margin-right:-1px}.tox[dir=rtl] .tox-rgb-form label{margin-left:.5em}.tox .tox-toolbar .tox-swatches,.tox .tox-toolbar__overflow .tox-swatches,.tox .tox-toolbar__primary .tox-swatches{margin:5px 0 6px 11px}.tox .tox-collection--list .tox-collection__group .tox-swatches-menu{border:0;margin:-4px -4px}.tox .tox-swatches__row{display:flex}.tox .tox-swatch{height:30px;transition:transform .15s,box-shadow .15s;width:30px}.tox .tox-swatch:focus,.tox .tox-swatch:hover{box-shadow:0 0 0 1px rgba(127,127,127,.3) inset;transform:scale(.8)}.tox .tox-swatch--remove{align-items:center;display:flex;justify-content:center}.tox .tox-swatch--remove svg path{stroke:#e74c3c}.tox .tox-swatches__picker-btn{align-items:center;background-color:transparent;border:0;cursor:pointer;display:flex;height:30px;justify-content:center;outline:0;padding:0;width:30px}.tox .tox-swatches__picker-btn svg{fill:#222f3e;height:24px;width:24px}.tox .tox-swatches__picker-btn:hover{background:#cce2fa}.tox:not([dir=rtl]) .tox-swatches__picker-btn{margin-left:auto}.tox[dir=rtl] .tox-swatches__picker-btn{margin-right:auto}.tox .tox-comment-thread{background:#fff;position:relative}.tox .tox-comment-thread>:not(:first-child){margin-top:8px}.tox .tox-comment{background:#fff;border:1px solid #eee;border-radius:6px;box-shadow:0 4px 8px 0 rgba(34,47,62,.1);padding:8px 8px 16px 8px;position:relative}.tox .tox-comment__header{align-items:center;color:#222f3e;display:flex;justify-content:space-between}.tox .tox-comment__date{color:#222f3e;font-size:12px;line-height:18px}.tox .tox-comment__body{color:#222f3e;font-size:14px;font-style:normal;font-weight:400;line-height:1.3;margin-top:8px;position:relative;text-transform:initial}.tox .tox-comment__body textarea{resize:none;white-space:normal;width:100%}.tox .tox-comment__expander{padding-top:8px}.tox .tox-comment__expander p{color:rgba(34,47,62,.7);font-size:14px;font-style:normal}.tox .tox-comment__body p{margin:0}.tox .tox-comment__buttonspacing{padding-top:16px;text-align:center}.tox .tox-comment-thread__overlay::after{background:#fff;bottom:0;content:"";display:flex;left:0;opacity:.9;position:absolute;right:0;top:0;z-index:5}.tox .tox-comment__reply{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;margin-top:8px}.tox .tox-comment__reply>:first-child{margin-bottom:8px;width:100%}.tox .tox-comment__edit{display:flex;flex-wrap:wrap;justify-content:flex-end;margin-top:16px}.tox .tox-comment__gradient::after{background:linear-gradient(rgba(255,255,255,0),#fff);bottom:0;content:"";display:block;height:5em;margin-top:-40px;position:absolute;width:100%}.tox .tox-comment__overlay{background:#fff;bottom:0;display:flex;flex-direction:column;flex-grow:1;left:0;opacity:.9;position:absolute;right:0;text-align:center;top:0;z-index:5}.tox .tox-comment__loading-text{align-items:center;color:#222f3e;display:flex;flex-direction:column;position:relative}.tox .tox-comment__loading-text>div{padding-bottom:16px}.tox .tox-comment__overlaytext{bottom:0;flex-direction:column;font-size:14px;left:0;padding:1em;position:absolute;right:0;top:0;z-index:10}.tox .tox-comment__overlaytext p{background-color:#fff;box-shadow:0 0 8px 8px #fff;color:#222f3e;text-align:center}.tox .tox-comment__overlaytext div:nth-of-type(2){font-size:.8em}.tox .tox-comment__busy-spinner{align-items:center;background-color:#fff;bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:20}.tox .tox-comment__scroll{display:flex;flex-direction:column;flex-shrink:1;overflow:auto}.tox .tox-conversations{margin:8px}.tox:not([dir=rtl]) .tox-comment__edit{margin-left:8px}.tox:not([dir=rtl]) .tox-comment__buttonspacing>:last-child,.tox:not([dir=rtl]) .tox-comment__edit>:last-child,.tox:not([dir=rtl]) .tox-comment__reply>:last-child{margin-left:8px}.tox[dir=rtl] .tox-comment__edit{margin-right:8px}.tox[dir=rtl] .tox-comment__buttonspacing>:last-child,.tox[dir=rtl] .tox-comment__edit>:last-child,.tox[dir=rtl] .tox-comment__reply>:last-child{margin-right:8px}.tox .tox-user{align-items:center;display:flex}.tox .tox-user__avatar svg{fill:rgba(34,47,62,.7)}.tox .tox-user__avatar img{border-radius:50%;height:36px;object-fit:cover;vertical-align:middle;width:36px}.tox .tox-user__name{color:#222f3e;font-size:14px;font-style:normal;font-weight:700;line-height:18px;text-transform:none}.tox:not([dir=rtl]) .tox-user__avatar img,.tox:not([dir=rtl]) .tox-user__avatar svg{margin-right:8px}.tox:not([dir=rtl]) .tox-user__avatar+.tox-user__name{margin-left:8px}.tox[dir=rtl] .tox-user__avatar img,.tox[dir=rtl] .tox-user__avatar svg{margin-left:8px}.tox[dir=rtl] .tox-user__avatar+.tox-user__name{margin-right:8px}.tox .tox-dialog-wrap{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1100}.tox .tox-dialog-wrap__backdrop{background-color:rgba(255,255,255,.75);bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.tox .tox-dialog-wrap__backdrop--opaque{background-color:#fff}.tox .tox-dialog{background-color:#fff;border-color:#eee;border-radius:10px;border-style:solid;border-width:0;box-shadow:0 16px 16px -10px rgba(34,47,62,.15),0 0 40px 1px rgba(34,47,62,.15);display:flex;flex-direction:column;max-height:100%;max-width:480px;overflow:hidden;position:relative;width:95vw;z-index:2}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox .tox-dialog{align-self:flex-start;margin:8px auto;max-height:calc(100vh - 8px * 2);width:calc(100vw - 16px)}}.tox .tox-dialog-inline{z-index:1100}.tox .tox-dialog__header{align-items:center;background-color:#fff;border-bottom:none;color:#222f3e;display:flex;font-size:16px;justify-content:space-between;padding:8px 16px 0 16px;position:relative}.tox .tox-dialog__header .tox-button{z-index:1}.tox .tox-dialog__draghandle{cursor:grab;height:100%;left:0;position:absolute;top:0;width:100%}.tox .tox-dialog__draghandle:active{cursor:grabbing}.tox .tox-dialog__dismiss{margin-left:auto}.tox .tox-dialog__title{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:1.3;margin:0;text-transform:none}.tox .tox-dialog__body{color:#222f3e;display:flex;flex:1;font-size:16px;font-style:normal;font-weight:400;line-height:1.3;min-width:0;text-align:left;text-transform:none}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox .tox-dialog__body{flex-direction:column}}.tox .tox-dialog__body-nav{align-items:flex-start;display:flex;flex-direction:column;padding:16px 16px}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox .tox-dialog__body-nav{flex-direction:row;-webkit-overflow-scrolling:touch;overflow-x:auto;padding-bottom:0}}.tox .tox-dialog__body-nav-item{border-bottom:2px solid transparent;color:rgba(34,47,62,.7);display:inline-block;font-size:14px;line-height:1.3;margin-bottom:8px;text-decoration:none;white-space:nowrap}.tox .tox-dialog__body-nav-item:focus{background-color:rgba(0,108,231,.1)}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #006ce7;color:#006ce7}.tox .tox-dialog__body-content{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:650px;overflow:auto;-webkit-overflow-scrolling:touch;padding:16px 16px}.tox .tox-dialog__body-content>*{margin-bottom:0;margin-top:16px}.tox .tox-dialog__body-content>:first-child{margin-top:0}.tox .tox-dialog__body-content>:last-child{margin-bottom:0}.tox .tox-dialog__body-content>:only-child{margin-bottom:0;margin-top:0}.tox .tox-dialog__body-content a{color:#006ce7;cursor:pointer;text-decoration:none}.tox .tox-dialog__body-content a:focus,.tox .tox-dialog__body-content a:hover{color:#0054b4;text-decoration:none}.tox .tox-dialog__body-content a:active{color:#0054b4;text-decoration:none}.tox .tox-dialog__body-content svg{fill:#222f3e}.tox .tox-dialog__body-content ul{display:block;list-style-type:disc;margin-bottom:16px;margin-inline-end:0;margin-inline-start:0;padding-inline-start:2.5rem}.tox .tox-dialog__body-content .tox-form__group h1{color:#222f3e;font-size:20px;font-style:normal;font-weight:700;letter-spacing:normal;margin-bottom:16px;margin-top:2rem;text-transform:none}.tox .tox-dialog__body-content .tox-form__group h2{color:#222f3e;font-size:16px;font-style:normal;font-weight:700;letter-spacing:normal;margin-bottom:16px;margin-top:2rem;text-transform:none}.tox .tox-dialog__body-content .tox-form__group p{margin-bottom:16px}.tox .tox-dialog__body-content .tox-form__group h1:first-child,.tox .tox-dialog__body-content .tox-form__group h2:first-child,.tox .tox-dialog__body-content .tox-form__group p:first-child{margin-top:0}.tox .tox-dialog__body-content .tox-form__group h1:last-child,.tox .tox-dialog__body-content .tox-form__group h2:last-child,.tox .tox-dialog__body-content .tox-form__group p:last-child{margin-bottom:0}.tox .tox-dialog__body-content .tox-form__group h1:only-child,.tox .tox-dialog__body-content .tox-form__group h2:only-child,.tox .tox-dialog__body-content .tox-form__group p:only-child{margin-bottom:0;margin-top:0}.tox .tox-dialog--width-lg{height:650px;max-width:1200px}.tox .tox-dialog--width-md{max-width:800px}.tox .tox-dialog--width-md .tox-dialog__body-content{overflow:auto}.tox .tox-dialog__body-content--centered{text-align:center}.tox .tox-dialog__footer{align-items:center;background-color:#fff;border-top:none;display:flex;justify-content:space-between;padding:8px 16px}.tox .tox-dialog__footer-end,.tox .tox-dialog__footer-start{display:flex}.tox .tox-dialog__busy-spinner{align-items:center;background-color:rgba(255,255,255,.75);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:3}.tox .tox-dialog__table{border-collapse:collapse;width:100%}.tox .tox-dialog__table thead th{font-weight:700;padding-bottom:8px}.tox .tox-dialog__table tbody tr{border-bottom:1px solid #eee}.tox .tox-dialog__table tbody tr:last-child{border-bottom:none}.tox .tox-dialog__table td{padding-bottom:8px;padding-top:8px}.tox .tox-dialog__iframe.tox-dialog__iframe--opaque{background:#fff}.tox .tox-dialog__popups{position:absolute;width:100%;z-index:1100}.tox .tox-dialog__body-iframe{display:flex;flex:1;flex-direction:column}.tox .tox-dialog__body-iframe .tox-navobj{display:flex;flex:1}.tox .tox-dialog__body-iframe .tox-navobj :nth-child(2){flex:1;height:100%}.tox .tox-dialog-dock-fadeout{opacity:0;visibility:hidden}.tox .tox-dialog-dock-fadein{opacity:1;visibility:visible}.tox .tox-dialog-dock-transition{transition:visibility 0s linear .3s,opacity .3s ease}.tox .tox-dialog-dock-transition.tox-dialog-dock-fadein{transition-delay:0s}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox:not([dir=rtl]) .tox-dialog__body-nav{margin-right:0}}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox:not([dir=rtl]) .tox-dialog__body-nav-item:not(:first-child){margin-left:8px}}.tox:not([dir=rtl]) .tox-dialog__footer .tox-dialog__footer-end>*,.tox:not([dir=rtl]) .tox-dialog__footer .tox-dialog__footer-start>*{margin-left:8px}.tox[dir=rtl] .tox-dialog__body{text-align:right}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox[dir=rtl] .tox-dialog__body-nav{margin-left:0}}@media only screen and (max-width:767px){body:not(.tox-force-desktop) .tox[dir=rtl] .tox-dialog__body-nav-item:not(:first-child){margin-right:8px}}.tox[dir=rtl] .tox-dialog__footer .tox-dialog__footer-end>*,.tox[dir=rtl] .tox-dialog__footer .tox-dialog__footer-start>*{margin-right:8px}body.tox-dialog__disable-scroll{overflow:hidden}.tox .tox-dropzone-container{display:flex;flex:1}.tox .tox-dropzone{align-items:center;background:#fff;border:2px dashed #eee;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;justify-content:center;min-height:100px;padding:10px}.tox .tox-dropzone p{color:rgba(34,47,62,.7);margin:0 0 16px 0}.tox .tox-edit-area{display:flex;flex:1;overflow:hidden;position:relative}.tox .tox-edit-area__iframe{background-color:#fff;border:0;box-sizing:border-box;flex:1;height:100%;position:absolute;width:100%}.tox.tox-inline-edit-area{border:1px dotted #eee}.tox .tox-editor-container{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.tox .tox-editor-header{display:grid;grid-template-columns:1fr min-content;z-index:1}.tox:not(.tox-tinymce-inline) .tox-editor-header{background-color:#fff;border-bottom:none;box-shadow:0 2px 2px -2px rgba(34,47,62,.1),0 8px 8px -4px rgba(34,47,62,.07);padding:4px 0;transition:box-shadow .5s}.tox:not(.tox-tinymce-inline).tox-tinymce--toolbar-bottom .tox-editor-header{border-top:1px solid #e3e3e3;box-shadow:none}.tox:not(.tox-tinymce-inline).tox-tinymce--toolbar-sticky-on .tox-editor-header{background-color:#fff;box-shadow:0 2px 2px -2px rgba(34,47,62,.2),0 8px 8px -4px rgba(34,47,62,.15);padding:4px 0}.tox:not(.tox-tinymce-inline).tox-tinymce--toolbar-sticky-on.tox-tinymce--toolbar-bottom .tox-editor-header{box-shadow:0 2px 2px -2px rgba(34,47,62,.2),0 8px 8px -4px rgba(34,47,62,.15)}.tox-editor-dock-fadeout{opacity:0;visibility:hidden}.tox-editor-dock-fadein{opacity:1;visibility:visible}.tox-editor-dock-transition{transition:visibility 0s linear .25s,opacity .25s ease}.tox-editor-dock-transition.tox-editor-dock-fadein{transition-delay:0s}.tox .tox-control-wrap{flex:1;position:relative}.tox .tox-control-wrap:not(.tox-control-wrap--status-invalid) .tox-control-wrap__status-icon-invalid,.tox .tox-control-wrap:not(.tox-control-wrap--status-unknown) .tox-control-wrap__status-icon-unknown,.tox .tox-control-wrap:not(.tox-control-wrap--status-valid) .tox-control-wrap__status-icon-valid{display:none}.tox .tox-control-wrap svg{display:block}.tox .tox-control-wrap__status-icon-wrap{position:absolute;top:50%;transform:translateY(-50%)}.tox .tox-control-wrap__status-icon-invalid svg{fill:#c00}.tox .tox-control-wrap__status-icon-unknown svg{fill:orange}.tox .tox-control-wrap__status-icon-valid svg{fill:green}.tox:not([dir=rtl]) .tox-control-wrap--status-invalid .tox-textfield,.tox:not([dir=rtl]) .tox-control-wrap--status-unknown .tox-textfield,.tox:not([dir=rtl]) .tox-control-wrap--status-valid .tox-textfield{padding-right:32px}.tox:not([dir=rtl]) .tox-control-wrap__status-icon-wrap{right:4px}.tox[dir=rtl] .tox-control-wrap--status-invalid .tox-textfield,.tox[dir=rtl] .tox-control-wrap--status-unknown .tox-textfield,.tox[dir=rtl] .tox-control-wrap--status-valid .tox-textfield{padding-left:32px}.tox[dir=rtl] .tox-control-wrap__status-icon-wrap{left:4px}.tox .tox-autocompleter{max-width:25em}.tox .tox-autocompleter .tox-menu{box-sizing:border-box;max-width:25em}.tox .tox-autocompleter .tox-autocompleter-highlight{font-weight:700}.tox .tox-color-input{display:flex;position:relative;z-index:1}.tox .tox-color-input .tox-textfield{z-index:-1}.tox .tox-color-input span{border-color:rgba(34,47,62,.2);border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;box-sizing:border-box;height:24px;position:absolute;top:6px;width:24px}.tox .tox-color-input span:focus:not([aria-disabled=true]),.tox .tox-color-input span:hover:not([aria-disabled=true]){border-color:#006ce7;cursor:pointer}.tox .tox-color-input span::before{background-image:linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 25%),linear-gradient(-45deg,rgba(0,0,0,.25) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(0,0,0,.25) 75%),linear-gradient(-45deg,transparent 75%,rgba(0,0,0,.25) 75%);background-position:0 0,0 6px,6px -6px,-6px 0;background-size:12px 12px;border:1px solid #fff;border-radius:6px;box-sizing:border-box;content:'';height:24px;left:-1px;position:absolute;top:-1px;width:24px;z-index:-1}.tox .tox-color-input span[aria-disabled=true]{cursor:not-allowed}.tox:not([dir=rtl]) .tox-color-input .tox-textfield{padding-left:36px}.tox:not([dir=rtl]) .tox-color-input span{left:6px}.tox[dir=rtl] .tox-color-input .tox-textfield{padding-right:36px}.tox[dir=rtl] .tox-color-input span{right:6px}.tox .tox-label,.tox .tox-toolbar-label{color:rgba(34,47,62,.7);display:block;font-size:14px;font-style:normal;font-weight:400;line-height:1.3;padding:0 8px 0 0;text-transform:none;white-space:nowrap}.tox .tox-toolbar-label{padding:0 8px}.tox[dir=rtl] .tox-label{padding:0 0 0 8px}.tox .tox-form{display:flex;flex:1;flex-direction:column}.tox .tox-form__group{box-sizing:border-box;margin-bottom:4px}.tox .tox-form-group--maximize{flex:1}.tox .tox-form__group--error{color:#c00}.tox .tox-form__group--collection{display:flex}.tox .tox-form__grid{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.tox .tox-form__grid--2col>.tox-form__group{width:calc(50% - (8px / 2))}.tox .tox-form__grid--3col>.tox-form__group{width:calc(100% / 3 - (8px / 2))}.tox .tox-form__grid--4col>.tox-form__group{width:calc(25% - (8px / 2))}.tox .tox-form__controls-h-stack{align-items:center;display:flex}.tox .tox-form__group--inline{align-items:center;display:flex}.tox .tox-form__group--stretched{display:flex;flex:1;flex-direction:column}.tox .tox-form__group--stretched .tox-textarea{flex:1}.tox .tox-form__group--stretched .tox-navobj{display:flex;flex:1}.tox .tox-form__group--stretched .tox-navobj :nth-child(2){flex:1;height:100%}.tox:not([dir=rtl]) .tox-form__controls-h-stack>:not(:first-child){margin-left:4px}.tox[dir=rtl] .tox-form__controls-h-stack>:not(:first-child){margin-right:4px}.tox .tox-lock.tox-locked .tox-lock-icon__unlock,.tox .tox-lock:not(.tox-locked) .tox-lock-icon__lock{display:none}.tox .tox-listboxfield .tox-listbox--select,.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#eee;border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;box-sizing:border-box;color:#222f3e;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px;line-height:24px;margin:0;min-height:34px;outline:0;padding:5px 5.5px;resize:none;width:100%}.tox .tox-textarea[disabled],.tox .tox-textfield[disabled]{background-color:#f2f2f2;color:rgba(34,47,62,.85);cursor:not-allowed}.tox .tox-listboxfield .tox-listbox--select:focus,.tox .tox-textarea:focus,.tox .tox-textfield:focus{background-color:#fff;border-color:#006ce7;box-shadow:0 0 0 2px rgba(0,108,231,.25);outline:0}.tox .tox-toolbar-textfield{border-width:0;margin-bottom:3px;margin-top:2px;max-width:250px}.tox .tox-naked-btn{background-color:transparent;border:0;border-color:transparent;box-shadow:unset;color:#006ce7;cursor:pointer;display:block;margin:0;padding:0}.tox .tox-naked-btn svg{display:block;fill:#222f3e}.tox:not([dir=rtl]) .tox-toolbar-textfield+*{margin-left:4px}.tox[dir=rtl] .tox-toolbar-textfield+*{margin-right:4px}.tox .tox-listboxfield{cursor:pointer;position:relative}.tox .tox-listboxfield .tox-listbox--select[disabled]{background-color:#f2f2f2;color:rgba(34,47,62,.85);cursor:not-allowed}.tox .tox-listbox__select-label{cursor:default;flex:1;margin:0 4px}.tox .tox-listbox__select-chevron{align-items:center;display:flex;justify-content:center;width:16px}.tox .tox-listbox__select-chevron svg{fill:#222f3e}.tox .tox-listboxfield .tox-listbox--select{align-items:center;display:flex}.tox:not([dir=rtl]) .tox-listboxfield svg{right:8px}.tox[dir=rtl] .tox-listboxfield svg{left:8px}.tox .tox-selectfield{cursor:pointer;position:relative}.tox .tox-selectfield select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#eee;border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;box-sizing:border-box;color:#222f3e;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px;line-height:24px;margin:0;min-height:34px;outline:0;padding:5px 5.5px;resize:none;width:100%}.tox .tox-selectfield select[disabled]{background-color:#f2f2f2;color:rgba(34,47,62,.85);cursor:not-allowed}.tox .tox-selectfield select::-ms-expand{display:none}.tox .tox-selectfield select:focus{background-color:#fff;border-color:#006ce7;box-shadow:0 0 0 2px rgba(0,108,231,.25);outline:0}.tox .tox-selectfield svg{pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}.tox:not([dir=rtl]) .tox-selectfield select[size="0"],.tox:not([dir=rtl]) .tox-selectfield select[size="1"]{padding-right:24px}.tox:not([dir=rtl]) .tox-selectfield svg{right:8px}.tox[dir=rtl] .tox-selectfield select[size="0"],.tox[dir=rtl] .tox-selectfield select[size="1"]{padding-left:24px}.tox[dir=rtl] .tox-selectfield svg{left:8px}.tox .tox-textarea{-webkit-appearance:textarea;-moz-appearance:textarea;appearance:textarea;white-space:pre-wrap}.tox-fullscreen{border:0;height:100%;margin:0;overflow:hidden;overscroll-behavior:none;padding:0;touch-action:pinch-zoom;width:100%}.tox.tox-tinymce.tox-fullscreen .tox-statusbar__resize-handle{display:none}.tox-shadowhost.tox-fullscreen,.tox.tox-tinymce.tox-fullscreen{left:0;position:fixed;top:0;z-index:1200}.tox.tox-tinymce.tox-fullscreen{background-color:transparent}.tox-fullscreen .tox.tox-tinymce-aux,.tox-fullscreen~.tox.tox-tinymce-aux{z-index:1201}.tox .tox-help__more-link{list-style:none;margin-top:1em}.tox .tox-imagepreview{background-color:#666;height:380px;overflow:hidden;position:relative;width:100%}.tox .tox-imagepreview.tox-imagepreview__loaded{overflow:auto}.tox .tox-imagepreview__container{display:flex;left:100vw;position:absolute;top:100vw}.tox .tox-imagepreview__image{background:url(data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw==)}.tox .tox-image-tools .tox-spacer{flex:1}.tox .tox-image-tools .tox-bar{align-items:center;display:flex;height:60px;justify-content:center}.tox .tox-image-tools .tox-imagepreview,.tox .tox-image-tools .tox-imagepreview+.tox-bar{margin-top:8px}.tox .tox-image-tools .tox-croprect-block{background:#000;opacity:.5;position:absolute;zoom:1}.tox .tox-image-tools .tox-croprect-handle{border:2px solid #fff;height:20px;left:0;position:absolute;top:0;width:20px}.tox .tox-image-tools .tox-croprect-handle-move{border:0;cursor:move;position:absolute}.tox .tox-image-tools .tox-croprect-handle-nw{border-width:2px 0 0 2px;cursor:nw-resize;left:100px;margin:-2px 0 0 -2px;top:100px}.tox .tox-image-tools .tox-croprect-handle-ne{border-width:2px 2px 0 0;cursor:ne-resize;left:200px;margin:-2px 0 0 -20px;top:100px}.tox .tox-image-tools .tox-croprect-handle-sw{border-width:0 0 2px 2px;cursor:sw-resize;left:100px;margin:-20px 2px 0 -2px;top:200px}.tox .tox-image-tools .tox-croprect-handle-se{border-width:0 2px 2px 0;cursor:se-resize;left:200px;margin:-20px 0 0 -20px;top:200px}.tox .tox-insert-table-picker{display:flex;flex-wrap:wrap;width:170px}.tox .tox-insert-table-picker>div{border-color:#eee;border-style:solid;border-width:0 1px 1px 0;box-sizing:border-box;height:17px;width:17px}.tox .tox-collection--list .tox-collection__group .tox-insert-table-picker{margin:-4px -4px}.tox .tox-insert-table-picker .tox-insert-table-picker__selected{background-color:rgba(0,108,231,.5);border-color:rgba(0,108,231,.5)}.tox .tox-insert-table-picker__label{color:rgba(34,47,62,.7);display:block;font-size:14px;padding:4px;text-align:center;width:100%}.tox:not([dir=rtl]) .tox-insert-table-picker>div:nth-child(10n){border-right:0}.tox[dir=rtl] .tox-insert-table-picker>div:nth-child(10n+1){border-right:0}.tox .tox-menu{background-color:#fff;border:1px solid transparent;border-radius:6px;box-shadow:0 0 2px 0 rgba(34,47,62,.2),0 4px 8px 0 rgba(34,47,62,.15);display:inline-block;overflow:hidden;vertical-align:top;z-index:1150}.tox .tox-menu.tox-collection.tox-collection--list{padding:0 4px}.tox .tox-menu.tox-collection.tox-collection--toolbar{padding:8px}.tox .tox-menu.tox-collection.tox-collection--grid{padding:8px}@media only screen and (min-width:768px){.tox .tox-menu .tox-collection__item-label{overflow-wrap:break-word;word-break:normal}}.tox .tox-menu__label blockquote,.tox .tox-menu__label code,.tox .tox-menu__label h1,.tox .tox-menu__label h2,.tox .tox-menu__label h3,.tox .tox-menu__label h4,.tox .tox-menu__label h5,.tox .tox-menu__label h6,.tox .tox-menu__label p{margin:0}.tox .tox-menubar{background:repeating-linear-gradient(transparent 0 1px,transparent 1px 39px) center top 39px/100% calc(100% - 39px) no-repeat;background-color:#fff;display:flex;flex:0 0 auto;flex-shrink:0;flex-wrap:wrap;grid-column:1/-1;grid-row:1;padding:0 11px 0 12px}.tox .tox-promotion+.tox-menubar{grid-column:1}.tox .tox-promotion{background:repeating-linear-gradient(transparent 0 1px,transparent 1px 39px) center top 39px/100% calc(100% - 39px) no-repeat;background-color:#fff;grid-column:2;grid-row:1;padding-inline-end:8px;padding-inline-start:4px;padding-top:5px}.tox .tox-promotion-link{align-items:unsafe center;background-color:#e8f1f8;border-radius:5px;color:#086be6;cursor:pointer;display:flex;font-size:14px;height:26.6px;padding:4px 8px;white-space:nowrap}.tox .tox-promotion-link:hover{background-color:#b4d7ff}.tox .tox-promotion-link:focus{background-color:#d9edf7}.tox .tox-mbtn{align-items:center;background:0 0;border:0;border-radius:3px;box-shadow:none;color:#222f3e;display:flex;flex:0 0 auto;font-size:14px;font-style:normal;font-weight:400;height:28px;justify-content:center;margin:5px 1px 6px 0;outline:0;overflow:hidden;padding:0 4px;text-transform:none;width:auto}.tox .tox-mbtn[disabled]{background-color:transparent;border:0;box-shadow:none;color:rgba(34,47,62,.5);cursor:not-allowed}.tox .tox-mbtn:focus:not(:disabled){background:#cce2fa;border:0;box-shadow:none;color:#222f3e}.tox .tox-mbtn--active{background:#a6ccf7;border:0;box-shadow:none;color:#222f3e}.tox .tox-mbtn:hover:not(:disabled):not(.tox-mbtn--active){background:#cce2fa;border:0;box-shadow:none;color:#222f3e}.tox .tox-mbtn__select-label{cursor:default;font-weight:400;margin:0 4px}.tox .tox-mbtn[disabled] .tox-mbtn__select-label{cursor:not-allowed}.tox .tox-mbtn__select-chevron{align-items:center;display:flex;justify-content:center;width:16px;display:none}.tox .tox-notification{border-radius:6px;border-style:solid;border-width:1px;box-shadow:none;box-sizing:border-box;display:grid;font-size:14px;font-weight:400;grid-template-columns:minmax(40px,1fr) auto minmax(40px,1fr);margin-top:4px;opacity:0;padding:4px;transition:transform .1s ease-in,opacity 150ms ease-in}.tox .tox-notification p{font-size:14px;font-weight:400}.tox .tox-notification a{cursor:pointer;text-decoration:underline}.tox .tox-notification--in{opacity:1}.tox .tox-notification--success{background-color:#e4eeda;border-color:#d7e6c8;color:#222f3e}.tox .tox-notification--success p{color:#222f3e}.tox .tox-notification--success a{color:#517342}.tox .tox-notification--success svg{fill:#222f3e}.tox .tox-notification--error{background-color:#f5cccc;border-color:#f0b3b3;color:#222f3e}.tox .tox-notification--error p{color:#222f3e}.tox .tox-notification--error a{color:#77181f}.tox .tox-notification--error svg{fill:#222f3e}.tox .tox-notification--warn,.tox .tox-notification--warning{background-color:#fff5cc;border-color:#fff0b3;color:#222f3e}.tox .tox-notification--warn p,.tox .tox-notification--warning p{color:#222f3e}.tox .tox-notification--warn a,.tox .tox-notification--warning a{color:#7a6e25}.tox .tox-notification--warn svg,.tox .tox-notification--warning svg{fill:#222f3e}.tox .tox-notification--info{background-color:#d6e7fb;border-color:#c1dbf9;color:#222f3e}.tox .tox-notification--info p{color:#222f3e}.tox .tox-notification--info a{color:#2a64a6}.tox .tox-notification--info svg{fill:#222f3e}.tox .tox-notification__body{align-self:center;color:#222f3e;font-size:14px;grid-column-end:3;grid-column-start:2;grid-row-end:2;grid-row-start:1;text-align:center;white-space:normal;word-break:break-all;word-break:break-word}.tox .tox-notification__body>*{margin:0}.tox .tox-notification__body>*+*{margin-top:1rem}.tox .tox-notification__icon{align-self:center;grid-column-end:2;grid-column-start:1;grid-row-end:2;grid-row-start:1;justify-self:end}.tox .tox-notification__icon svg{display:block}.tox .tox-notification__dismiss{align-self:start;grid-column-end:4;grid-column-start:3;grid-row-end:2;grid-row-start:1;justify-self:end}.tox .tox-notification .tox-progress-bar{grid-column-end:4;grid-column-start:1;grid-row-end:3;grid-row-start:2;justify-self:center}.tox .tox-pop{display:inline-block;position:relative}.tox .tox-pop--resizing{transition:width .1s ease}.tox .tox-pop--resizing .tox-toolbar,.tox .tox-pop--resizing .tox-toolbar__group{flex-wrap:nowrap}.tox .tox-pop--transition{transition:.15s ease;transition-property:left,right,top,bottom}.tox .tox-pop--transition::after,.tox .tox-pop--transition::before{transition:all .15s,visibility 0s,opacity 75ms ease 75ms}.tox .tox-pop__dialog{background-color:#fff;border:1px solid #eee;border-radius:6px;box-shadow:0 0 2px 0 rgba(34,47,62,.2),0 4px 8px 0 rgba(34,47,62,.15);min-width:0;overflow:hidden}.tox .tox-pop__dialog>:not(.tox-toolbar){margin:4px 4px 4px 8px}.tox .tox-pop__dialog .tox-toolbar{background-color:transparent;margin-bottom:-1px}.tox .tox-pop::after,.tox .tox-pop::before{border-style:solid;content:'';display:block;height:0;opacity:1;position:absolute;width:0}.tox .tox-pop.tox-pop--inset::after,.tox .tox-pop.tox-pop--inset::before{opacity:0;transition:all 0s .15s,visibility 0s,opacity 75ms ease}.tox .tox-pop.tox-pop--bottom::after,.tox .tox-pop.tox-pop--bottom::before{left:50%;top:100%}.tox .tox-pop.tox-pop--bottom::after{border-color:#fff transparent transparent transparent;border-width:8px;margin-left:-8px;margin-top:-1px}.tox .tox-pop.tox-pop--bottom::before{border-color:#eee transparent transparent transparent;border-width:9px;margin-left:-9px}.tox .tox-pop.tox-pop--top::after,.tox .tox-pop.tox-pop--top::before{left:50%;top:0;transform:translateY(-100%)}.tox .tox-pop.tox-pop--top::after{border-color:transparent transparent #fff transparent;border-width:8px;margin-left:-8px;margin-top:1px}.tox .tox-pop.tox-pop--top::before{border-color:transparent transparent #eee transparent;border-width:9px;margin-left:-9px}.tox .tox-pop.tox-pop--left::after,.tox .tox-pop.tox-pop--left::before{left:0;top:calc(50% - 1px);transform:translateY(-50%)}.tox .tox-pop.tox-pop--left::after{border-color:transparent #fff transparent transparent;border-width:8px;margin-left:-15px}.tox .tox-pop.tox-pop--left::before{border-color:transparent #eee transparent transparent;border-width:10px;margin-left:-19px}.tox .tox-pop.tox-pop--right::after,.tox .tox-pop.tox-pop--right::before{left:100%;top:calc(50% + 1px);transform:translateY(-50%)}.tox .tox-pop.tox-pop--right::after{border-color:transparent transparent transparent #fff;border-width:8px;margin-left:-1px}.tox .tox-pop.tox-pop--right::before{border-color:transparent transparent transparent #eee;border-width:10px;margin-left:-1px}.tox .tox-pop.tox-pop--align-left::after,.tox .tox-pop.tox-pop--align-left::before{left:20px}.tox .tox-pop.tox-pop--align-right::after,.tox .tox-pop.tox-pop--align-right::before{left:calc(100% - 20px)}.tox .tox-sidebar-wrap{display:flex;flex-direction:row;flex-grow:1;min-height:0}.tox .tox-sidebar{background-color:#fff;display:flex;flex-direction:row;justify-content:flex-end}.tox .tox-sidebar__slider{display:flex;overflow:hidden}.tox .tox-sidebar__pane-container{display:flex}.tox .tox-sidebar__pane{display:flex}.tox .tox-sidebar--sliding-closed{opacity:0}.tox .tox-sidebar--sliding-open{opacity:1}.tox .tox-sidebar--sliding-growing,.tox .tox-sidebar--sliding-shrinking{transition:width .5s ease,opacity .5s ease}.tox .tox-selector{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;display:inline-block;height:10px;position:absolute;width:10px}.tox.tox-platform-touch .tox-selector{height:12px;width:12px}.tox .tox-slider{align-items:center;display:flex;flex:1;height:24px;justify-content:center;position:relative}.tox .tox-slider__rail{background-color:transparent;border:1px solid #eee;border-radius:6px;height:10px;min-width:120px;width:100%}.tox .tox-slider__handle{background-color:#006ce7;border:2px solid #0054b4;border-radius:6px;box-shadow:none;height:24px;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:14px}.tox .tox-form__controls-h-stack>.tox-slider:not(:first-of-type){margin-inline-start:8px}.tox .tox-form__controls-h-stack>.tox-form__group+.tox-slider{margin-inline-start:32px}.tox .tox-form__controls-h-stack>.tox-slider+.tox-form__group{margin-inline-start:32px}.tox .tox-source-code{overflow:auto}.tox .tox-spinner{display:flex}.tox .tox-spinner>div{animation:tam-bouncing-dots 1.5s ease-in-out 0s infinite both;background-color:rgba(34,47,62,.7);border-radius:100%;height:8px;width:8px}.tox .tox-spinner>div:nth-child(1){animation-delay:-.32s}.tox .tox-spinner>div:nth-child(2){animation-delay:-.16s}@keyframes tam-bouncing-dots{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.tox:not([dir=rtl]) .tox-spinner>div:not(:first-child){margin-left:4px}.tox[dir=rtl] .tox-spinner>div:not(:first-child){margin-right:4px}.tox .tox-statusbar{align-items:center;background-color:#fff;border-top:1px solid #e3e3e3;color:rgba(34,47,62,.7);display:flex;flex:0 0 auto;font-size:14px;font-weight:400;height:25px;overflow:hidden;padding:0 8px;position:relative;text-transform:none}.tox .tox-statusbar__text-container{display:flex;flex:1 1 auto;justify-content:flex-end;overflow:hidden}.tox .tox-statusbar__path{display:flex;flex:1 1 auto;margin-right:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tox .tox-statusbar__path>*{display:inline;white-space:nowrap}.tox .tox-statusbar__wordcount{flex:0 0 auto;margin-left:1ch}.tox .tox-statusbar a,.tox .tox-statusbar__path-item,.tox .tox-statusbar__wordcount{color:rgba(34,47,62,.7);text-decoration:none}.tox .tox-statusbar a:focus:not(:disabled):not([aria-disabled=true]),.tox .tox-statusbar a:hover:not(:disabled):not([aria-disabled=true]),.tox .tox-statusbar__path-item:focus:not(:disabled):not([aria-disabled=true]),.tox .tox-statusbar__path-item:hover:not(:disabled):not([aria-disabled=true]),.tox .tox-statusbar__wordcount:focus:not(:disabled):not([aria-disabled=true]),.tox .tox-statusbar__wordcount:hover:not(:disabled):not([aria-disabled=true]){color:#222f3e;cursor:pointer}.tox .tox-statusbar__branding svg{fill:rgba(34,47,62,.8);height:1.14em;vertical-align:-.28em;width:3.6em}.tox .tox-statusbar__branding a:focus:not(:disabled):not([aria-disabled=true]) svg,.tox .tox-statusbar__branding a:hover:not(:disabled):not([aria-disabled=true]) svg{fill:#222f3e}.tox .tox-statusbar__resize-handle{align-items:flex-end;align-self:stretch;cursor:nwse-resize;display:flex;flex:0 0 auto;justify-content:flex-end;margin-left:auto;margin-right:-8px;padding-bottom:3px;padding-left:1ch;padding-right:3px}.tox .tox-statusbar__resize-handle svg{display:block;fill:rgba(34,47,62,.5)}.tox .tox-statusbar__resize-handle:focus svg{background-color:#dee0e2;border-radius:1px 1px 5px 1px;box-shadow:0 0 0 2px #dee0e2}.tox:not([dir=rtl]) .tox-statusbar__path>*{margin-right:4px}.tox:not([dir=rtl]) .tox-statusbar__branding{margin-left:2ch}.tox[dir=rtl] .tox-statusbar{flex-direction:row-reverse}.tox[dir=rtl] .tox-statusbar__path>*{margin-left:4px}.tox .tox-throbber{z-index:1299}.tox .tox-throbber__busy-spinner{align-items:center;background-color:rgba(255,255,255,.6);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0}.tox .tox-tbtn{align-items:center;background:0 0;border:0;border-radius:3px;box-shadow:none;color:#222f3e;display:flex;flex:0 0 auto;font-size:14px;font-style:normal;font-weight:400;height:28px;justify-content:center;margin:6px 1px 5px 0;outline:0;overflow:hidden;padding:0;text-transform:none;width:34px}.tox .tox-tbtn svg{display:block;fill:#222f3e}.tox .tox-tbtn.tox-tbtn-more{padding-left:5px;padding-right:5px;width:inherit}.tox .tox-tbtn:focus{background:#cce2fa;border:0;box-shadow:none}.tox .tox-tbtn:hover{background:#cce2fa;border:0;box-shadow:none;color:#222f3e}.tox .tox-tbtn:hover svg{fill:#222f3e}.tox .tox-tbtn:active{background:#a6ccf7;border:0;box-shadow:none;color:#222f3e}.tox .tox-tbtn:active svg{fill:#222f3e}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background:0 0;border:0;box-shadow:none;color:rgba(34,47,62,.5);cursor:not-allowed}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:rgba(34,47,62,.5)}.tox .tox-tbtn--enabled,.tox .tox-tbtn--enabled:hover{background:#a6ccf7;border:0;box-shadow:none;color:#222f3e}.tox .tox-tbtn--enabled:hover>*,.tox .tox-tbtn--enabled>*{transform:none}.tox .tox-tbtn--enabled svg,.tox .tox-tbtn--enabled:hover svg{fill:#222f3e}.tox .tox-tbtn:focus:not(.tox-tbtn--disabled){color:#222f3e}.tox .tox-tbtn:focus:not(.tox-tbtn--disabled) svg{fill:#222f3e}.tox .tox-tbtn:active>*{transform:none}.tox .tox-tbtn--md{height:42px;width:51px}.tox .tox-tbtn--lg{flex-direction:column;height:56px;width:68px}.tox .tox-tbtn--return{align-self:stretch;height:unset;width:16px}.tox .tox-tbtn--labeled{padding:0 4px;width:unset}.tox .tox-tbtn__vlabel{display:block;font-size:10px;font-weight:400;letter-spacing:-.025em;margin-bottom:4px;white-space:nowrap}.tox .tox-tbtn--select{margin:6px 1px 5px 0;padding:0 4px;width:auto}.tox .tox-tbtn__select-label{cursor:default;font-weight:400;margin:0 4px}.tox .tox-tbtn__select-chevron{align-items:center;display:flex;justify-content:center;width:16px}.tox .tox-tbtn__select-chevron svg{fill:rgba(34,47,62,.5)}.tox .tox-tbtn--bespoke{background:#f7f7f7}.tox .tox-tbtn--bespoke+.tox-tbtn--bespoke{margin-inline-start:4px}.tox .tox-tbtn--bespoke .tox-tbtn__select-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:7em}.tox .tox-split-button{border:0;border-radius:3px;box-sizing:border-box;display:flex;margin:6px 1px 5px 0;overflow:hidden}.tox .tox-split-button:hover{box-shadow:0 0 0 1px #cce2fa inset}.tox .tox-split-button:focus{background:#cce2fa;box-shadow:none;color:#222f3e}.tox .tox-split-button>*{border-radius:0}.tox .tox-split-button__chevron{width:16px}.tox .tox-split-button__chevron svg{fill:rgba(34,47,62,.5)}.tox .tox-split-button .tox-tbtn{margin:0}.tox .tox-split-button.tox-tbtn--disabled .tox-tbtn:focus,.tox .tox-split-button.tox-tbtn--disabled .tox-tbtn:hover,.tox .tox-split-button.tox-tbtn--disabled:focus,.tox .tox-split-button.tox-tbtn--disabled:hover{background:0 0;box-shadow:none;color:rgba(34,47,62,.5)}.tox.tox-platform-touch .tox-split-button .tox-tbtn--select{padding:0 0}.tox.tox-platform-touch .tox-split-button .tox-tbtn:not(.tox-tbtn--select):first-child{width:30px}.tox.tox-platform-touch .tox-split-button__chevron{width:20px}.tox .tox-toolbar-overlord{background-color:#fff}.tox .tox-toolbar,.tox .tox-toolbar__overflow,.tox .tox-toolbar__primary{background-color:#fff;background-image:repeating-linear-gradient(#e3e3e3 0 1px,transparent 1px 39px);background-position:center top 40px;background-repeat:no-repeat;background-size:calc(100% - 11px * 2) calc(100% - 41px);display:flex;flex:0 0 auto;flex-shrink:0;flex-wrap:wrap;padding:0 0;transform:perspective(1px)}.tox .tox-toolbar-overlord>.tox-toolbar,.tox .tox-toolbar-overlord>.tox-toolbar__overflow,.tox .tox-toolbar-overlord>.tox-toolbar__primary{background-position:center top 0;background-size:calc(100% - 11px * 2) calc(100% - 0px)}.tox .tox-toolbar__overflow.tox-toolbar__overflow--closed{height:0;opacity:0;padding-bottom:0;padding-top:0;visibility:hidden}.tox .tox-toolbar__overflow--growing{transition:height .3s ease,opacity .2s linear .1s}.tox .tox-toolbar__overflow--shrinking{transition:opacity .3s ease,height .2s linear .1s,visibility 0s linear .3s}.tox .tox-anchorbar,.tox .tox-toolbar-overlord{grid-column:1/-1}.tox .tox-menubar+.tox-toolbar,.tox .tox-menubar+.tox-toolbar-overlord{border-top:1px solid transparent;margin-top:-1px;padding-bottom:1px;padding-top:1px}.tox .tox-toolbar--scrolling{flex-wrap:nowrap;overflow-x:auto}.tox .tox-pop .tox-toolbar{border-width:0}.tox .tox-toolbar--no-divider{background-image:none}.tox .tox-toolbar-overlord .tox-toolbar:not(.tox-toolbar--scrolling):first-child,.tox .tox-toolbar-overlord .tox-toolbar__primary{background-position:center top 39px}.tox .tox-editor-header>.tox-toolbar--scrolling,.tox .tox-toolbar-overlord .tox-toolbar--scrolling:first-child{background-image:none}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#fff;background-position:center top 43px;background-size:calc(100% - 8px * 2) calc(100% - 51px);border:none;border-radius:6px;box-shadow:0 0 2px 0 rgba(34,47,62,.2),0 4px 8px 0 rgba(34,47,62,.15);padding:4px 0}.tox-pop .tox-pop__dialog .tox-toolbar{background-position:center top 43px;background-size:calc(100% - 11px * 2) calc(100% - 51px);padding:4px 0}.tox .tox-toolbar__group{align-items:center;display:flex;flex-wrap:wrap;margin:0 0;padding:0 11px 0 12px}.tox .tox-toolbar__group--pull-right{margin-left:auto}.tox .tox-toolbar--scrolling .tox-toolbar__group{flex-shrink:0;flex-wrap:nowrap}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid transparent}.tox[dir=rtl] .tox-toolbar__group:not(:last-of-type){border-left:1px solid transparent}.tox .tox-tooltip{display:inline-block;padding:8px;position:relative}.tox .tox-tooltip__body{background-color:#222f3e;border-radius:6px;box-shadow:0 2px 4px rgba(34,47,62,.3);color:rgba(255,255,255,.75);font-size:14px;font-style:normal;font-weight:400;padding:4px 8px;text-transform:none}.tox .tox-tooltip__arrow{position:absolute}.tox .tox-tooltip--down .tox-tooltip__arrow{border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #222f3e;bottom:0;left:50%;position:absolute;transform:translateX(-50%)}.tox .tox-tooltip--up .tox-tooltip__arrow{border-bottom:8px solid #222f3e;border-left:8px solid transparent;border-right:8px solid transparent;left:50%;position:absolute;top:0;transform:translateX(-50%)}.tox .tox-tooltip--right .tox-tooltip__arrow{border-bottom:8px solid transparent;border-left:8px solid #222f3e;border-top:8px solid transparent;position:absolute;right:0;top:50%;transform:translateY(-50%)}.tox .tox-tooltip--left .tox-tooltip__arrow{border-bottom:8px solid transparent;border-right:8px solid #222f3e;border-top:8px solid transparent;left:0;position:absolute;top:50%;transform:translateY(-50%)}.tox .tox-well{border:1px solid #eee;border-radius:6px;padding:8px;width:100%}.tox .tox-well>:first-child{margin-top:0}.tox .tox-well>:last-child{margin-bottom:0}.tox .tox-well>:only-child{margin:0}.tox .tox-custom-editor{border:1px solid #eee;border-radius:6px;display:flex;flex:1;position:relative}.tox .tox-dialog-loading::before{background-color:rgba(0,0,0,.5);content:"";height:100%;position:absolute;width:100%;z-index:1000}.tox .tox-tab{cursor:pointer}.tox .tox-dialog__content-js{display:flex;flex:1}.tox .tox-dialog__body-content .tox-collection{display:flex;flex:1}

  body.tox-dialog__disable-scroll{overflow:hidden}.tox-fullscreen{border:0;height:100%;margin:0;overflow:hidden;overscroll-behavior:none;padding:0;touch-action:pinch-zoom;width:100%}.tox.tox-tinymce.tox-fullscreen .tox-statusbar__resize-handle{display:none}.tox-shadowhost.tox-fullscreen,.tox.tox-tinymce.tox-fullscreen{left:0;position:fixed;top:0;z-index:1200}.tox.tox-tinymce.tox-fullscreen{background-color:transparent}.tox-fullscreen .tox.tox-tinymce-aux,.tox-fullscreen~.tox.tox-tinymce-aux{z-index:1201}

 /*Custom TOX*/

.tox-editor-header,
.tox-toolbar__primary,
.tox .tox-toolbar-overlord{
  background-color: transparent !important;
}

.tox-editor-header{
  border-bottom: 1px solid var(--input-border-color) !important;
}

.tox-statusbar{
  border-top: 1px solid var(--input-border-color) !important;
  border-top: 1px solid var(--input-border-color) !important;
}

.tox-statusbar__text-container{
  opacity: .5;
}

.tox .tox-edit-area__iframe,
.tox-statusbar,
.tox .tox-tbtn--enabled{
  background: transparent !important;
  background-color: transparent !important;
  color: var(--sl-color-neutral-900) !important;
}

.tox .tox-tbtn svg,
.tox .tox-statusbar__branding svg,
.tox .tox-swatches__picker-btn svg,
.tox .tox-collection__item-caret svg{
  fill: var(--sl-color-neutral-900) !important;
}

.tox .tox-statusbar a, .tox .tox-statusbar__path-item, .tox .tox-statusbar__wordcount,
.tox .tox-collection__item,
.tox-insert-table-picker__label,
.tox .tox-dialog__body,
.tox .tox-button--naked{
  color: var(--sl-color-neutral-900) !important;
}

.tox .tox-tbtn:hover,
.tox .tox-split-button:hover,
.tox .tox-tbtn--select{
  background: transparent !important;
  background-color: transparent;
  color: var(--sl-color-neutral-900) !important;
  border: 1px solid var(--sl-color-neutral-900);
  box-shadow: none !important;
}

.tox-toolbar__overflow{
  background-color: var(--sl-color-neutral-50) !important;
  border: 1px solid var(--sl-color-neutral-900) !important;
}

.tox-menu,
.tox .tox-dialog{
  background-color: var(--sl-color-neutral-50) !important;
  color: var(--sl-color-neutral-900) !important;
  border: 1px solid var(--sl-color-neutral-900) !important;
}

.tox-dialog__header,
.tox-dialog__footer{
  background-color: transparent !important;
  color: var(--sl-color-neutral-900) !important;
}

.tox-dialog-wrap__backdrop{
  background-color: var(--sl-color-neutral-50) !important;
  opacity: .5;
}

.tox-tbtn,
.tox .tox-split-button{
  background: transparent !important;
  background-color: transparent !important;
  border: 1px solid transparent;
}

.tox-tbtn.tox-tbtn--enabled,
.tox-tbtn[aria-pressed="true"],
.tox .tox-collection--list .tox-collection__item--active{
  background: transparent !important;
  background-color: transparent !important;
  border: 1px solid var(--sl-color-neutral-900) !important;
}

.tox .tox-collection--list .tox-collection__item{
  border: 1px solid transparent;
}

.tox .tox-toolbar, .tox .tox-toolbar__overflow, .tox .tox-toolbar__primary{
  background-image: none !important;
}

  /*Codemirror*/
  #controls {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
  }
  #controls > * {
    margin-bottom: 5px;
  }
  #controls button {
    font-family: sans-serif;
    background: #eee;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 2px 5px;
  }
  #controls button.active {
    background: #eef;
    border-color: #55b;
    color: #005;
  }
  #controls button:hover {
    background: white;
  }
  #controls button:active {
    background: #ccc;
  }
  #controls .separator {
    flex-grow: 1;
  }

  #surface {
    display: flex;
    align-content: stretch;
    align-items: stretch;
    height: 80vh;
    position: relative;
    border: 1px solid #666;
  }
  #editor, #output, #log {
    flex-basis: 100%;
    box-sizing: border-box;
    display: none;
  }
  #log {
    overflow-y: auto;
    padding: 3px 7px;
    font-size: 80%;
  }
  #output iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  #editor .cm-editor {
    height: 100%;
    max-height: none;
    border: none;
  }
  #editor .cm-scroller {
    overflow: auto;
  }

  .notification {
    position: fixed;
    background: #ffd;
    border: 1px solid #880;
    border-radius: 3px;
    padding: 2px 5px;
  }

  @media screen and (min-width: 1200px) {
    #tab_editor { display: none }
    article, header, footer nav { max-width: 1150px; }
    #editor { display: block !important; border-right: 1px solid #666; }
    #editor, #output, #log { flex-basis: 50%; width: 50%; }
  }
  @media screen and (max-width: 570px) {
    #controls .separator {
      flex-basis: 100%;
    }
  }

  .log-prop-table {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-left: 1em;
  }
  .log-prop-table > .tok-property {
    justify-self: end;
  }
  .log-etc {
    border: none;
    color: #060;
    text-decoration: underline;
    padding: 0;
    background: transparent;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  .log-frames {
    color: #338;
    margin-left: 1em;
  }
  .log-log {
    font-family: monospace;
  }

  /*
     * Render edit-view in table
  */

  .bone-table-wrapper{
    display: flex;
    flex-direction: column;
    padding: var(--sl-spacing-x-small);
    width: 100%;
  }

  .bone-table-wrapper sl-button::part(base){
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width));
    border-radius: var(--sl-input-border-radius-small);
  }

  .bone-table-wrapper sl-input::part(base){
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width));
    border-radius: var(--sl-input-border-radius-small);
  }

  .bone-table-wrapper sl-input::part(input){
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width));
    padding: 0 var(--sl-input-spacing-small);
  }

  .bone-table-wrapper .drag-button{
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width));
    padding: 0 var(--sl-input-spacing-small);
  }

  .bone-table-wrapper .upload-button::part(base),
  .bone-table-wrapper .clear-button::part(base),
  .bone-table-wrapper .undo-button::part(base){
    aspect-ratio: 1;
  }

  .bone-table-wrapper .save-button{
    margin-top: var(--sl-spacing-medium);
  }

  .bone-table-wrapper .language-tab-group::part(base){
    margin-bottom: -10px;
  }

  .bone-table-wrapper .language-tab-group::part(body){
    padding-bottom: var(--sl-spacing-medium);
  }

  .bone-table-wrapper .tox{
    max-height: 190px;
  }


sl-select::part(tag__base){
  background-color: transparent;
  border: 1px solid var(--input-border-color);
  color: var(--sl-color-neutral-900);
}

sl-select::part(tag__remove-button){
  color: var(--sl-color-neutral-900);
}


`;
