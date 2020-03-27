import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service';
import { AppRootContext } from '@demo/common';
import { PlanetComponentRef, PlanetComponentLoader, PlanetPortalApplication, GlobalEventDispatcher } from 'ngx-planet';
import { ThyDialog } from 'ngx-tethys';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    @ViewChild('container', { static: true }) containerElementRef: ElementRef<HTMLDivElement>;
    @ViewChild('container1', { static: true }) container1ElementRef: ElementRef<HTMLDivElement>;

    private componentRef: PlanetComponentRef;
    private component1Ref: PlanetComponentRef;

    constructor(
        private planetPortal: PlanetPortalApplication,
        private router: Router,
        public counter: CounterService,
        private globalEventDispatcher: GlobalEventDispatcher,
        public appRootContext: AppRootContext,
        private dialog: ThyDialog,
        private planetComponentLoader: PlanetComponentLoader
    ) {}

    ngOnInit() {}

    openADetail() {
        this.globalEventDispatcher.dispatch('openADetail');
    }

    openApp2Component() {
        this.planetComponentLoader
            .load('app2', 'project1', {
                container: this.containerElementRef,
                initialState: {}
            })
            .subscribe(componentRef => {
                this.componentRef = componentRef;
            });
    }

    openApp1Component() {
        this.planetComponentLoader
            .load('app1', 'dashboard', {
                container: this.container1ElementRef,
                initialState: {}
            })
            .subscribe(component1Ref => {
                this.component1Ref = component1Ref;
            });
    }

    disposeApp2Component() {
        if (this.componentRef) {
            this.componentRef.dispose();
        }
    }

    disposeApp1Component() {
        if (this.component1Ref) {
            this.component1Ref.dispose();
        }
    }

    changeName(newName: string) {
        this.appRootContext.setName(newName);
        this.planetPortal.tick();
    }
}
