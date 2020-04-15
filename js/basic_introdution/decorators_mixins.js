
const ninjaHabilities = mixins({
    addHabilities(name) {
        this.habilities().push(name);
        return this;
    },
    habilities() {
        return this._habilities_processed || (this._habilities_processed = []);
    }
});

const ninjaWeapons = mixins({
    addWeapons(name) {
        this.weapons().push(name);
        return this;
    },
    weapons() {
        return this._weapons_processed || (this._weapons_processed = []);
    }
});

@ninjaHabilities
@ninjaWeapons
class ninjaCharacter {
    constructor(first, last) {
        this.firstName = name;
        this.lastName = last;
    },

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};