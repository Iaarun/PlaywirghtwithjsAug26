//Encapsulation: its a process of bundling the datamembers and fucntions  together and 
// act as a single unit

class BankAccount {
    #balance
    #account
    balance1

    // constructor(account, balance){
    //     this.#account = account
    //     this.#balance = balance
    // }
    
    getbalance1(){
        console.log(this.balance1)
    }
    setBalance(balance){
        if(balance >0){
           this.#balance = balance
        }else{
            console.log("Set correct value")
        }
        
    }

    getBalance(){
        return this.#balance
    }

   
}

let acc1 = new BankAccount()
//console.log(acc1.this.#balance)
acc1.setBalance(0)
acc1.balance1 = -121

acc1.getbalance1()

console.log(acc1.getBalance())