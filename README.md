# TODO
- [ ] Resketch the diagram
- [ ] Press ESC to escape modals
- [ ] Press enter to submit
- [ ] Write proper documentation
- [ ] Handle errors and exceptios
- [ ] Animations to fade out modals
- [ ] Transition animations for body swap
- [ ] Refactor html elements
- [ ] ? Remove models (There is no necessity to create an object to use it as a model to store data in the DB)
- [ ] ? Show in the boards headers number of activities done
- [X] Refactor html input elements to have classes for diferent types
## DATABASE
- [ ] Refactor models to match database tables
- [ ] Filter/Active search function for database
- [ ] ? Create auxiliary tables to help with analyses
- [ ] ? Refactor the 'values' parameters to a tuple
## LOG
- [ ] Validate input fields
- [ ] Have fields and categories for the daily log
- [ ] The main screen display only the current log
- [ ] Display log with breakline
- [ ] In the page-logs have an option to search
- [ ] In the page-logs organize by years tabs, in the years tab organize by months "click-to-load" elements
## CHORES
- [ ] Validate input fields
- [ ] Send differents templates depending of the status (late, open, finished early)
- [X] Insert check-box input element
- [ ] Show check-box if chore is late or open, if finished don't display
## PROJECTS 
- [ ] Validate input fields
- [ ] Send differents templates depending of the status (late, open, finished early)
- [ ] Have option to archive project
- [ ] Archive projects when finished
- [ ] Store date when finished
- [ ] Create a new screen for archived projects
- [ ] Project without deadline
- [X] Insert check-box input element
## ACTIVITIES
- [ ] Validate input fields
- [ ] Send differents templates depending of the status (late, open, finished early)
- [X] Insert check-box input element
## PENDENCIES
- [ ] Sort pendencies by deadline before rendering the response
- [ ] Send differents themes depending of the status (late, open, finished early)
- [ ] Pendent elements with checkbox to mark as finished (the only elements to be checked are the pendencies)
- [ ] When finished, update pendent element and respective chore/project activity
- [ ] Instead of checking every case with if statement, use an object to select each case
## STATUS
- [ ] Display some graphs and similar stuff
## UTILS
- [ ] Create function to verify the state of activities, projects and chores
    

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
