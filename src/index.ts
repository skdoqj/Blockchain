import crypto from "crypto";
// import * as crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data) //hash 초기화
    }
    static calculateHash(prevHash: string, height: number, data:string){
        const toHash = `${prevHash}${height}${data}`
    }
}
