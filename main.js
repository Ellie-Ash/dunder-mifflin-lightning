console.log("awaken ye")

const createContact = (name, title, email) =>
    ({
        name, title, email
    })
// shorthand (parentheses, curly brackets) with arrow function. since it is only returning something, arrow function is sufficient.
// you dont need key value pairs, more shorthand, javascript recognizes that its an object without key value pairs

const michael = createContact("Michael Scott", "Regional Manager", "littlekidlover@eharmony.com")

console.log(michael)

const displayName = (contactObj) => {

    const contactObjAsHTML = `
    <section class="contact"> 
    <h2> 
        ${contactObj.name} 
    </h2>
    <h3> 
        ${contactObj.title} 
    </h3>
    <div> 
        ${contactObj.email} 
    </div>
    </section>
    `
    
    const goTo = document.querySelector("#contactList")
    goTo.innerHTML += contactObjAsHTML

//dont forget to create a variable for querySelector (in this case its called goTo) so that innerHTML has a reference back to it

    return contactObjAsHTML
}

displayName(michael)

const dwight = createContact("Dwight Schrute", "Assistant to the Regional Manager, Sales", "dwight@dwight.com")

displayName(dwight)

const pam = createContact("Pam Beasly", "Reception", "pamalamadingdong@email.com")

displayName(pam)

const jim = createContact("Jim Halpert", "Sales", "bigtuna@email.com")

displayName(jim)

const creed = createContact("Creed Bratton", "Quality Assurance", "creed//.creed.creedthoughts.com/creedthoughts")

displayName(creed)

const angela = createContact("Angela Martin", "Head of Accounting, Head of Party Planning Committee", "noelle@email.com")

displayName(angela)

const kelly = createContact("Kelly Rajinighanda Kapoor", "Customer Service", "indianjuliaroberts@email.com")

displayName(kelly)