import "kendo-ui/src/js/kendo.router.js";
// import getModel from './models/northwind-customers-model.js';

// import getNewDataSource from './modules/data-sources/northwind-customers-datasource.js';
// import Table from './modules/northwind-customers-table.js';

// const tableProps = {
//     getNewDataSource: getNewDataSource,
//     getModel: getModel
// };

import getTableClassDef from './modules/helpers/gettableclassdef.js';


$(document).ready(function() {
    const customersTableDef = getTableClassDef("northwind-customers");
    const customersTable = new customersTableDef.TableClass(customersTableDef.props);
    const ordersTableDef = getTableClassDef("northwind-orders");
    const ordersTable = new ordersTableDef.TableClass(ordersTableDef.props);
    console.log("app started");
});
