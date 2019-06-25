const ZcpState = (function () {
    const observers = [];
    function State() {
        this.data = {
            currentColor: 'purple',
            hsl: {
                h: 0,
                s: 100,
                l: 50
            }
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
    State.prototype.setHSL = function (key, val) {
        this.data.hsl[key] = val;
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