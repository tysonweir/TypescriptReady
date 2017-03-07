import { Config, Inject } from './annotations';


@Config()
export class AppRouter {
	constructor(@Inject('$stateProvider') $stateProvider: any,
	            @Inject('$urlRouterProvider') $urlRouterProvider: any) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				template: '<home-page></home-page>'
			});
	}
}