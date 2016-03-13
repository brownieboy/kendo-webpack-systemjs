// This function uses ES6 template strings,
// see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
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