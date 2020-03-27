import { SwitchModes } from '../planet.class';
const app1 = {
    name: 'app1',
    hostParent: '.host-selector',
    selector: 'app1-root-container',
    routerPathPrefix: '/app1',
    hostClass: 'app1-host',
    preload: false,
    switchMode: SwitchModes.default,
    resourcePathPrefix: '/static/app1/',
    styles: ['styles/main.css'],
    scripts: ['vendor.js', 'main.js'],
    loadSerial: false,
    manifest: '',
    extra: {
        appName: '应用1'
    }
};

const app1WithManifest = {
    ...app1,
    manifest: '/static/app/manifest.json'
};

const app1WithPreload = {
    ...app1,
    preload: true
};

const app2 = {
    name: 'app2',
    hostParent: '.host-selector',
    selector: 'app2-root-container',
    routerPathPrefix: '/app2',
    hostClass: 'app2-host',
    preload: false,
    switchMode: SwitchModes.coexist,
    resourcePathPrefix: '/static/app2',
    styles: ['styles/main.css'],
    scripts: ['vendor.js', 'main.js'],
    loadSerial: false,
    extra: {
        appName: '应用2'
    }
};

const app3 = {
    name: 'app3',
    hostParent: '.host-selector',
    selector: 'app3-root-container',
    routerPathPrefix: '/app3',
    hostClass: 'app3-host',
    preload: false,
    switchMode: SwitchModes.coexist,
    resourcePathPrefix: '/static/app3',
    styles: ['styles/main.css'],
    scripts: ['vendor.js', 'main.js'],
    loadSerial: false,
    extra: {
        appName: '应用3'
    }
};

const app2WithManifest = {
    ...app2,
    manifest: '/static/app/manifest.json'
};

const app2WithPreload = {
    ...app2,
    preload: true
};

const app3WithManifest = {
    ...app3,
    manifest: '/static/app/manifest.json'
};

const app3WithPreload = {
    ...app3,
    preload: true
};

export {
    app1,
    app1WithManifest,
    app1WithPreload,
    app2,
    app2WithManifest,
    app2WithPreload,
    app3,
    app3WithManifest,
    app3WithPreload
};
