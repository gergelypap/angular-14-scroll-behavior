# Angular 14 Scroll Behavior Problem

By default, Angular keeps the scroll position between route changes. This
can be easily changed with [`scrollPositionRestoration: 'enabled'`](https://angular.io/api/router/ExtraOptions#scrollPositionRestoration) in the root routing module.

However, if you set [`scroll-behavior: smooth`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) on the `<html>` element in CSS, this behavior can be weird and sometimes it doesn't scroll to the top when changing routes too quickly. For this reason, it would be a good idea **not** to enable smooth scrolling in CSS. When the user navigates to a different page, more often than not, we don't want to have smooth scrolling to the top.

But what if we want smooth scrolling in the case of anchor links? We can solve it with a custom directive!

```html
<a appSmoothScroll href="#target">Scroll to target</a>
<section id="target"></section>
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-14-scroll-behavior)
