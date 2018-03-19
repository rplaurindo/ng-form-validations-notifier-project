// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// app imports

// Modules
import { ExamplesRoutingModule } from './examples/examples-routing.module';

// Pipes
import { CustomPipePipe } from './examples/pipes/custom-pipe/custom-pipe.pipe';

// Directives
import { StructuralDirectiveDirective } from './examples/directives/structural-directive/structural-directive.directive';
import { YellowBackgroundOnEventlistenerDirective } from './examples/directives/yellow-background-on-eventlistener/yellow-background-on-eventlistener.directive';
import { LightgrayBackgroundDirective } from './examples/directives/lightgray-background/lightgray-background.directive';

// Components
import { NgContentExampleComponent } from './examples/components/ng-content-example/ng-content-example.component';
import { SafeNavigationComponent } from './examples/components/safe-navigation/safe-navigation.component';
import { ManipulatingDomComponent } from './examples/components/manipulating-dom/manipulating-dom.component';
import { DirectivesComponent } from './examples/components/directives/directives.component';
import { EventComponent } from './examples/components/event/event.component';
import { ComponentChildComponent } from './examples/components/component-child/component-child.component';
import { DataBindingComponent } from './examples/components/data-binding/data-binding.component';
import { InterpolationComponent } from './examples/components/interpolation/interpolation.component';
import { EventSubscribeComponent } from './examples/components/event-subscribe/event-subscribe.component';
import { RouteParamsComponent } from './examples/components/route-params/route-params.component';
import { RedirectingComponent } from './examples/components/redirecting/redirecting.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExamplesRoutingModule
  ],
  exports: [
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent,
    NgContentExampleComponent,
    EventSubscribeComponent,
    RouteParamsComponent,
    RedirectingComponent
  ],
  declarations: [
    CustomPipePipe,
    LightgrayBackgroundDirective,
    YellowBackgroundOnEventlistenerDirective,
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent,
    NgContentExampleComponent,
    StructuralDirectiveDirective,
    EventSubscribeComponent,
    RouteParamsComponent,
    RedirectingComponent
  ],
  providers: []
})
export class ExamplesModule { }
