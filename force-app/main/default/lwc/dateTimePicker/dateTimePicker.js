import { LightningElement, track, api } from 'lwc';
import BaseChatMessage from 'lightningsnapin/baseChatMessage';

const CHAT_CONTENT_CLASS    = 'chat-content';
const AGENT_USER_TYPE       = 'agent';
const CHASITOR_USER_TYPE    = 'chasitor';
const SUPPORTED_USER_TYPES  = [AGENT_USER_TYPE, CHASITOR_USER_TYPE];
const LWC_PREFIX_DATEPICKER = 'lwc:datePicker';
const LWC_PREFIX_TIMEPICKER = 'lwc:timePicker';

export default class DateTimePicker extends BaseChatMessage {

    @track content = '';
    // showDatePicker = true;
    showDatePicker = false;
    showTimePicker = false;
    showNoContent  = false;
    dateValue ='';
    timeValue='';


    connectedCallback() {
        if(this.messageContent.value.startsWith(LWC_PREFIX_DATEPICKER)) {
            this.showDatePicker = true;
        }else if(this.messageContent.value.startsWith(LWC_PREFIX_TIMEPICKER)) {
            this.showTimePicker = true;
        }else{
            this.showNoContent = true;
            this.text = this.messageContent.value;
        }
    }

    handleDateChange(event) {
        this.dateValue = event.target.value;
        console.log('dateValue: ', this.dateValue);
    }

    handleTimeChange(event) {
        this.timeValue = event.target.value;
        console.log('timeValue: ', this.timeValue);
    }
}