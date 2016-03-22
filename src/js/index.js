/* global $, document */
import "kendo.router.js";
import getTableClassDef from "./modules/helpers/gettableclassdef.js";


$(document).ready(function() {
    const customersTableDef = getTableClassDef("northwind-customers");
    const customersTable = new customersTableDef.TableClass(customersTableDef.props);  // eslint-disable-line no-unused-vars
    const ordersTableDef = getTableClassDef("northwind-orders");
    const ordersTable = new ordersTableDef.TableClass(ordersTableDef.props);  // eslint-disable-line no-unused-vars
});

