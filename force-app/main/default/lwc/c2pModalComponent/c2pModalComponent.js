import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    // Child to Parent Communication Using Simple Event
    // closeHandler(){
    //     const myEvent = new CustomEvent('close');
    //     this.dispatchEvent(myEvent)
    // }
    
    // Child to Parent Communication Using Event with Data
    // closeHandler(){
    //     const myEvent = new CustomEvent('close', {
    //         detail: {
    //             msg:"Modal Closed Successfully!"
    //         }
    //     });
    //     this.dispatchEvent(myEvent)
    // }

    //Child to Parent Communication Using Bubbling
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail: {
                msg:"Modal Closed Successfully!"
            }
        });
        this.dispatchEvent(myEvent)
    }

    footerHandler(){
        console.log('footerHandler event called')
    }
}