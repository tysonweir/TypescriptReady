import * as angular from 'angular';
import './extensions/string';
import { app } from './app-module';

//require typescript files
let requireContext = require.context('./', true, /\.ts$/);
requireContext.keys().forEach(requireContext);

//bootstrap root application
angular.bootstrap(document, [app.name], {strictDi: true});