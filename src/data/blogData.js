
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
  }
]