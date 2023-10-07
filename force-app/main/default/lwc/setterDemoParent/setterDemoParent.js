import { LightningElement } from 'lwc';

export default class SetterDemoParent extends LightningElement {
    
    userDetails = {
        name:"salesforceDemi",
        age:"32",
    }
    get title(){
        return `Setter Method Demo`
    }
}