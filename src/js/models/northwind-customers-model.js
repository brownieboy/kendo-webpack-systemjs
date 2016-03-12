const getTableModel = function() {
    return {
        name: "northwind-customers",
        title: "Northwind Customers",
        paths: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers",
        },
        model: {},
        columns: [{
            template: "<div class='customer-photo'ß" +
                "style='background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
                "<div class='customer-name'>#: ContactName #</div>",
            field: "ContactName",
            title: "Contact Name",
            width: 240
        }, {
            field: "ContactTitle",
            title: "Contact Title"
        }, {
            field: "CompanyName",
            title: "Company Name"
        }, {
            field: "Country",
            width: 150
        }]
    };
};

export default getTableModel;
