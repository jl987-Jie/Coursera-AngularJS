(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// inject service into controllers:
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getBuyItems();
  toBuy.removeItem = function(index) {
    ShoppingListCheckOffService.removeItem(index);
  }
  toBuy.isEverythingBought = function() {
    return toBuy.items.length == 0;
  }
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
  bought.isEmpty = function() {
    return bought.items == 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
    {
      name: "cookies",
      quantity: "2"
    },
    {
      name: "juice",
      quantity: "1"
    },
    {
      name: "peanut butter",
      quantity: "3"
    },
    {
      name: "paper towel",
      quantity: "1"
    },
    {
      name: "eggs",
      quantity: "12"
    }
  ];
  var boughtItems = [];

  service.getBuyItems = function() {
    return toBuyItems;
  }
  service.getBoughtItems = function() {
    return boughtItems;
  }
  // remove the given item from the toBuyItems and pushes it to boughtItems
  service.removeItem = function(index) {
    var boughtItem = toBuyItems.splice(index, 1);
    boughtItems.push(boughtItem[0]);
  }
}

})();
