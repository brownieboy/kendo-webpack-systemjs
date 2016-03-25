// This function uses ES6 template strings,
// see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

/**
 * Template for HTML that goes around an Kendo Grid table.  Note that this module actually exports the getTableWrapper function itself.  This must then be called externally to get the template text.
 * @param  {string} tableId     id if the table, will be used as its html id
 * @param  {String} tableTitle Title to be displayed in the panel-heading
 * @return {string} the text of the template with values filled in.
 */
function getTableWrapper(tableId, tableTitle) {
    return `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${tableTitle}</h3>
            </div>
            <div class="panel-body">
                <div id="${tableId}" style="width:100%" class="sortableTable adminTable"></div>
            </div>
        </div>
    `;
}

export default getTableWrapper;
