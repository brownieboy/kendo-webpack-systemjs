import "kendo-ui/src/js/kendo.router.js";
import getModel from './models/northwind-customers-model.js';

import getNewDataSource from './modules/data-sources/northwind-customers-datasource.js';
import Table from './modules/northwind-customers-table.js';

const tableProps = {
    getNewDataSource: getNewDataSource,
    getModel: getModel
};

$(document).ready(function() {
    const myTable = new Table(tableProps);
    console.log("app started");

});
