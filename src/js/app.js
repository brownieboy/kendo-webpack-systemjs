import "kendo-ui/src/js/kendo.router.js";
import model from 'models/northwind-customers-model.js';

import TableFormatter from 'modules/data-sources/northwind-customers-datasource.js';

const tableProps = {
    TableFormatter: TableFormatter
};

$(document).ready(function() {
    console.log("app started");
});
