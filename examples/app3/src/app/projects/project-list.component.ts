import { Component, EventEmitter, OnInit, DoCheck, ApplicationRef, HostBinding } from '@angular/core';
import { GlobalEventDispatcher } from 'ngx-planet';
import { ProjectService } from './projects.service';
import { ThyDialog } from 'ngx-tethys/dialog/dialog.service';
import { ProjectDetailComponent } from './detail/detail.component';
import { Router } from '@angular/router';
import { ThyGridRowEvent } from 'ngx-tethys/grid';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit, DoCheck {
    @HostBinding('class') class = 'thy-layout';

    constructor(
        private router: Router,
        private globalEventDispatcher: GlobalEventDispatcher,
        private projectService: ProjectService,
        private dialog: ThyDialog,
        private applicationRef: ApplicationRef
    ) {}

    click = new EventEmitter<any>();

    projects: any[];

    loadingDone: boolean;

    search: string;

    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        this.loadingDone = false;
        setTimeout(() => {
            this.projects = this.projectService.getProjects();
            this.loadingDone = true;
        }, 500);
    }

    openDetail(event: ThyGridRowEvent) {
        this.router.navigateByUrl(`/app3/projects/${event.row.id}`);
        this.click.emit();
        // this.dialog.open(ProjectDetailComponent, {
        //     hasBackdrop: true,
        //     backdropClosable: true,
        //     closeOnNavigation: true
        // });
    }

    ngDoCheck() {
        // this.applicationRef.tick();
        // console.log(window['appRef'] === this.applicationRef);
    }
}
