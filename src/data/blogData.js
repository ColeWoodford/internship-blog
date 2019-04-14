
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
  },
  {
    title: "Week #7 2/18/2019",
    content: `We began our week preparing for deployment. All the changes we had made were now on a test-able internal site. The testing team were running automated
    testing scripts against the front-end while me and my mentor reacted to what was found. Immediately there were problems with the dataview table I had created. 
    Buttons that should be opening a modal showing more information for a row in the table were doing nothing. I looked at the connection script but nothing seemed to be amiss.
    Then, I checked the demo view of the table from the site. Here I was able to press the view button and have it work correctly. This led me to think the problem was
    a permissions issue. However, before I could investigate further, our project manager told us to roll back other changes we had made. Further discussion was needed before
    we used the table in other places on the site. Rolling back these changes and making some adjustments to the rendering of the table solved my first problem without having
    to change any permissions.
    
    I also had a sit down with the project manager to discuss my role on the project. She asked if I had a preference of what kind of tasks I should be put on. They are
    working to update the back-end of the application, but it sounded like there was enough developers working on it. I am also interested in improving my skills in PHP and
    javascript. Once I spoke with my mentor a little about it, I sent my project manager an email saying I was interested in application development tasks involving PHP and 
    javascript. She said she would do her best to assign work related to this. It was very nice to be given the opportunity to express my interest in areas of development for
    myself.
    
    By the end of the week we had the test site ready and working. This meant that we were ready for deployment. Next week the code would be pushed to our production server and
    the changes made in this last sprint will become available to the users. I wrapped up my final tasks by making everything work in our navigation settings.`
  },
  {
    title: "Week #8 2/25/2019",
    content: `Monday began with my mentor pushing all our changes to the production site. A new developer and I watched and took notes as the process was completed. We ran into one
    issue involving a database update. Each change we make to the database must be recorded. A script needs to be made that will make the same changes on the production database. These
    scripts must include a statement about what the version number is for the update. The problem we ran into is that one of these updates relyed on another. When working through the updates,
    we did them out of order and so one of the updates failed. Confusion issued when someone also did not record an update number with their database changes. This made my mentor wrongly
    assume that the problem we were having had to do with a missing script, and not just executing the scripts out of order. It took us a little investigating to discover the problem and 
    correct it, but this was our only snag in the deployment process.
    
    Later in the week I worked on tasks to change the way a table is rendered on the site. By default a table would be sorted on a certain column. My task was to add a new column and
    change the loading to sort by this by default instead. The task was fairly simple but it took me a while to complete. The project is complicated and navigating through some of the logic 
    takes time. When I had this finished I went on to work investigating some other bugs.
    
    My week ended with a meeting with our project manager. We met to talk about my plans after graduation. I was excited to learn that I have a good chance at a job within my group after
    I get my diploma. We talked about how to prepare for becoming a software engineer. I need to meet with some other project managers to discuss projects that would take me on. Currently,
    I spend a lot of my extra time learning about react/redux, and I hope to be useful to projects that use this framework. When I meet with other project managers I will ask them what
    technologies they would like me to focus on until graduation, and this should help solidify a path forward for me.`
  },
  {
    title: "Week #9 3/4/2019",
    content: `I spent most of my week investigating the automation of an excel spreadsheet used in our application. A user is able to download a copy
    of the spreadsheet which comes loaded with the most recent values in two drop-downs from our database. This spreadsheet is generated by a template
    saved on our production server and the values in the drop downs are updated manually once a day by our manager.
    
    My task was to generate a script that we could run once daily that would pull the new items for drop-downs from the database, update the spreadsheet with these drop-downs, and update
    the template on the production server. I did this by using a library available in our project called PHPExcel. PHPExcel is an old version of a scripting library that allows you to build
    and modify excel spreadsheets with PHP. The problem is, the library has been depricated since 2015. A lot of the documentation has been removed from their sites, and so finding answers
    for how to use the tool was difficult.
    
    I spent a lot of time trying to build basic scripts with PHPExel by following advice I found online but I ran into some problems. PHPExcel does not handle excel elements like a custom text box.
    This was troubling because the original template has a text box. I checked with my mentor and I was able to change this to using hard coded text in a cell. I then ran into an issue where the values
    for drop-down items pulled from my database were not showing up in the spreadsheet. Solving this issue was the biggest hurdle I encountered during this task. After trying many solutions I was not able
    to get this working. I finally ran across the original documentation for PHPExcel saved online as a pdf. It was here that I found the correct answer to get my drop-downs working.
    
    The problem is that the string value passed to the function used for creating drop-downs is limited to 255 characters. To get around this, you can loop through the list of items and add them to cells 
    in the spreadsheet. Then you can give the function instructions for what cell range to ingest. This allowed me to complete my task.`
  },
  {
    title: "Week #10 3/11/2019",
    content: `This week I was given a new task since we started another sprint. I am to build and configure a new data form that will be used to track
    issues for our Help Desk. The beginning of the week I spent my day working to fix any bugs found since our last development tasks were pushed to the production site.
    Next it was time to meet with the Help Desk project managers and collect requirements. The meeting I attended for this lasted a long time but was very interesting.
    We have about six sections of that data form to build and only gathered requirements for the first.
    
    Once we had some requirements I began working on building the data form. There will be very limited custom code for this form, as most of what is needed can be configured
    using the settings in our application.
    
    I also needed to complete some refresher training this week. I spent a good amount of time on Friday reading through the training module. I watched several videos that impressed
    upon me how commited PNNL is to safety. The managers being interviewed made it plain that they want workers to know that calling for a stop work will not get them in trouble.
    This is different than other places I have worked at in the past and makes me want to work for PNNL after graduation.`
  },
  {
    title: "Week #11 3/18/2019",
    content: `I began this week continuing work on the new data form required for our client. Limiting the custom code has been easy so far since the tool
    is built for making data forms like this. There will still be need for custom code. One requirement is to build a drop-down of date values that a user can
    select. These dates must be Fridays only and extend out from the current date by 90 days. To accomplish this, I am using some simple library functions to
    find the dates needed and am then saving them into a table in our database. Once I have a script set up to perform this logic, I plan to make a task on our
    server to run the script once a week and update the Friday values.
    
    I worked to get as much of the form done as I could. At the end of the week we had another meeting with the client to discuss more requirements and to show
    what had been completed so far. We had an hour long meeting and during this, I demoed my work on the form. The client seemed impressed with the amount of work
    I had completed. There was plenty of feedback to collect though. At several spots in the form I had configured the wrong values for dropdowns. This is easy to fix,
    and I will get better at making these judgement calls when I become more familiar with the project.
    
    Next week I will repeat much of the same as this week. My mentor will return from a trip to the border, and he might help set me up with a new react-based project.
    That would mean splitting my time with my current project, but would also allow me to work with some newer technologies.`
  },
  {
    title: "Week #12 3/25/2019",
    content: `This week our group is meeting for three days to have a sandbox meeting. Each day we have speakers present on projects that can be applied to many
    areas and have discussions about what we are working on. In addition there are tech demos to show off some helpful tools being built within the group. I was
    asked to present with another intern on our work to build a testing library for React applications. I spent Monday finishing what I could for my current projects
    then met with my friend Tycko (the other intern) to make our presentation. We chose to use PowerPoint because we had one day to prepare. This was a little bit of a mistake.
    
    Other developers critisized our use of PowerPoint, saying we should have coded our own markup for the presentation. I think this is something that would have distracted
    from the presentation since we did not have a lot of time to prepare and practice. It led to a discussion that had little to do with our project and was a little frustrating.
    
    The talk went well overall and we got a lot of positive feedback. The practice was very important for us because we will be presenting our work again in June at a lab
    wide event called TechFest. After the sandbox event was over I went back to work on my data form. I built out the latest requirements and began working on some extra
    bits that the sponsor would like. I hope that I will have something nice built to show at our next meeting, as I believe this task will need to be completed soon.`
  },
  {
    title: "Week #13 4/1/2019",
    content: `I had been assigned to take a trip to Yuma AZ next week to do a physical inspection of a border customs port of entry. This week I spent
    my time preparing everything for the trip. I met with the sponsors of my data forms project. We are working on adding an automatic email ingestion
    feature that will build sections of the form if an email is caught sent to a particular address. While my mentor is working on the logic for the
    ingestion tool, I worked on setting up a view for the form. This is something our sponsor cares a lot about and they will like to see this view the next
    time we meet.
    
    I set up meetings for completing the rest of the form and continued working on new features to what is built. I wrote a script to collect Friday
    values to be added to a drop-down in Javascript. However, I need to turn this into an SQL procedure. Much of my time was spent working on converting
    the script. This was a difficult challenge for me as it is the first procedure I have written in SQL. I was able to complete the script but am not happy
    with how it is implemented. I want to take advantage of while loops and clean up the code. This will have to wait until I return from the border.`
  },
  {
    title: "Week #14 4/8/2019",
    content: `This week I spent my time in Yuma Arizona at a port of entry to do a physical evaluation of the site. Early Monday I flew out from Pasco to
    Denver, then to Phoenix and finally Yuma. This first day was just spent traveling. The next day another software developer and I drove to the border port
    to meet with the chief officer and sector director. We spent the day asking questions about how spaces are used, taking measurements and pictures. This
    first day was spent indoors to try and escape the heat. The next day we handled the spaces outdoors. Everything went very smoothly and although we were
    scheduled to spend three days working, we completed our task in two. At the end of this second day we got in touch with our admins and requested plane tickets
    that would get us home a day early. We were able to get the tickets but we would need to drive to Pheonix to reach our flight in the morning. On Thursday we
    drove to Pheonix, caught our flight, and returned to Pasco. Friday I spent my day returning emails and working on my SQL procedure for my data form.`
  }
]