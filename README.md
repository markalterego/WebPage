Github Pages: https://markalterego.github.io/WebPage/

```
HTML:
    1. Basic HTML structure is present.
        Examples: 
            index.html -> line: 1 
                - index.html starts with a document type declaration
            index.html -> line: 9 - 33
                - the visible part of the document is inside the body tag 
            index.html -> line: 11 & 16
                - the most important heading is defined with the h1 tag
                - the second most important heading is defined with the h2 tag
    
    2. HTML structure with clear content differentiation (headings, paragraphs, lists).
        Examples:
            index.html -> line: 11
                - the heading of the page is defined with the h1 tag
            index.html -> line: 28
                - the main paragraph of the page is defined with the p tag 
            about.html -> line: 31 - 35
                - a list containing my hobbies is inside the ul tag
                - the different hobbies defined are inside the li tag
    
    3. Use of forms, links, and media.
        Examples: 
            surveys.html -> line: 31 - 44
                - the form is defined inside the form tag
                - the form takes input through the input tag
                - the form inputs are labelled with the label tag
                - the form is submitted with the input type="submit"
            index.html -> line: 17 - 22
                - the links are defined with the a tag
                - the links use relative URLs 
            images.html -> line: 29
                - an image is defined inside the img tag
                - this image has been uploaded and taken from a free image
                  hosting website (https://i.ibb.co/2FF7hQV/punpunpun.png)
            images.html -> line: 35
                - an image is defined inside the img tag
                - this image is saved locally inside a folder (./assets/pictures/klassikko.png)

    4. Tables are effectively used.
        Examples:
            surveys.html -> line: 96 - 137
                - between these lines are defined 3 tables 
                - these tables hold answers to the surveys, which are present 
                  on the same page
            surveys.html -> line: 96 - 109
                - the first table, like every other table, holds tags tr and 
                  td inside of it
                - the reason there are no th tags present is simply for appearance 
                  purposes
            surveys.html -> line: 99 & 103 & 107 
                - the first table defines one cell per row, which is given an id
                - this id is for the purpose of updating the cell through a script

CSS: 
    1. Basic CSS styling (colors, fonts).
        Examples:
            ./assets/css/index.css -> line: 3
                - background-color is defined with aliceblue
            index.css -> line: 16
                - the main font used in the webpage is defined 
                  with the font-family of Times New Roman

    2. Use of classes and IDs to style specific elements.
        Examples: 
            index.css -> line: 1
                - body tag selector is used to define important
                  document-wide modifications, such as: 
                    > background-color: aliceblue
                    > font-family: 'Times New Roman', Times, serif;
            index.css -> line: 19 & 37
                - these lines define class selectors, in this case:
                    > .headerContainer
                    > .mainContainer
            index.css -> line: 134
                - this line defines an id selector by the name #links
    
    3. Implementation of responsive design elements.
        Examples:
            index.css -> line: 116 - 121
                - these lines hold the media query, which is ran when 
                  the width of the screen is lower than 1400 pixels
                - this specific media query currently only handles the
                  responsive design of images.html page
                - normally the images on images.html page are placed
                  two pictures per row, however, when this query is completed
                  the layout changes to only containing one picture per row
            index.css -> line: 123 - 159
                - these lines hold the media query, which is ran when
                  the width of the screen is lower than 1200 pixels
                - this media query is designed for the purpose of handling
                  smaller screen layout
                - usually the layout of the screen is as follows:

                    >          header
                    > links maincontent extracontent

                - when this query completes, the layout of the screen changes
                  to the following order:
                  
                    > header
                    > links
                    > maincontent
                    > extracontent
                
                - therefore the content is changed to appear solely in a row-format
                  instead of displaying some of the content next to each other
    
    4. Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid).
        Examples:
            index.css -> line: 4 - 9
                - as discussed in the previous example, the layout of the normal
                  sized screen is as follows:

                    >          header
                    > links maincontent extracontent
                
                - this layout is made possible by the grid display 
                - the grid display requires the defintion of the column- and row-sizes,
                  and the definition of the building blocks which make up these columns
                  and rows, in this case: header, links, maincontent and extracontent
            index.css -> line: 21 & 30 & 39 & 47
                - these lines hold the definition of the grid areas for each building
                  block: header(header), side(links), main(maincontent) and side2(extracontent)
            index.css -> line: 125
                - this line defines the body to be in the format of a flex layout, for
                  the purpose of the smaller screen, as follows:

                    > header
                    > links
                    > maincontent
                    > extracontent
    
    5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
        Examples:
            index.css -> line: 1 - 159
                - personally, the previously provided examples make the layout straightforward
                  and simple to the user to understand and use, and while the aesthetics are plain
                  they shouldn't irritate the eye of the user too much

JavaScript Basics:
    1. Simple interactions (like alerts on button click).
        Examples:
            ./assets/js/surveys_script.js -> line: 152 - 155
                - these lines present an alert, which is located inside the
                  event listener for a submit button
                - the purpose of this alert is to inform the user that the
                  button they've pressed has in fact not been implemented properly
                  yet and the user is then urged to not press it again
                - the button, which dispatches the event is located in the file
                  surveys.html on line 86
                - this submit button is purposely located within the third survey,
                  in surveys.html since this survey doesn't have any input buttons, which could be pressed by the user

    2. Multiple event listeners and basic DOM manipulations.
        Examples:
            surveys_script.js -> line: 22 - 29
                - this event listener dispatches an event when the document 
                  is fully loaded
                - the purpose of this event is to restore the previously provided
                  answers to the surveys from local storage, only if the previous 
                  answers can be found in local storage
            surveys_script.js -> line: 31 - 68
                - the rest of the event listeners inside the file are for 
                  dispatching events on the press of a button, this specific event
                  listener is no different
                - this event listener dispatches an event, when the animalForm is 
                  submitted, which can be found in surveys.html at line 31, the 
                  submit button for it on line 43
                - the purpose of this event listener is to give the user some input
                  regarding their answer, increment the count for the given answer
                  by one, store all answers given thus far to local storage and lastly
                  update the tables at surveys.html between the lines 96 - 137 or if
                  we're being very specific, the cells at lines 99, 103, 107, 115, 119,
                  123, 127 and 135
            surveys_script.js -> line: 39 - 54
                - these lines belong to the animalForm's event listener and in them
                  we are giving the user some input based on their answers
                - this input is given by manipulating the textContent of the p tag at
                  surveys.html line 46

    3. Use of arrays, objects, and functions.
        Examples:
            surveys_script.js -> line: 10 - 20
                - the answers submitted from surveys.html and processed at
                  surveys_script.js are stored inside this array
                - this array stores 8 objects for representing each answer, which can
                  be given through the surveys at surveys.html
                - these objects consist of the name of the answer and the count of
                  how many times that specific answer has been given
            surveys_script.js -> line: 60
                - on this line the array is manipulated at index i
                - specifically the object stored at index i is manipulated by incrementing
                  the count of the object
            surveys_script.js -> line: 78
                - the eventlistener for icecreamForm also stores a local array inside
                - the purpose of this array is to temporarily store items that are found
                  in the formData object 
                - on line 99 the answer(s) submitted to the icecreamForm is pushed into the
                  local array
            surveys_script.js -> line: 158 - 169
                - this line stores a function for the purpose of updating the cells at
                  the tables located at surveys.html
                - this function is called once at the end of all event listeners inside
                  the script, specifically on lines 27, 67, 137 and 150

    4. Advanced logic, looping through data, and dynamic DOM updates.
        Examples:
            surveys_script.js -> line: 35 - 37 & 56 - 63
                - through the animalForm event listener, the user can only give one 
                  answer at a time, this answer is then stored inside an object of 
                  type FormData
                - in this case the FormData object stores the user input in the form 
                  of keys and values
                - we search the object by the key 'animalQuestion', which then returns
                  us the value, which is one of the answers, which we then store to the
                  variable item
                - the loop goes through all the possible answers in the answered array
                  and then compares the given answer to the answer found in the array
                - if the answer given is exactly the same as one of the answers inside
                  the array, then the count of that specific answer is incremented by
                  one, which again signifies simply how many answers by that name have
                  been given thus far
            surveys_script.js -> line: 74 - 100
                - through the icecreamForm event listener, the user can give multiple
                  answers at the same time
                - similarly to the animalForm, we first store the user input into the
                  object of type FormData
                - however, since multiple inputs can be given through the icecreamForm,
                  this time instead of searching for a value responding to a key, we 
                  loop through everything that's stored in formData (all user input)
                - we get an array of strings from formData and save it onto the item
                - the item now holds the values item[0]='icecreamQuestion' and 
                  item[1]='answer', answer being 'vanilla','chocolate','strawberry' or 
                  'other2'
                - this answer is then pushed into the local array at line 99, after
                  which the loop takes the next array of strings out of the formData
                  object
            survey_script.js -> line: 76 - 117
                - while we are going through the users answers and putting them inside
                  the array, we're also starting to construct a message, which we're going
                  to give the user
                - the idea is to display the user a message in one of the following forms: 
                    
                    > 1. 'You answered: Nothing! I need to update my list of options...'
                    > 2. 'You answered: Answer! That sounds yummy!'
                    > 3. 'You answered: Answer, Answer! That sounds yummy!'
                    > 4. 'You answered: Other! Wonder what flavor that would be...'
                
                - we start at line 76 by making a string consisting of 'You answered: '
                - on lines 82 to 97 we append the user inputs one by one to the string
                  until we end up with, for example: 'You answered: Vanilla, Chocolate, '
                - on lines 102 to 115 we then further format this answer to look better,
                  which in this case requires getting rid of the last two characters ', '
                  and appending '! That sounds yummy!' to the end of the string  

                    > 'You answered: Vanilla, Chocolate! That sounds yummy!'

                - we then display the formatted answer to the user at line 117, or at
                  the paragraph at surveys.html line 72
            survey_script.js -> line: 158 - 169
                - besides the user answers provided in lines 41, 45, 49, 53, 117 and
                  then shown at surveys.html at paragraphs 46 and 72, by the press of
                  some form input and by submitting the input, the user changes the
                  data displayed on the three tables at surveys.html lines 96 - 137
                - this naturally being made possible by the function pushing the data into
                  the forms, which without, there would be no reason to even making the
                  tables in surveys.html in the first place
                - the user therefore has control over the environment and can be provided
                  some (be it quite little) stimulation from inputting data into the forms
``` 