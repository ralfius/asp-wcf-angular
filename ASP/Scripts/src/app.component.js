const app = {
    template: 'This is an app component<ng-outlet></ng-outlet>',
    $routeConfig: [
        {path: '/users/...', name: 'Users', component: 'users'},
    ]
}

export default app;