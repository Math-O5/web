function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.find = function(value) {
    if(this.value === value) {
        return true;
    } else if(this.left !== null && this.value < value) {
        return this.left.find(value);
    } else if(this.right !== null && this.value > value) {
        return this.right.find(value)
    }
    return false;
}

BinaryTree.prototype.insert = function(value) {
    if(this.left !== null && this.value < value) {
        this.left.insert(value);
    } else if(this.left === null && this.value < value) {
        this.left = new BinaryTree(value);
    }  else if(this.right !== null && this.value > value) {
        this.right = new BinaryTree(value);
    }  else if(this.right === null && this.value > value) {
        this.right = new BinaryTree(value);
    }
}