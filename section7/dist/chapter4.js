// 제네릭 클래스
var NumberList = /** @class */ (function () {
    function NumberList(list) {
        this.list = list;
    }
    NumberList.prototype.push = function (data) {
        this.list.push(data);
    };
    NumberList.prototype.pop = function () {
        return this.list.pop();
    };
    NumberList.prototype.print = function () {
        console.log(this.list);
    };
    return NumberList;
}());
var numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
