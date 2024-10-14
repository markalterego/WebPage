Github Pages: https://markalterego.github.io/WebPage/
´´´
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
            surveys.html -> line: 29 - 42
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
            index.css -> line: 113
                - this line defines an id selector by the name #links
    
    3. Implementation of responsive design elements.
        Examples:
            index.css -> line: 95 - 100
                - these lines hold the media query, which is ran when 
                  the width of the screen is lower than 1400 pixels
                - this specific media query currently only handles the
                  responsive design of images.html page
                - normally the images on images.html page are placed
                  two pictures per row, however, when this query is completed
                  the layout changes to only containing one picture per row
            index.css -> line: 102 - 138
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
            index.css -> line: 104
                - this line defines the body to be in the format of a flex layout, for
                  the purpose of the smaller screen, as follows:

                    > header
                    > links
                    > maincontent
                    > extracontent
    
    5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
        Examples:
            index.css -> line: 1 - 138
                - personally, the previously provided examples make the layout straightforward
                  and simple to the user to understand and use, and while the aesthetics are plain
                  they shouldn't irritate the eye of the user too much

JavaScript Basics:
    1. Simple interactions (like alerts on button click).
        Examples:


        
´´´