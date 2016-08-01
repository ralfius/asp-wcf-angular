class UserDetailsController {
    constructor() {
    }

    $onInit() {
    }

    $routerOnActivate(next) {
        this.userId = next.params.userId;
    };
}

export default UserDetailsController;