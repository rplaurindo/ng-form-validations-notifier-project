// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Example Module imports
import { EventComponent } from './components/event/event.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';


const ROOT_ROUTES: Routes = [
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'data-bindings',
        component: DataBindingComponent
    },
    // {
    //     path: 'interpolation',
    //     // controller
    //     component: InterpolationComponent
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROOT_ROUTES, {
            // debugging purposes only
            // enableTracing: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
