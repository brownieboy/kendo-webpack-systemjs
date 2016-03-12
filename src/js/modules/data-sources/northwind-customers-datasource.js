import "kendo-ui/src/js/kendo.data.js"; // will be imported as kendo variable.  No need to specify.


class TableDataFormatter {
    constructor(props) {
        this.props = props;
    }

    getNewDataSource() {
        const props = this.props;
        const model = props.model;
        const paths = props.paths;

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
        return newDataSource;
    }
}
