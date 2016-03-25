import NorthwindTable from "../../modules/northwind-table.js";
import getNorthwindCustomersModel from "../../models/northwind-customers-model.js";
import getNorthwindCustomersDataSource from "../data-sources/northwind-customers-datasource.js";
import getNorthwindOrdersModel from "../../models/northwind-orders-model.js";
import getNorthwindOrdersDataSource from "../data-sources/northwind-orders-datasource.js";


const allTableClassesObject = {
    "northwind-customers": {
        TableClass: NorthwindTable,
        props: {
            getModel: getNorthwindCustomersModel,
            getNewDataSource: getNorthwindCustomersDataSource
        }
    },
    "northwind-orders": {
        TableClass: NorthwindTable,
        props: {
            getModel: getNorthwindOrdersModel,
            getNewDataSource: getNorthwindOrdersDataSource
        }
    }
};

/**
 * Returns definition object used to create the tables
 * @param  {string} tableName name of the table
 * @return {object} definition object used to create the tables
 */
function getTableClassDef(tableName) {
    return allTableClassesObject[tableName];
}


export default getTableClassDef;
