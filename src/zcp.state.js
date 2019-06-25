const ZcpState = (function () {
    const observers = [];
    function State() {
        this.data = {
            currentColor: 'purple',
            newColor: 'purple'
        }
    }
    State.prototype.subscribe = function (cb) {
        observers.push(cb);
        cb(this.data);
    }
    State.prototype.set = function (key, val) {
        this.data[key] = val;
        this.next(this.data);
    }
    State.prototype.next = function (val) {
        observers.forEach( o => o(val) );
    }
    return State;
})();

export {
    ZcpState
};