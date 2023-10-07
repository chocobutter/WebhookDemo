import { LightningElement, api } from 'lwc';
import * as MODAL_DATA from './cardComponentConstant';
export default class CardComponent extends LightningElement {
    MODAL_DATA = MODAL_DATA;
    showModalOne = false;
    showModalTwo = false;

    handleClick(event){
        this[event.target.name] = true;
    }
}