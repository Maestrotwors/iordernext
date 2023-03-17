import { isPlatformServer } from '@angular/common';
import { Directive, inject, Inject, InjectionToken, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

export const IS_SERVER_PLATFORM = new InjectionToken<boolean>('Is server?', {
  factory() {
    return isPlatformServer(inject(PLATFORM_ID));
  },
});

@Directive({
  selector: '[ifIsServer]',
  standalone: true
})
export class IfIsServerDirective {
  constructor(
    @Inject(IS_SERVER_PLATFORM) isServer: boolean,
    templateRef: TemplateRef<any>,
    viewContainer: ViewContainerRef
  ) {
    if (isServer) {
      viewContainer.createEmbeddedView(templateRef);
    }
  }
}
