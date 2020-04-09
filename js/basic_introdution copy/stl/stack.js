// Stack which can storage any value
let Stack = function() {
    this.storage = {}
    this.size = 0
}

Stack.prototype.add = function(value) {
    this.storage[this.size] = value;
    this.size += 1;
}

Stack.prototype.empty = function() {
    return (this.size)? true : false;
}

Stack.prototype.pop = function() {
    if(this.size && this.size--) {
        this.size -= 1;
        return 1
    }
    return 0;
}

Stack.prototype.pop = function() {
    this.size && this.size--
    let result = this.storage[this.size];
    this.size -= 1;
    return result;
}
Stack.prototype.size = function() {
    return this.size;
}

let maple = new Stack()
