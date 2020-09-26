import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

export class Kick {
    public name: string;
    public brand: string;
    public model: string;
    public description: string;
    public color: string;
    public imagePath: string;
    public size: number;

    constructor(name: string, brand: string, model: string, desc: string, color: string, imagePath: string, size:number){
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.description = desc;
        this.color=color;
        this.imagePath = imagePath;
        this.size = size;
    }
}