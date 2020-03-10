module.exports = function Square(width){
    this.width = width;

    this.area = function(){
        return this.width * this.width;
    }
    this.perimeter = function(){
        return 4 * this.width;
    }
};