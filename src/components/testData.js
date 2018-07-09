const loremIpsum = "Lorem ipsum dolor sit amet, sea justo splendide maiestatis no, id erat error eum. No case tation tincidunt sea, duo ex sumo delenit suscipiantur. Eius option vivendo an sit. Qui nonumy timeam diceret et. Iudico democritum mnesarchum in mel, prompta corpora voluptaria in sit."

export const testData = [
    
    {
        title: 'My day in Integrify',
        category: 'Work',
        text: loremIpsum,
    },
    {
        title: 'My talk at React Meetup',
        category: 'Speech',
        text: loremIpsum,
    },
    {
        title: 'Fun at the beach',
        category: 'Recreation',
        text: loremIpsum,
    },
    {
        title: 'Running in the forest',
        category: 'Sport',
        text: loremIpsum,
    },
    {
        title: 'React Intro',
        category: 'React',
        text: 'Hi everyone, who are working remote from home. Today we had a lecture about State and Lifecycle of React. which includes Mounting, update and unmount of React Dom. here is the one link about related topic which we study today. Hopefully it will help a bit.  https://reactjs.org/docs/state-and-lifecycle.html',
        name: 'Yasir'
    },
    {
        title: 'React Conditional Rendering',
        category: 'React',
        text: 'In afternoon we had a lecture about Conditional Rendering (https://reactjs.org/docs/conditional-rendering.html) and Destructuring (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in React. Links attached.',
        name: 'Yasir'
    },
    {
        title: 'Controlled and uncontrolled components',
        category: 'React',
        text: 'Controlled and uncontrolled component. Using ref to get value from dom element, and store in constructor. Text area, checkbox and radio in react, we own the state therefore we can store whatever we want. Nizar also talked about new way to not using bind this in class, currently normal js class only can have method , but we can create a varible and assign a value with help from Babel (edited)',
        name: 'Viet Dong'
    },
    {
        title: 'Form Validation',
        category: 'JS',
        text: `We continued working on Let's Talk. In the morning, there was a good lecture on Form Validation. Nizar explains a bit about Controlled and Uncontrolled Components. As you can see in slack he shared the code snippets that we did during lecture. Those who are struggling with current assignment I think its a good idea to follow the example from code snippets. Validation in React is a bit tricky than how we did n JS, I recommend all to at least go through the code once. Since, everyone is in Holiday Mood, I bid a FareWell to all and Enjoy MID SUMMER.`,
        name: 'Rojak Amatya'
    },
    {
        title: 'Disabled, Validation, Extracting validation to function, Submit based on validity',
        category: 'JS Validation',
        text: `------Disabled ------
        To disable button, use 'disabled' in the button JSX element.
        <button disabled={true}> click me </button>
        
        A condition can be added. The example is a button that is disabled if state name is empty (is false).
        <button disabled={!this.state.name}> click me </button>
        
        ------Validation------
        In React, we will not use HTML5 validation. We will instead use JS for validation. In the example, you can see how a className is added to the input if the state name is empty. The class is named "invalid", which corresponds to the CSS .invalid which invokes a certain style.
        <input className={!this.state.name ? "invalid" : ""}  />
        
        Regex can also be implemented as validation to invoke 'invalid' className. Example shows a regex test on the state name. If test is not passed, class 'invalid' will be added to the input element.
        <input className={/^[a-zA-Z]+$/.test(this.state.name) ? "" : "invalid"}  />
        
        A button can be disabled via the same method. The example shows a button being disabled if either state firstName or lastName is empty.
        <button disabled={!this.state.firstName || this.state.lastName}> </button>
        
        
        ------Extracting validation to function------
        Validate = (firstNameVal, lastNameVal, emailVal) => {
            Const abc = {
                firstName: /^[a-zA-Z]+$/.test(firstNameVal) ,
                lastName: /^[a-zA-Z]+$/.test(lastNameVal) ,
                Email: CONDITION emailVal
            }
        }
        
        Render() {
            Const errors = this.validate( this.state.firstName , this.state.lastName , this.state.email);
        
            Return (
                <input className={errors.firstName ? "" : "invalid"}  />
            )
        }
        
        ------Submit based on validity------
        With the validate function, we can now receive an object with all validation properties (true or false) of all fields.
        To figure out if form is ready to submit, loop through the returned validate() object to check if ALL properties are validated (or is true).
        Object.values(obj) returns an array of all the values of the objects.
        
        There are Array methods that can return true or false on whether an array list contains certain values (eg. Arr.includes, arr.some, arr.every).
        arr.some( (property) =>  {return property} )`,
        name: 'Ben Leung'
    },
    {
        title: 'onFocus and onBlur ',
        category: 'JavaScript',
        text: `In the morning, Nizar continued from yesterday’s lecture. The main takeaways are as follows:
        - onFocus is a better event than onClick
        - onBlur is also discussed
        
        Checkbox validation:
        - “checked” is the main target for state
        - states of “checked” can be stored in an array, object or more complex data structures (during the live coding an array is used)
        - if the array contains the “value”, it indicates the checkbox is “checked”
        - we have the options to use “splice” or “slice” to update the array
        
        npm 
        - www.npmjs.com
        - tips on how and when to install/download packages/libraries for use
        - Libraries can be judged based on:
        --Popularity (number of downloads)
        --How old it is? Versions?
        --Is it maintained? Is it still active?
        --Dependencies? (the lower the better)
        - Validator.js can be installed for form validation purposes instead of RegEx methods
        
        Ps. The snippet from the live coding is on the 2018class channel`,
        name: 'Rojak Amatya'
    },
]