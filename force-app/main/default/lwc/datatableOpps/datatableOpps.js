import { LightningElement, track, api, wire } from 'lwc';
import getAllOpps from '@salesforce/apex/GetAllOpps.getAllOpps';

const COLUMNS =[
    {
        label: 'Opportunity Name',
        fieldName: 'nameUrl',
        nme: 'Name',
        type: 'url',
        typeAttributes: {
            label:{
                fieldName: 'Name'},
                target: '_blank'
            },
        sortable: true
    },
    {
        label :'Stage Name',
        fieldName: 'StageName',
        type: 'text',
        sortable: true
    },
    {
        label: 'Close Date',
        fieldName :'CloseDate',
        type: 'date',
        sortable: true
    }
];

export default class DatatableOpps extends LightningElement {

    @track res;
    @track columns = COLUMNS;    
    @track sortDirection;
    @track sortBy;
    @track opportunities = [];
    @track error;

    @track test;

    @wire(getAllOpps)
    wiredOpps(result){
        const{data,error} = result;
        if(data){
            let nameUrl;
            this.opportunities = data.map(row => {
                nameUrl = `/${row.Id}`;
                return {...row, nameUrl}
            })
            this.res = data;
            this.error = null
        }
        if(error){
            this.error = error;
            this.opportunities = [];
            this.res = [];
        }
    }

    //not working on Opp Name adjustment
    handleSortAccountData(event) {       
        // this.sortBy = (event.detail.fieldName = "nameUrl") ? "Name" : event.detail.fieldName;  
        this.sortBy = event.detail.fieldName;
        this.sortBy = (this.sortBy == "nameUrl") ? "Name" : this.sortBy; 
        this.sortDirection = event.detail.sortDirection;       
        this.sortAccountData(event.detail.fieldName, event.detail.sortDirection);
    }

    sortAccountData(fieldname, direction) {
        console.log(JSON.parse(JSON.stringify(this.res)));
        let parseData = JSON.parse(JSON.stringify(this.opportunities));
       
        let keyValue = (a) => {
            return a[fieldname];
        };

       let isReverse = direction === 'asc' ? 1: -1;
           parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : ''; 
            y = keyValue(y) ? keyValue(y) : '';
           
            return isReverse * ((x > y) - (y > x));
        });
        this.opportunities = parseData;
    }

}