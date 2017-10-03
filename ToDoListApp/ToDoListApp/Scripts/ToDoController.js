var app = angular.module("todoApp", []),
    uri = 'Home';

app.controller("todoController", function ($scope, $http, $filter, $timeout) {
    $scope.notes = [];
    $scope.dateToUpdate = '/Date(1000)/';
    $scope.sortparam = 'Id';
    $scope.editmode = false;
    $scope.params = {};
    $scope.params.sortType = 'Id';
    $scope.params.sortReverse = false;
    $scope.params.searchText = {};
    $scope.params.searchText.Description = '';
    $scope.params.myparam = 'Текст';



    $scope.SortList = function (param) {
        if (param == $scope.sortparam)
            $scope.sortparam = '-' + param;
        else
            $scope.sortparam = param;
    };
    $scope.deleteOne = function (id) {
        
        $http({//Удаление записи(запрос)
            method: 'POST',
            url: uri + '/RemoveNote/' + id
        }).then(function (success) {
            $scope.getAll();
            Throw_Message('Запись удалена', 'success');
            }, function (error) {
                Throw_Message("Что-то пошло не так 	ಠ_ಠ", 'error');
        })
    };
    $scope.endNote = function (note) {
        $http({//Пометить как завершенное
            method: 'POST',
            url: uri + '/EditNote',
            data: JSON.stringify({
                Id: note.Id,
                Description: note.Description,
                CreationTime: $filter('mydate')(note.CreationTime),
                Done: true,
                Priority: note.Priority

            })
        }).then(function (success) {
            $scope.editmode = false;
            Throw_Message('Действие завершено', 'success');
            $scope.getAll();
        }, function (error) {
            Throw_Message("Что-то пошло не так 	ಠ_ಠ", 'error');
        })
    };
    $scope.editOne = function (note) {
        $scope.editmode = true;
        $scope.descToUpdate = note.Description;
        $scope.dateToUpdate = note.CreationTime;//$filter('mydate')(note.CreationTime);
        $scope.doneToUpdate = note.Done;
        $scope.priorToUpdate = note.Priority
        $scope.idToUpdate = note.Id;
        $scope.descToAdd = null;
        $scope.priorToAdd = "3";
    };
    $scope.putCancel = function () {
        $scope.editmode = false;
        $scope.descToUpdate = null;
        $scope.dateToUpdate = '/Date(1000)/';
        $scope.idToUpdate = null;
        $scope.priorToUpdate = "3";
        $scope.doneToUpdate = false;
    };
    $scope.putOne = function () {
        $http({//Редактирование(запрос)
            method: 'POST',
            url: uri + '/EditNote',
            data: JSON.stringify({
                Id: $scope.idToUpdate,
                Description: $scope.descToUpdate,
                CreationTime: $filter('mydate')($scope.dateToUpdate),
                Done: $scope.doneToUpdate,
                Priority: $scope.priorToUpdate

            })
        }).then(function (success) {
            $scope.editmode = false;
            $scope.getAll();
            Throw_Message('Запись отредактирована', 'success');
        }, function (error) {
            Throw_Message("Что-то пошло не так 	ಠ_ಠ", 'error');
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
                //CreationTime: $filter('date')(new Date(), 'HH:mm d/MM/yyyy'),
                Done: false,
                Priority: $scope.priorToAdd

            })
        }).then(function (success) {
            $scope.getAll();
            Throw_Message('Запись добавлена', 'success');
            }, function (error) {
                Throw_Message("Что-то пошло не так 	ಠ_ಠ", 'error');
            
        })
    };
    
    
    
})
