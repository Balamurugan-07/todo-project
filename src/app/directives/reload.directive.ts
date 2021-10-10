import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appReload]',
})
export class ReloadDirective {
  @HostListener('submit', ['$event'])
  public onSubmit(event: any): void {
    event.stopPropagation();
  }
}
