import "kendo-ui/src/js/kendo.grid.js";


class Table {
    constructor(props) {
        this.props = props;
        this.currentGrid = this.setupGrid();
        this.el = props.el || "#tableWrapper";
        this.setupGrid();
    }

    setupGrid() {
        var that = this;
        const dataSource = that.props.getNewDataSource({ model: that.props.getModel().model, paths: that.props.getModel().paths });
        console.log("dataSource=" + JSON.stringify(dataSource));

        $(this.el).kendoGrid({
            dataSource: dataSource,
            height: 550,
            groupable: true,
            sortable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: that.props.getModel().columns
        });
    }
}

export default Table;
