
class BankAccount{
    #balance

    constructor(owner, initialbalance){
        this.owner = owner
        this.#balance = initialbalance
    }

    getBalance(){
        return this.#balance
    }

    desposite(amount){
        this.#balance += amount
        console.log(`${amount} deposited in your account`)
    }

    withdraw(amount){
        this.#balance -= amount
        console.log(`${amount} withdrawn from your account`)
    }
}

const accountholder1 = new BankAccount("Arun",5000)
console.log(accountholder1.owner)
console.log(accountholder1.getBalance())
accountholder1.desposite(15000)
console.log(accountholder1.getBalance())
accountholder1.withdraw(5000)
console.log(accountholder1.getBalance())

//Encapsulation: approach closures

function createCounter(){
    let count=0

    return{
        increment : function(){
            count++
            return count
        },
        decrement : function(){
            count--
            return count
        }
    }
}

const counter = createCounter()
console.log(typeof counter)
console.log(counter.increment()) //1
console.log(counter.increment()) //2
console.log(counter.decrement()) //1
console.log(counter.count)