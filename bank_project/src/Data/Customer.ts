class Customer{
    customerId: number;
    customerName: string;
    customerPassword: string;
    customerAccount: number;
    customerBalance: number;
    customerSumA: number;

    /*
    constructor(customerId: number, customerName: string, customerPassword: string,customerAccount:number,customerBalance:number,customerSumA:number) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerPassword= customerPassword;
        this.customerAccount=customerAccount;
        this.customerBalance=customerBalance;
        this.customerSumA=customerSumA;
    }
    */
    constructor(customerId: number, customerName: string, customerPassword: string,customerAccount:number,customerBalance:number,customerSumA:number) { }
}

export default Customer;