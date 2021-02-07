//const square = (x) => x * x;

//console.log(square(5));

// Use standard stuff for methods (functions that are properties of objects) because this keyword will not work otherwise.
// Or, remove function keyword and remove colon.
const event = {
    name: 'Birthday Party',
    guestList: ['JB', 'Jen', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name);
        // standard function syntax would break this keyword here. Use arrow function here to get access to this.name.
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

// The reason for the this keyword issue is that arrow functions do not bind their own this keyword. This is why the are good for
// most things, but not good for method declarations. Even then, the shorthand syntax for method declarations shown above gets
// us around this issue.

event.printGuestList();