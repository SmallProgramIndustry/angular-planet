import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetApplicationLoader } from '../../application/planet-application-loader';
import { of } from 'rxjs';
import { PlanetComponentLoader } from '../planet-component-loader';

export const app3Name = 'app3';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [RouterModule.forChild([])],
    providers: [
        PlanetComponentLoader,
        {
            provide: PlanetApplicationLoader,
            useValue: {
                preload: () => {}
            }
        }
    ]
})
export class App3Module {
    constructor() {}
}
