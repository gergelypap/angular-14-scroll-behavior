import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]',
})
export class SmoothScrollDirective implements OnInit {
  constructor(
    private readonly element: ElementRef<HTMLAnchorElement>,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  private get href(): string {
    return this.element.nativeElement.getAttribute('href') as string;
  }

  private get anchor(): string {
    return this.href.slice(this.href.indexOf('#'));
  }

  private get targetElement(): HTMLElement | null {
    return this.document.querySelector(this.anchor);
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    if (!this.targetElement) {
      console.warn(
        `No target element found in the document with ${this.anchor} id.`
      );
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.targetElement?.scrollIntoView({ behavior: 'smooth' });
    // Update the address bar, since we are preventing the default behavior.
    if (window.history.pushState) {
      window.history.pushState(null, '', this.href);
    }
  }

  public ngOnInit(): void {
    this.validate();
  }

  private validate(): void {
    if (!(this.element.nativeElement instanceof HTMLAnchorElement)) {
      console.error('This directive can only be used on <a> elements.');
    }
    if (!this.anchor || !this.anchor.startsWith('#')) {
      console.error('A valid anchor should be set in the `href` attribute.');
    }
  }
}
