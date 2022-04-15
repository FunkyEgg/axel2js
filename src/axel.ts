import fs from 'fs';

export class Axel {
    outputFile: boolean;
    valueNames: string[];
    values: any[];
    funcNames: string[];
    funcInVal: string[][];
    funcOutVal: string[][];

    /**
     * The base axel class
     * @param outputFile Whether to ouput a file or a string
     */
    constructor(outputFile: boolean) {
        this.outputFile = outputFile;
        this.valueNames = [];
        this.values = [];
        this.funcNames = [];
        this.funcInVal = [];
        this.funcOutVal = [];
    }

    /**
     * Creates a new axel varible
     * @param name The name of the value
     * @param value The value of the value
     */
    value(name: string, value?: string|number|boolean): void {
        if (!name) throw new Error('No value name provided');
        if (!value) return console.error('No value provided, this is ok but it is best practice to provide a value');

        this.valueNames.push(name);
        this.values.push(value);
    }

    /**
     * Creates a new axel function
     * @param funcName The name of the function
     * @param funcIn The input types to the function
     * @param funcOut The output types to the function
     */
    func(funcName: string, funcIn: string[], funcOut: string[]): void {
        if (!funcName) throw new Error('No function name provided');
        if (!funcIn) throw new Error('No function inputs provided');
        if (!funcOut) throw new Error('No function outputs provided');

        funcIn.forEach(inVal => {
            switch(inVal) {
                case 'string':
                    break;
                case 'num':
                    break;
                case 'float':
                    break;
                case 'bool':
                    break;
                case 'none':
                    break;
                default:
                    throw new Error(`Invalid type provided: ${inVal} is not a valid type`)
            }
        });
        funcOut.forEach(outVal => {
            switch(outVal) {
                case 'string':
                    break;
                case 'num':
                    break;
                case 'float':
                    break;
                case 'bool':
                    break;
                case 'none':
                    break;
                default:
                    throw new Error(`Invalid type provided: ${outVal} is not a valid type`)
            }
        });

        this.funcNames.push(funcName);
        this.funcInVal.push(funcIn);
        this.funcOutVal.push(funcOut);
    }

    /**
     * Generates a axel file
     * @param fileName The name of the file
     * @returns A axel file
     */
    generate(fileName: string): void {
        let toWrite: string = `${fileName} {\nval=\n`;

        let i: number = 0;
        this.valueNames.forEach((name) => {
            if (this.values[i] === Number || this.values[i] === Boolean) {
                toWrite = toWrite.concat(`${name}: ${this.values[i]}\n`);
            } else {
                toWrite = toWrite.concat(`${name}: "${this.values[i]}"\n`);
            }
            i++;
        });
        i = 0;

        toWrite = toWrite.concat('fn|\n');
        this.funcNames.forEach((func) => {
            toWrite = toWrite.concat(`${func}: (${this.funcInVal[i]})->(${this.funcOutVal[i]})\n`);
            i++;
        });


        toWrite = toWrite.concat('}');
        if (!fs.existsSync('./out')) { fs.mkdirSync('./out') }
        fs.writeFile(`./out/${fileName}.axel`, toWrite, (err) => {
            if(err) {
                return console.log(err);
            }
            console.log(`File written to ./out/${fileName}.axel`);
        });         
    }
}