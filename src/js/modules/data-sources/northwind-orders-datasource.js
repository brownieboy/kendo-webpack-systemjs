/* global kendo */
 import "kendo.data.js"; // will be imported as kendo variable.  No need to specify.

/**
 * Sets up a new kendo.data.DataSource that will be bound to a table
 * @param  {object} props Oject containing model and path
 * @return {object} new kendo.data.DataSource
 */
 function getNewDataSource(props) {
     const model = props.model;
     const paths = props.paths;

     const newDataSource = new kendo.data.DataSource({
         schema: { model: model },
         type: "odata",
         transport: {
             read: paths.read
         },
         serverPaging: true,
         serverSorting: true,
         pageSize: 100
     });

     return newDataSource;
 }

 export default getNewDataSource;
