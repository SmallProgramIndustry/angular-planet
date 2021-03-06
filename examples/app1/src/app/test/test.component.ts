import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlanetComponentLoader } from 'ngx-planet';

@Component({
    selector: 'app-test',
    template: `
        <section-card class="mt-2" title="App2's Test component">
            <thy-loading [thyDone]="loadingDone"></thy-loading>
            <div #container></div>
        </section-card>
    `
})
export class TestComponent implements OnInit {
    @ViewChild('container', { static: true }) elementRef: ElementRef<HTMLDivElement>;

    loadingDone = false;

    constructor(private planetComponentLoader: PlanetComponentLoader) {}

    ngOnInit() {
        this.planetComponentLoader
            .load('app2', 'project1', {
                container: this.elementRef
            })
            .subscribe(componentRef => {
                this.loadingDone = true;
                componentRef.componentInstance.click.subscribe(() => {
                    console.log('project item clicked');
                });
            });
    }
}
