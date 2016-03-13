import "kendo-ui/src/js/kendo.grid.js";
import getTableWrapperTemplate from './templates/tablewrappertemplate.js';


class Table {
    constructor(props) {
        this.props = props;
        this.currentGrid = this.setupGrid();
        this.wrapperSelector = props.wrapperSelector || "#tableWrapper";
        this.el = props.name;  // el terminology is from Backbone.
        this.setupGrid();
    }

    setupGrid() {
        var that = this;
        const dataSource = this.props.getNewDataSource({ model: that.props.getModel().model, paths: that.props.getModel().paths });

        var templateData = getTableWrapperTemplate(this.props.getModel().name, this.props.getModel().title || "Unknown title");
        var parsedHTML = $.parseHTML(templateData);

        var $wrapper = $(this.wrapperSelector);
        $wrapper.append(parsedHTML);
        var $el = $wrapper.find("#"  + this.el);
        $el.kendoGrid({
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
