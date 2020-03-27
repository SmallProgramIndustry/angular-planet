import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { AppActualRootComponent } from './root/root.component';
import { EmptyComponent } from 'ngx-planet';
import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';

export const routers: Route[] = [
    {
        path: 'app1',
        component: AppActualRootComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'test',
                component: TestComponent
            },
            {
                path: 'users',
                loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
            // {
            //     path: 'users',
            //     component: UserListComponent,
            //     children: [
            //         {
            //             path: ':id',
            //             component: UserDetailComponent
            //         }
            //     ]
            // }
        ]
    },
    {
        path: '**',
        component: EmptyComponent
    }
];
