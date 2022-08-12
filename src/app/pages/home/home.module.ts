import { NgModule } from '@angular/core';
import { SmoothScrollDirective } from '@directives/smooth-scroll.directive';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HomeComponent, SmoothScrollDirective],
})
export class HomeModule {}
