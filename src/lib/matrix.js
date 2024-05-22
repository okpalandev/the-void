
function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.data = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}

Matrix.prototype.randomize = function() {
    this.data = this.data.map(row => row.map(() => Math.random() * 2 - 1));
    return this;
}

Matrix.prototype.add = function(n) {
    if (n instanceof Matrix) {
      this.data = this.data.map((row, i) => row.map((col, j) => col + n.data[i][j]));
    } else {
      this.data = this.data.map(row => row.map(col => col + n));
    }
    return this;
}

Matrix.prototype.multiply = function(n) {
    if (n instanceof Matrix) {
      if (this.cols !== n.rows) {
        console.log("Columns of A must match rows of B");
        return undefined;
      }
      this.data = Array.from({ length: this.rows }, () => Array.from({ length: n.cols }, () => 0));
      this.data = this.data.map((row, i) => row.map((col, j) => {
        return Array.from({ length: this.cols }, (_, k) => this.data[i][k] * n.data[k][j]).reduce((a, b) => a + b);
      }));
    } else {
      this.data = this.data.map(row => row.map(col => col * n));
    }
    return this;
}

Matrix.prototype.subtract = function(n) {
    if (n instanceof Matrix) {
      this.data = this.data.map((row, i) => row.map((col, j) => col - n.data[i][j]));
    } else {
      this.data = this.data.map(row => row.map(col => col - n));
    }
    return this;
}

Matrix.prototype.divide = function(n) {
    if (n instanceof Matrix) {
      this.data = this.data.map((row, i) => row.map((col, j) => col / n.data[i][j]));
    } else {
      this.data = this.data.map(row => row.map(col => col / n));
    }
    return this;
}

Matrix.prototype.map = function(func) {
    this.data = this.data.map((row, i) => row.map((col, j) => func(col, i, j)));
    return this;
}

Matrix.prototype.toArray = function() {
    return this.data;
}

Matrix.prototype.print = function() {
    console.table(this.data);
    return this;
}

Matrix.prototype.serialize = function() {
    return JSON.stringify(this);
}

Matrix.prototype.deserialize = function(data) {
    this.rows = data.rows;
    this.cols = data.cols;
    this.data = data.data;
    return this;
}

Matrix.prototype.copy = function() {
    return new Matrix(this.rows, this.cols).deserialize(JSON.parse(this.serialize()));
}

Matrix.prototype.transpose = function() {
    this.data = Array.from({ length: this.cols }, () => Array.from({ length: this.rows }, () => 0));
    this.data = this.data.map((row, i) => row.map((col, j) => this.data[j][i] = this.data[i][j]));
    return this;
}

export { Matrix }