# TODO
- [ ] Resketch the diagram
- [ ] Use ESC to escape modals
- [ ] Write proper documentation
- [ ] Handle errors and exceptios
- [ ] ? Create an analyses screen (to display delayed/late stuff, hours spent doing what, etc.)
## DATABASE
- [ ] Refactor models to match database tables
- [ ] Filter/Active search function for database
- [ ] Add finishedAt column
- [ ] ? Create auxiliary tables to help with analyses
## LOG
- [ ] Validate input fields
- [x] Use the Date().valueOf() instead of using strings
- [ ] Have fields and categories for the daily log
- [ ] The main screen display only the current log
- [ ] Create a new screen to display only the logs, sorted by years or months
## CHORES
- [ ] Validate input fields
- [ ] Send differents themes depending of the status (late, open, finished early)
- [x] Use the Date().valueOf() instead of using strings
## PROJECTS 
- [ ] Validate input fields
- [ ] Send differents themes depending of the status (late, open, finished early)
- [x] Use the Date().valueOf() instead of using strings
- [ ] Delete project deletes every activity
- [ ] Have option to archive project
- [ ] Archive projects when finished
- [ ] Create a new screen for archived projects
## ACTIVITIES
- [ ] Validate input fields
- [ ] Send differents themes depending of the status (late, open, finished early)
- [x] Use the Date().valueOf() instead of using strings
## PENDENCIES
- [ ] Sort pendencies by deadline before rendering the response
- [ ] Send differents themes depending of the status (late, open, finished early)
- [ ] Pendent elements with checkbox to mark as finished (the only elements to be checked are the pendencies)
- [ ] When finished, update pendent element and respective chore/project activity
    

# Ajenta
The objective of this project is to study HTML and CSS, and develop my own agenda to use in my daily routine.

## Project Structure
There will be 3 types of inputs:
- Obligations
- Projects
- Logs/ Reports

These will be displayed as monthly commitments, as these are checked/ finished the commitments will be displayed as erasuses

### Component Diagram Sketch
![Project Structure.](https://github.com/vasakamoto/ajenta/blob/main/Ajenta.jpg)

### Title
The title will display the current month and the percentage of month activities that are finished.

### Pendencys
This component will display the activities that are pendent.

For **Projects** this pendency can be achieved by setting a deadline.

For **Obligations** this will be achieved using a modulus operation (number of times per year / number of times done till now)

### Monthly Commitments
Component that display the activities to be done for that month.

### Obligations
Obligations regard activities that have some frequency related to it. Such as cleaning the bathroom, shopping provisions, make an appointment with the dentist.

There will be 2 ways of setting the number of times that a obligation need to be done
- Monthly
- Annual

In the end, both are the same, the difference is just cosmetic. Having the frequency, the annual quantity can be divided by the frequency to achieve the monthly frequency

### Projects
Projects are freer activities, in the sense that aren't bounded, necessarily, to a deadline or a frequency. However, it can be used to stipulate deadlines. Therefore, it will not be show in the Monthly Commitments if a deadline isn't set

### Daily Logs
A simple report to comment daily activities (limit to a number of char, this isn't supposed to be a essay or a diary)
