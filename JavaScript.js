var app = angular.module('phonebook', []);

app.controller("appController", function ($scope) {
    $scope.searchContact = '';
    $scope.rowLimit = 10;
    $scope.selectedContact = null;

    $scope.contacts = [
        {
            name: "Alice Johnson",
            phone: "052-345-6789",
            email: "alice@example.com",
            photo: "photos/Alice.jpg"
        },
        {
            name: "Bob Smith",
            phone: "03-567-1234",
            email: "bob@example.com",
            photo: "photos/Bob.jpg"
        },
        {
            name: "Charlie Davis",
            phone: "054-789-4321",
            email: "charlie@example.com",
            photo: "photos/Charlie.jpg"
        },
        {
            name: "Diana Prince",
            phone: "02-901-2345",
            email: "diana@example.com",
            photo: "photos/Diana.jpg"
        }
    ];

    $scope.showDetails = function (contact) {
        $scope.selectedContact = contact;
    };

    $scope.closeDetails = function () {
        $scope.selectedContact = null;
    };

    $scope.originalContacts = angular.copy($scope.contacts);

    $scope.clearContacts = function () {
        // פעולה למחיקת כל אנשי הקשר
        $scope.contacts = [];
    };

    $scope.editList = function () {
        $scope.contacts = angular.copy($scope.originalContacts);
    };
});
