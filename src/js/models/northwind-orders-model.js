//  Northwind Orders Table model
/**
 * This is getTableModel for Northwind Orders Table
 * @return {object} the model object for the Northwind Customers Table
 */
function getTableModel() {
    return {
        name: "northwind-orders",
        title: "Northwind Orders",
        paths: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
        },
        model: {},
        columns: [{
                "field": "OrderID",
                "filterable": false
            },
            "Freight", {
                field: "OrderDate",
                title: "Order Date",
                format: "{0:MM/dd/yyyy}"
            }, {
                field: "ShipName",
                title: "Ship Name"
            }, {
                field: "ShipCity",
                title: "Ship City"
            }
        ]
    };
}

export default getTableModel;
