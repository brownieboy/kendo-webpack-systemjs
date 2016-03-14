// northwind-orders-model

const getTableModel = function() {
    return {
        name: "northwind-orders",
        title: "Northwind Orders",
        paths: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders",
        },
        model: {},
        columns: [{
                field: "OrderID",
                filterable: false
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
};

export default getTableModel;


// $("#grid").kendoGrid({
//                        dataSource: {
//                            type: "odata",
//                            transport: {
//                                read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
//                            },
//                            schema: {
//                                model: {
//                                    fields: {
//                                        OrderID: { type: "number" },
//                                        Freight: { type: "number" },
//                                        ShipName: { type: "string" },
//                                        OrderDate: { type: "date" },
//                                        ShipCity: { type: "string" }
//                                    }
//                                }
//                            },
//                            pageSize: 20,
//                            serverPaging: true,
//                            serverFiltering: true,
//                            serverSorting: true
//                        },
//                        height: 550,
//                        filterable: true,
//                        sortable: true,
//                        pageable: true,
//                        columns: [{
//                                field:"OrderID",
//                                filterable: false
//                            },
//                            "Freight",
//                            {
//                                field: "OrderDate",
//                                title: "Order Date",
//                                format: "{0:MM/dd/yyyy}"
//                            }, {
//                                field: "ShipName",
//                                title: "Ship Name"
//                            }, {
//                                field: "ShipCity",
//                                title: "Ship City"
//                            }
//                        ]
//                    });
//                });
