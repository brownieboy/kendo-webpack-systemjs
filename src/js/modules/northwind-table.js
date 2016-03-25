/* global $ */

import "kendo.grid.js";
import getTableWrapperTemplate from "./templates/tablewrappertemplate.js";

class Table {
    /**
     * Constructor takes props argument object and calls setupGrid method to setup a new kendoGrid based on those props
     * @param  {object} props config object.  (Props terminology borrowed from React.)
     * @param {function} props.getModel a function that when run will return the model for the grid
     * @param {function} props.getNewDataSource a function that when run will return the kendo data source for the grid, based on the model data passed to it
     */
    constructor(props) {
        /**
         * Props as in "properties" terminology borrowed from React.
         * @private
         * @type {[type]}
         */
        this._props = props;
        /**
         * The actual kendoGrid that this class sets up
         * @type {[type]}
         */
        this.currentGrid = this.setupGrid();
        /**
         * CSS selector for the element (e.g. a div) on which the kendo grid will be set up
         * @type {[type]}
         */
        this._wrapperSelector = props.wrapperSelector || "#tableWrapper";
        /**
         * el (as in element) terminology is from Backbone
         * @type {[type]}
         */
        this._el = props.getModel().name;
        this.setupGrid(props);
    }

    /**
     * method setups up the kendo grid based on props passed to the constructor
     *  @return {null} nothing returned.  Grid is setup on the element this.el, which is based on the model definition name
     */
    setupGrid() {
        var that = this;
        const dataSource = this["_props"].getNewDataSource({ model: this["_props"].getModel().model, paths: this["_props"].getModel().paths });  // eslint-disable-line dot-notation

        var templateData = getTableWrapperTemplate(this["_props"].getModel().name, this["_props"].getModel().title || "Unknown title"); // eslint-disable-line dot-notation
        var parsedHTML = $.parseHTML(templateData);

        var $wrapper = $(this["_wrapperSelector"]);  // eslint-disable-line dot-notation
        $wrapper.append(parsedHTML);
        var $el = $wrapper.find("#" + this["_el"]);  // eslint-disable-line dot-notation
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
            columns: that["_props"].getModel().columns  // eslint-disable-line dot-notation
        });
    }
}

export default Table;
