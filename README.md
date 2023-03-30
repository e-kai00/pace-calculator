# Running pace calculator 

## Website purpose

The Running pace calculator aims to become a helpful tool for runners of all fitness levels. It can be used to set goals and plan training for upcoming races. The calculator is targeted toward runners who want to keep themselves motivated and improve their running performance.
<br>
Pace calculator is a fully responsive JavaScript website that will allow users to calculate running pace or time result for the chosen distance. Additionally it  calculates split time for shorter distances, which can be useful for track workouts.

The live link to the website - [Running pace calculator](https://e-kai00.github.io/pace-calculator/)

<br>

![Screens Mockups](/assets/images/readme-img/scr-mockup.jpg)


 ## Features

- __The Running pace calculator Logo and Heading__
  - featured at the left top of the page and easy to see for the user.

<br>

  ![Logo and heading](/assets/images/readme-img/scr-logo.jpg)

<br>

- __The Distance section__
  - allows the user to choose a distance either by selecting a predetermined distance of 5K, 10k, Half Marathon or Marathon, or by entering a custom distance;
  - the user can set a custom distance in the distance box with a minimum value of 1 meter.

<br>

  ![Distance section](/assets/images/readme-img/scr-distance.jpg)

<br>

- __The Time and Pace section__
   - displays Time result and Pace values;
   - if the user enters desired time result the pace will be auto calculated;
   - if the user chooses to set the pace, the time result will be auto calculated.

<br>

![Time and pace section](/assets/images/readme-img/scr-time-pace.jpg)

<br>

- __The Splits section__
   - represents short distances (100 through 1000 meters) with estimated time (in minutes) for each split (interval);
   - split time is based on the Pace input and updated each time the pace value is changed.

<br>

![Split section](/assets/images/readme-img/scr-splits.jpg)   

<br>

## Testing

- I tested that this page works in different browsers: Chrome, Firefox, Internet Explorer/ Edge
 
- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the DevTools device toolbar.

- I confirmed that the input fields work correctly: will only accept numbers with minimum value of 0, and maximum value of 59 for minutes and seconds fields.

<br>

### Validator Testing


- HTML
    - No errors were returned when passing through the official W3C validator;

- CSS
    - No errors were found when passing through the official (Jigsaw) validator;

- JavaScript
    - No errors were found when passing through the official (JShint) validator. The following metrics were returned:
    
        - there are 7 functions in this file.

        - function with the largest signature take 0 arguments, while the median is 0.

        - largest function has 13 statements in it, while the median is 10.

        - the most complex function has a cyclomatic complexity value of 4 while the median is 1.

- Accessibility
    - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Lighthouse in DevTools

<br>

![Lighthouse test](/assets/images/readme-img/scr-LH-test.jpg)

<br>

### Unfixed Bugs

No unfixed bugs

<br>

## Deployment

The website was deployed to GitHub pages. The steps to deploy are as follows:

- in the GitHub repository, navigate to the Settings tab;
- open Pages tab in the left menu;
- under the Build and Deploy section select Main Branch and click Save;
- once changes are saved the page will refresh automatically and the link to the completed website is provided;

The live link can be found here - [Running pace calculator](https://e-kai00.github.io/pace-calculator/)

<br>

## Credits

- Content

    - The icons for the website were taken from [Fontawesome](https://fontawesome.com/)

    - Instruction on [How TO - Add Active Class to Current Element](https://www.w3schools.com/howto/howto_js_active_element.asp) was taken from W3Schools

    - Instruction on placing label text below input elements was taken from [StackOverflow](https://stackoverflow.com/questions/3463621)

    - Ideas on converting time-decimals-time were taken from [StackOverflow](https://stackoverflow.com/questions/3733227) discussion



- Media

    - The logo was created by Daria (student of graphic design and my daughter)

    - The background photo is by Mateusz Dach from [Pexels](https://www.pexels.com/photo/blue-athletic-field-332835/)
