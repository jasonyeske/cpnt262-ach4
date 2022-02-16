# Jason Yeske

## cpnt262-ach4 If This, Then That

### To Do: Create a form that uses an If/Else statement to visually change the page

- Create a drop down menu
    - Use select
        - Use option
- Wrap it in a form using form

- Create a paragraph tag with a unique id so I can use it in my js code
    - Leave empty so I can add text to it later

- Create js file
- Use Queryselector to link my drop down list to the javascript page
    - Making it a DOM

<!-- Important to know, but ended up switching my code because I forgot to add the button, so the code was switching when I selected something from the dropdown, not when I hit submit

Use addEventListener to make the page listen when that item changes
    - Click does not work, as soon as I click on the dropdown menu it adds text
        - Use change instead of click [javascript tutorial](https://www.javascripttutorial.net/javascript-dom/javascript-change-event/) -->

- Create a function 
    - When something is selected, we want to make it match the value
    - Create an if/else statement for each value
        - = not working
            - Use === instead, as it checks for if both values are true [Code Ahoy](https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/#:~:text=The%20difference%20between%20%3D%3D%20and%20%3D%3D%3D%20is%20that%3A,same%20type%20before%20performing%20comparison.&text=%3D%3D%3D%20does%20not%20do%20any,the%20two%20variables%20being%20compared.)


- Print the text to page when the button is pressed
    - I used get element by id to call the p tag


## Attributions

- [Developer Mozilla Event.preventdefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [Code Ahoy](https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/#:~:text=The%20difference%20between%20%3D%3D%20and%20%3D%3D%3D%20is%20that%3A,same%20type%20before%20performing%20comparison.&text=%3D%3D%3D%20does%20not%20do%20any,the%20two%20variables%20being%20compared.)
- [Developer Mozilla Htmlformelement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)


    