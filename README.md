Use 'npm run start' to run the app in a test server.

This is the React app for the github pages site containing my resume, my about page, and a summary of my github projects.
All projects will have links to their github repositories and summaries of their purpose and the tools used to make them.
Projects with working demos will also have links to those demos hosted elsewhere on the github pages site.

TODO: 
1. Display project data in Demo.js for the correct project when clicked in the projects-list
    - Because App.js already makes sure only one project has display: true at a time, we just need to make a way
    for Demo.js to parse which one has display and set the appropriate boolean so it displays.
    - Make an array of booleans for every project in usestate!
2. Alter the projects in App.js to work off of a .json server API
3. Complete the actual text for the content in the home page and link to resume
4. Clean up tempoDemo
5. Make different css files for the different pages