import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noTestWordValidator(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value as string;

  if (!value) {
    return null;
  }

  return value.toLowerCase().includes('test')
    ? { forbiddenWord: true }
    : null;
}
