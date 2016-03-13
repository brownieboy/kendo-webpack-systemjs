import NorthwindCustomersTable from './modules/northwind-customers-table.js';
import NorthwindCustomersModel from '../../models/northwind-customers-model.js';
import NorthwindCustomersDataSource from '../data-sources/northwind-customers-datasource.js';
import NorthwindOrdersTable from './modules/northwind-orders-table.js';
import NorthwindOrdersModel from '../../models/northwind-orders-model.js';
import NorthwindOrdersDataSource from '../data-sources/northwind-orders-datasource.js';


const allTableClassesObject = {
    "northwind-customers": {tableClass: NorthwindCustomersTable, model: North },
    "northwind-orders": NorthwindOrdersTable
};

const getTableClassForName = function(tableName) {

};
