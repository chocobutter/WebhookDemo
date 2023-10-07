import { LightningElement, api } from 'lwc';
import wordcloudJS from '@salesforce/resourceUrl/wordcloud2';
import { loadScript } from 'lightning/platformResourceLoader';
import getRecentRecords from '@salesforce/apex/RecentRecordCtrl.getRecentRecords';
import { NavigationMixin } from 'lightning/navigation';

export default class RecentRecords extends NavigationMixin(LightningElement) {
    @api objectName;
    @api numRecords;

    rendered = false;
    get cardLabel(){
        return `Recently Accessed ${this.objectName}s`;
    }

    renderedCallback(){
        if(this.rendered) return;

        this.rendered = true;
        loadScript(this,  wordcloudJS).then(() => {
            getRecentRecords({objectName: this.objectName, numRecords: this.numRecords})
                 .then(result => {
                    let wordSize = 25;
                    let list = [];
                    result.forEach(record => {
                        let arr = [];
                        arr.push(record.Name);
                        arr.push(wordSize);
                        arr.push(record.Id);
                        wordSize--;
                        list.push(arr);
                    });
                    WordCloud(this.template.querySelector(".wc"), { list: list, click:(item)=>{
                        const recordId = item[2];
                        this[NavigationMixin.Navigate]({
                            type: 'standard__recordPage',
                            attributes: {
                                actionName: "view",
                                recordId: recordId,
                                objectApiName: this.objectName
                            }
                        });
                    }});
                 })
                 .catch(error => {
                     // TODO Error handling
                 });
        })
    }
}