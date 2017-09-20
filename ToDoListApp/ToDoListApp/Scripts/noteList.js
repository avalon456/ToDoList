app.directive("noteList", function () {
    return function (scope, elements, attrs) {
        var data = scope[attrs["noteList"]];
        if (angular.isArray(data.answers)) {
            parentData = ParentOrChild(data, null);
            foreach(parent in parentData)
            {
                var trElem = angular.element("<tr>");

                var ulElem = angular.element("<ul>");

                element.append(trElem);
            }
        }
    }
});

var ParentOrChild = function (mas, parentNote) {
    var newmas = [];
    foreach(item in mas)
    {
        if (parentNote != null) {
            if (item.ParentId == parentNote.Id) {
                newmas.push(item);
            }
            else
            {
                if (item.ParentId == null)
                {
                    newmas.push(item);
                }
            }
        }
    }
    return newmas;
};