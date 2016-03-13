// Orders table
const getTableModel = function() {
    return {
        name: "northwind-orders",
        title: "Northwind Orders",
        paths: {
            read: "//http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
        },
        model: {},
        columns: [
            { field: "OrderID", title: "Order ID", width: 110 },
            { field: "CustomerID", title: "Customer ID", width: 130 },
            { field: "ShipName", title: "Ship Name", width: 280 },
            { field: "ShipAddress", title: "Ship Address" },
            { field: "ShipCity", title: "Ship City", width: 160 },
            { field: "ShipCountry", title: "Ship Country", width: 160 }
        ]
    };
};

export default getTableModel;
