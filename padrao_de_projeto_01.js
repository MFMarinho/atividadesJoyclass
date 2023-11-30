class Computer {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return this.type;
    }

    toString() {
        return `${this.type} [RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz]`;
    }
}


class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === 'pc') {
            return new Computer(ram, hdd, cpu, 'PC');
        } else if (type.toLowerCase() === 'server') {
            return new Computer(ram, hdd, cpu, 'Server');
        } else {
            throw new Error('Tipo de computador desconhecido');
        }
    }
}

const pc = ComputerFactory.createComputer('PC', 8, 512, 2.5);
const server = ComputerFactory.createComputer('Server', 16, 1024, 3.0);

console.log(pc.toString());
console.log(server.toString());