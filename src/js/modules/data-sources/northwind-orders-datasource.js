 import "kendo-ui/src/js/kendo.data.js"; // will be imported as kendo variable.  No need to specify.


 const getNewDataSource = function(props) {
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
 };

 export default getNewDataSource;
