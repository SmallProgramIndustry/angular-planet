import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';
import { NgxTethysModule } from 'ngx-tethys';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routers } from './app.routing';
import { AppRootComponent, AppActualRootComponent } from './root/root.component';
import { DemoCommonModule } from '@demo/common';
import { NgxPlanetModule, PlanetComponentLoader } from 'ngx-planet';
import { UserModule } from './user/user.module';
import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [AppRootComponent, AppActualRootComponent, DashboardComponent, ProjectsComponent, TestComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routers),
        // UserModule,
        NgxTethysModule,
        DemoCommonModule,
        NgxPlanetModule
    ],
    providers: [],
    entryComponents: [DashboardComponent],
    bootstrap: [AppRootComponent]
})
export class AppModule {
    constructor(private planetComponentLoader: PlanetComponentLoader) {
        this.planetComponentLoader.register([{ name: 'dashboard', component: DashboardComponent }]);
    }
}
