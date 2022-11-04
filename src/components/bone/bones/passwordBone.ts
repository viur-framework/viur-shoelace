// @ts-nocheck
import {RawBone} from "./rawBone";

export class PasswordBone extends RawBone {
  getEditor(value: string | null, boneName: string, lang: string | null = null): HTMLElement {
    const passwordBone = super.getEditor(value, boneName);
    passwordBone.type = "password";
    return passwordBone;

  }
}