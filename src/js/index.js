/* global $, document */
import "kendo.router.js";
import getTableClassDef from "./modules/helpers/gettableclassdef.js";

/**
 * The starter function that kicks off the app.  Should really replace this with something using the kendo router
 * @param  {function} callback that executes on DOM load
 * @return {null} nothing returned
 */
$(document).ready(function() {
    const customersTableDef = getTableClassDef("northwind-customers");
    const customersTable = new customersTableDef.TableClass(customersTableDef.props);  // eslint-disable-line no-unused-vars
    const ordersTableDef = getTableClassDef("northwind-orders");
    const ordersTable = new ordersTableDef.TableClass(ordersTableDef.props);  // eslint-disable-line no-unused-vars
});

