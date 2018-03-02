let TCell =  require('@alu0100886306/dtable/src/TCell');
let chalk = require('chalk');
const { addMapClass, findClass } =  require('@alu0100886306/dtable/src/registry-class');

class ColorCell extends TCell{

    constructor(inner, value){
        super(inner);
        this.inner = inner;
        this.value = value;
    }

    draw(width, height) {
        let result = [];
        let themec = null;
        let themebg = null;
        if (this.value.c)
                themec = chalk.keyword(this.value.c);
        else  themec = chalk.keyword('black');
        if (this.value.bg)
                themebg = chalk.bgKeyword(this.value.bg);
        else themebg = chalk.bgKeyword('white');

        result = this.inner.draw(width,height);
        for (let i = 0; i<result.length ; i++)
                result[i] = themebg(themec(result[i]));
        return result;
    }
}

addMapClass('ColorCell', ColorCell);

module.exports = ColorCell

