import { ISlider } from "./ISlider";
export class ClassSlider{
    public Image:string;
    public Title:string;
    constructor(item: ISlider){
        this.Image= item.Image;
        this.Title= item.Title;
       
    }
}