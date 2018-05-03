(function () {
    var MyController = function MyController($scope) {
        $scope.todos = [
            { text: 'Dummy TODO1', done: false },
            { text: 'Dummy TODO2', done: false }
        ];

        $scope.getTotalTodos = function () {
            return $scope.todos.filter(function (todo) {
                return !todo.done;
            }).length;
        };


        $scope.addTodo = function () {
            $scope.todos.push({ text: $scope.formTodoText, done: false });
            $scope.formTodoText = '';
        };

        $scope.clearCompleted = function () {
            $scope.todos = $scope.todos.filter(function (todo) {
                return !todo.done;
            });
        };

        $scope.clearInCompleted = function () {
            $scope.todos = $scope.todos.filter(function (todo) {
                return todo.done;
            });
        };
    }
    MyController.$inject = ['$scope'];
    angular.module("todoApp").controller("TodoCtrl", MyController);
})();

