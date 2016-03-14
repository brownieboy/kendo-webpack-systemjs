import NorthwindTable from '../../modules/northwind-table.js';
import getNorthwindCustomersModel from '../../models/northwind-customers-model.js';
import getNorthwindCustomersDataSource from '../data-sources/northwind-customers-datasource.js';
import getNorthwindOrdersModel from '../../models/northwind-orders-model.js';
import getNorthwindOrdersDataSource from '../data-sources/northwind-orders-datasource.js';


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

function getTableClassDef(tableName) {
    return allTableClassesObject[tableName];
};


export default getTableClassDef;