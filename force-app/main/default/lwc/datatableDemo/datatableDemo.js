//Salesforce Troop: https://www.youtube.com/watch?v=LrfUuZzoMxo
import { LightningElement, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/tableController.getAccounts';
const COLUMNS = [
    {label:'Account Name', fieldName:'Name'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'currency'},
    {label:'Phone', fieldName:'Phone', type:'phone'},
    {label:'Industry', fieldName:'Industry'}
]
export default class DatatableDemo extends LightningElement {
    tableData;
    columns = COLUMNS;

    @wire(getAccounts)
    accountsHandler({data, error}){
        if(data){
            console.log(data);
            this.tableData = data;
        }
        if(error){
            console.error(error);
        }
    }
}