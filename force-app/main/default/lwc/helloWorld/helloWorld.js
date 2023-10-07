import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname='Zero to Hero';
    title = 'Aura';

    changeHandler(event){
        this.title = event.target.value
    }

    @track address={
        city: 'Melbourne',
        postcode: 3008,
        country:'Australia'
    }

    //can be used for non-track
    // trackHandler(event){
    //     this.address = {...this.address, "city":event.target.value}
    // }
    trackHandler(event){
        this.address.city = event.target.value;
    }

    users=["demi","aiken","marasigan"];
    get firstUsername(){
        return this.users[0].toUpperCase();
    }

    num1 = 10;
    num2 = 23;
    get sumQty(){
        return this.num1 + this.num2;
    }
}