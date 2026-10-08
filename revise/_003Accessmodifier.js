/* Access modifiers in JavaScript are not as strict as in 
some other programming languages, but we can simulate them using 
closures and naming conventions. 
Here's an example of how to implement access modifiers in JavaScript:
Three types of access modifiers are:
1. Public: Properties and methods are accessible from anywhere.
2. Private: Properties and methods are only accessible within the class.
3. Protected: Properties and methods are accessible within the class and its subclasses.
*/
// Private access modifier using closures
 class BakAccount {
    #balance=1000; // public property
    #getBalance() {
        return this.#balance; // public method to access private property
    }
 }


class CustomerAccount{
    displayBalance(){
        const account = new BakAccount();
        console.log("Customer account balance is: "+account.#getBalance());
    }
} 


const acc1 =  new CustomerAccount()
acc1.displayBalance()