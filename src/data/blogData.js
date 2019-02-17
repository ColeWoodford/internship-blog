
export const data = [
  {
    title: "Week #1 1/7/2019",
    content: `My week started with an update meeting with our client. We talked about what was needed to finish the application we 
    have been working on. I was assigned the task of finishing the ingestion script to populate the database and also to get the 
    database deployed on our server. While the front end is working with this new setup I would also need to help correct any problems.
    
    To build the ingestion script, I integrated a command into our project using PHP. The spreadsheet has been created using excel, so
    I needed to create a tool that would read in not just cells from the worksheet, but also be able to switch between multiple worksheets
    to gather data. To do this, I used a 3rd party library called phpspreadsheet. This allowed me to create a working script to use my entity
    functions and populate a database.
    
    The initial push to move our database and API to a server went fairly smooth. We use npm and composer to track dependencies, so setup was
    mostly just running install commands and then moving files to the server through WinSCP. However, to run the ingestion script, we needed to
    install phpspreadsheet, which is a little more tricky. The library requires a 64 bit installation of PHP but what natively is available through
    xammp is 32 bit. I solved this problem by installing a 64 version in addition to xampp and changing my windows environment variables. This allows
    me to install the library then move it to the server.`
  },
  {
    title: "Week #2 1/14/2019",
    content: `We were given an important requirement to complete this week - build a unit conversion tool to add to the application. The conversion
    tool would need to store coefficients and calculate conversion rates before returning a fully converted value. I started my week by building an
    entity and controller for the backend to get and retrieve the information needed to accomplish this, while also responding to any problems we
    had resulting from our move to a server last week.
    
    One thing we encountered on the server is that file permissions matter quite a lot. POST requests were being treated as GETS and it took a while
    before a developer realized what the problem was. File permissions needed to be changed to give xammp the power to change things on the server.
    
    By midweek I had built the back-end logic to complete our unit conversion tool. I gave these changes to the front-end developers who worked to
    create a demo-able example. When I returned on Friday, they had built a fully working tool with my API. We now needed to deploy everything to
    the server. I worked to copy everything once again, and we spent the rest of the day double checking that everything was working.`
  },
  {
    title: "Week #3 1/21/2019",
    content: `This week was my last chance to work with my current mentor. We have finished the back-end project we have been working on for the
    last few months, so we needed to answer questions for the front-end developers while also moving on to another project. I was tasked with introducing
    the developers of this new project to Jest testing. I created some quick examples of snapshot tests so that devs could quickly and easily test
    react components. However, I also needed to develop tests to check that functions are pure. This new project had many helper functions to do a lot of
    math, and as a requirement they needed to be pure.
    
    I created these tests using raw javascript. A pure function must not change its output given the same input. In addition it cannot create side-effects
    in the application. I not only need to check that the result is the same, but that outside data is not being modified, and that the scope of the function
    does not affect what is sent into it. I finished these tests at the end of the week and sent them to my mentor to review. Next week I should be put
    on another project with a new mentor.`
  },
  {
    title: "Week #4 1/28/2019",
    content: `This week began with feedback about my pure function tests. I did not include a change to the package.json file to include Jest because I had
    it installed globally. This meant that someone downloading my tests would need to perform some additional setup before running them, which I did not
    document. To remedy this, I wanted to include Jest in the dependencies and include scripts that would run the tests. This would give a developer
    an easy way to access the tools.
    
    I ran into some problems because the application was using an old version of Babel. It was incompatible with Jest and caused the tests to fail.
    Updating Babel would allow the Jest tests to run, but would crash the app. The solution was to give an old version of Jest as a dependency and keep
    Babel the same. It took me a while to find this answer, but now the tests will work correctly.
    
    Once I had provided a good suite of test tools, I moved on to my new project. I attended some meetings with my new mentor, and got a little familiar with
    the project. I then began the process of setting up my development environment for the project. We are using Xampp to handle some of the server
    services and my PHP version seems too new to get the project working. I will need to downgrade my version of Xampp next week.`
  },
  {
    title: "Week #5 2/4/2019",
    content: `I began my week by finishing setup for my development project since switching to my new mentor. Downgrading Xampp was only the first
    step to solving my issue for setting everything up. The project requires a lot of configuration to get everything going and so I needed quite a bit
    of help from my mentor. Once everything was working I started to get familiar with the project.
    
    We all share a database so I need to be careful when making changes to our production site. My first task was to convert a table existing on the app with
    a new table created with our custom tools. This required me digging through the code to find how the table was being populated, create a view in our
    database that would provide the new table with all its information, building custom JS to handle button logic, and finally adding the new page to our
    application's navigation.

    The most difficult part of this task was creating the custom javascript to handle button logic. I created a new phtml script and linked it to our custom dataview.
    The script gathered variables from the environment using php, created a tag to attach everything to in html, and then created a click listener using javascript.
    When the button was clicked, a dialog opens showing information from the database formatted in a neat and consistent way. This was one of my first attempts at building
    something using Jquery so I learned a lot.
    `
  },
  {
    title: "Week #6 2/11/2019",
    content: `This week we were hit with a lot of snow. I spent each day of work programming from home. The task of changing a table on our application
    to use a custom data view was completed after much configuration. I hit a little bit of a block when a line of code was validating that the request
    to get data for populating the data view was a POST, but my script was making a GET request. I tracked down a solution for this and changed the request
    to a POST. However, this investigation also let to finding a strange behavior on the site. The config for a data view contains a checkbox for a custom
    button to make a GET or POST request, but no matter how this was set up the request would always be GET. I spent a lot of time looking into this problem
    and eventually came to the conclusion that our setup would always make a GET request if another checkbox was marked for the button to open a dialog box.
    
    This discovery has sparked a conversation about how the checkbox should work. We cannot think of a time where a dialog box should be populated with info
    fetched using a POST. So changing the check for the dialog box being checked should stay the same. However, because this caused so much confusion we are thinking
    of adding a required tag for the url field if the dialog box is entered, and some text showing that the request will be a GET. Perhaps disabling the POST/GET
    checkbox when the dialog box is checked would also be a good idea.
    
    Through the process of changing the table over to a data view I documented everything. One piece that is still missing is instructions for creating
    a view in our database. The view would be used if a complex query is made to construct the data view's columns. We need to pull the columns from a single
    source so making a view could provide us with that. This task already had a sufficient view so there was no need to create a new one, but a future task
    may need it, so it will be important to update the documentation at that time.`
  }
]