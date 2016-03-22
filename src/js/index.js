import "kendo.router.js";
import getTableClassDef from './modules/helpers/gettableclassdef.js';


$(document).ready(function() {
    const customersTableDef = getTableClassDef("northwind-customers");
    const customersTable = new customersTableDef.TableClass(customersTableDef.props);
    const ordersTableDef = getTableClassDef("northwind-orders");
    const ordersTable = new ordersTableDef.TableClass(ordersTableDef.props);
    console.log("app started");
});
