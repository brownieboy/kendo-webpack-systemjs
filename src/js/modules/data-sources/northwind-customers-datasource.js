/* global kendo */
import "kendo.data.js"; // will be imported as kendo variable.  No need to specify.

/**
 * This is getNewDataSource
 * @param {object} props - config object for function.  Elements of this object are:
 * @param {object} props.model - the model for this data source
 * @param {object} props.paths - the paths to the APIs for this data source
 * @returns {object} a new kendo.data.DataSource, based on configs passed in
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
        pageSize: 20
    });

    return newDataSource;
}

export default getNewDataSource;
