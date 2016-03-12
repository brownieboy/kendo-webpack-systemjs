import "kendo-ui/src/js/kendo.router.js";
import getModel from './models/northwind-customers-model.js';

import TableFormatter from './modules/data-sources/northwind-customers-datasource.js';
import Table from './modules/northwind-customers-table.js';

const tableProps = {
    TableFormatter: TableFormatter,
    getModel: getModel
};

$(document).ready(function() {
    console.log("app started");
    const myTable = new Table(tableProps);

});
