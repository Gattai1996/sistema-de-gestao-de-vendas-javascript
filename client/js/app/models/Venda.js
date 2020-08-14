class Venda {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        
        Object.freeze(this);
    }
    
    get volume() {

        return this._volume = this._quantidade * this._valor;
    }
}