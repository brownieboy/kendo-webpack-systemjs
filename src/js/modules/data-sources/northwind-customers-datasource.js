import "kendo-ui/src/js/kendo.data.js"; // will be imported as kendo variable.  No need to specify.


class TableDataFormatter {
    constructor(configObj) {
        this.configObj = configObj;
    }

    getNewDataSource() {
        const configObj = this.configObj;
        const model = configObj.model;
        const paths = configObj.paths;

        const newDataSource = new kendo.data.Datasource({
            schema: { model: model },
            transport: {
                type: "odata",
                transport: {
                    read: paths.read
                },
                pageSize: 20
            }
        });
    }
}
