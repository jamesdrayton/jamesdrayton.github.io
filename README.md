Use 'npm run start' to run the app in a test server.

This is the React app for the github pages site containing my resume, my about page, and a summary of my github projects.
All projects will have links to their github repositories and summaries of their purpose and the tools used to make them.
Projects with working demos will also have links to those demos hosted elsewhere on the github pages site.

TODO: 
~~1. Implement updateDemo in App.js so it updates the display information about each demo page~~
~~2. Alter Demo.js so it can parse the display information and display the right demo~~
3. Modify VanLab's tempo_determination to work here
4. Have Demo.js display it only when the right project is clicked
If each demo has a boolean associated with it and we apply jsx logic (e.g. {boolean && <Demo project={projects[currDemo]}></Demo>})
then the boolean could be passed through.
~~5. Fix different displays on apple iOS~~
6. Fill in contacts info
7. Finalize text on "About" page
8. Finalize display text for projects
9. Alter the projects in App.js to work off of a .json server API