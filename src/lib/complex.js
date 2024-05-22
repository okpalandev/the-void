function Complex(...args) {
    if (Array.isArray(args)) {
        if (args.length === 1)
            return new Complex(args);
        else {
            this.real = args[0];
            this.imag = args[1];
        }
    }
    return this;
}

Complex.prototype.randomize = function (min, max) {
    this.real = Math.random() * max - min;
    this.imag = Math.random() * max - min;
    return this;
};;

Complex.prototype.add = function (obj) {
    if (!(obj instanceof Complex)) {
        obj = new Complex(obj);
    }
    this.imag = this.imag + obj.imag;
    this.real = this.real + obj.real;
    return this;
};

Complex.prototype.sub = function (obj){
    if (!(obj instanceof Complex)) {
        obj = new Complex(obj);
    }
    this.imag = this.imag - obj.imag;
    this.real = this.real -  obj.real;
    return this;
};

Complex.prototype.div = function (obj){
    if (!(obj instanceof Complex)) {
        obj = new Complex(obj);
    }
    this.imag = this.imag / obj.imag;
    this.real = this.real / obj.real;
    return this;
};
    

Complex.prototype.mul = function (obj){
    if (!(obj instanceof Complex)) {
        obj = new Complex(obj);
    }
    this.imag = this.imag * obj.imag;
    this.real = this.real * obj.real;
    return this;
}

Complex.prototype.abs = function (){
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
}

Complex.prototype.clone = function (){
    const self = this;
    return new Complex(self);
}


Complex.prototype.pow = function (power){
    const sign = Math.sign(power)
    if (sign === 0) {
        this.real = 1;
        this.imag = 0;
        return this;
    }
    else if (sign === -1) {
        power = Math.abs(power);
        const denominator = Math.pow(this.abs(), power);
        const angle = Math.atan2(this.imag, this.real);
        this.real = Math.cos(angle * power) / denominator;
        this.imag = Math.sin(angle * power) / denominator;
        return this;
    
    }
    const denominator = Math.pow(this.abs(), power);
    const angle = Math.atan2(this.imag, this.real);
    this.real = Math.cos(angle * power) / denominator;
    this.imag = Math.sin(angle * power) / denominator;
    return this;
}

Complex.prototype.toString = function (){   
    return `${this.real} + ${this.imag}i`;
}

export { Complex }
