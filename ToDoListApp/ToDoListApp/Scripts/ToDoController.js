var app = angular.module("todoApp", []),
    uri = 'Home';

app.controller("todoController", function ($scope, $http, $filter, $timeout) {
    $scope.notes = [];
    $scope.editmode = false;
    $scope.deleteOne = function (id) {
        
        $http({//Удаление записи(запрос)
            method: 'GET',
            url: uri + '/RemoveNote/' + id
        }).then(function (success) {
            $scope.getAll();
            alert('Запись удалена');
        }, function (error) {
            alert("Что-то пошло не так 	ಠ_ಠ");
        })
    };
    $scope.endNote = function (note) {
        $http({//Пометить как завершенное
            method: 'POST',
            url: uri + '/EditNote',
            data: JSON.stringify({
                Id: note.Id,
                Description: note.Description,
                CreationTime: note.CreationTime,
                Done: true

            })
        }).then(function (success) {
            $scope.editmode = false;
            alert("Действие завершено");
            $scope.getAll();
        }, function (error) {
            alert("Что-то пошло не так 	ಠ_ಠ");
        })
    };
    $scope.editOne = function (note) {
        $scope.editmode = true;
        $scope.descToUpdate = note.Description;
        $scope.dateToUpdate = note.CreationTime;
        $scope.doneToUpdate = note.Done;
        $scope.idToUpdate = note.Id;
        $scope.descToAdd = null;
    };
    $scope.putCancel = function () {
        $scope.editmode = false;
        $scope.descToUpdate = null;
        $scope.dateToUpdate = null;
        $scope.idToUpdate = null;
        $scope.doneToUpdate = false;
    };
    $scope.putOne = function () {
        $http({//Редактирование(запрос)
            method: 'POST',
            url: uri + '/EditNote',
            data: JSON.stringify({
                Id: $scope.idToUpdate,
                Description: $scope.descToUpdate,
                CreationTime: $scope.dateToUpdate,
                Done: $scope.doneToUpdate

            })
        }).then(function (success) {
            $scope.editmode = false;
            $scope.getAll();
            alert("Запись изменена");
        }, function (error) {
            alert("Что-то пошло не так 	ಠ_ಠ");
        })
    };
    $scope.getAll = function () {
        $http({//Получить все записи из таблицы(запрос)
            method: 'GET',
            url: uri + '/AllNotes'
        }).then(function (success) {
            $scope.notes = success.data;
        }, function (error) {
            $scope.notes = [];
        })
    };
    $scope.addOne = function () {
        $http({//Добавление записи(запрос)
            method: 'POST',
            url: uri + '/AddNote',
            data: JSON.stringify({
                Description: $scope.descToAdd,
                CreationTime: $filter('date')(new Date(), 'HH:mm d/MM/yyyy'),
                Done: false

            })
        }).then(function (success) {
            $scope.getAll();
            alert('Запись добавлена');
            }, function (error) {
                alert("Что-то пошло не так 	ಠ_ಠ");
            
        })
    };
    $scope.textboxSize = 30;
    $scope.textboxSizing = function ()
        {
        if ($scope.editmode && $scope.descToUpdate.length > 20) {
            $scope.textboxSize = $scope.descToUpdate.length + 10;
        }
        else
            if (!$scope.editmode && $scope.descToAdd.length > 20) {
                $scope.textboxSize = $scope.descToAdd.length + 10;
            }
            else $scope.textboxSize = 30;
    }
    
    
})
