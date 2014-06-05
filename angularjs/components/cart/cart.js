angular.module("cart", [])
.factory('cart', function(){
	var cartData = [];
	return {
		addProduct: function(_id, _name, _price) {
			var addedToExistingItem = false;
			for(var i = 0; i < cartData.length; i++) {
				if(cartData[i].id == _id) {
					cartData[i].count++;
					addedToExistingItem = true;
					break;
				}
			}
			if(!addedToExistingItem) {
				cartData.push({
					count: 1, id:_id, price:_price, name:_name
				});
			}
		},

		removeProduct: function(_id) {
			for(var i = 0; i < cartData.length; i++) {
				if(cartData[i].id == _id) {
					cartData.splice(i, 1);
					break;
				}
			}
		},

		getProducts: function() {
			return cartData;
		}
	};
})
.directive("cartSummary", function(cart){
	// Runs during compile
	return {
		restrict:"E",
		templateUrl: "components/cart/cartSummary.html",
		controller: function($scope) {

			var cartData = cart.getProducts();

			$scope.total = function() {
				var total = 0;
				for(var i = 0; i < cartData.length; i++) {
					total += (cartData[i].price * cartData[i].count);
				}
				return total;
			}

			$scope.itemCount = function() {
				var total = 0;
				for(var i = 0; i < cartData.length; i++) {
					total += cartData[i].count;
				}
				return total;
			}
		}
	};
});