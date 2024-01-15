// type InitParams = {
//     user: string;
//     address: string;
//     sum: number;
// }

// export class Order {
//     private _user: string;
//     private _address: string;
//     private _sum: number;
//     private _createDate: Date;
//     private _deliverydate: Date;

//     constructor(params: InitParams) {
//         this._user = params.user;
//         this._address = params.address;
//         this._sum = params.sum;
//         this._createDate = new Date();
//         this._deliverydate = this._generateDeliveryDate();
//     }

//     private _generateDeliveryDate() {
//         const deliveryDate = new Date(this._createDate);
//         deliveryDate.setDate(deliveryDate.getDate() + 7);
//         return deliveryDate;
//     }

//     getInfoOrder() {
//         const date = `${this._deliverydate.getDate()}.${this._deliverydate.getMonth() + 1}.${this._deliverydate.getFullYear()}`;

//         return `${this._user}, Спасибо за оформление заказа на сумму ${this._sum},\n ожидайте доставку ${date} по адресу ${this._address}`
//     }

//     set newAddress(address: string) {
//         this._address = address;
//     }

//     get userInfo() {
//         return this._user;
//     }

// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------

