# TODO
- [ ] Resketch the diagram to an higher fidelity screen
- [ ] Proper documentation
- [ ] Use the Date().valueOf() instead of using strings
- [ ] Sort pendencies before rendering the response
- [ ] Refactor models to match database tables
- [ ] Filter/Active search function for database
- [ ] Handle errors and exceptios (e.g. create db if doesn't exists, tables and so on) in database.js
- [ ] Layout a div to put chores and projects together vertically oriented and this div to the right of pendencies
- [ ] Use ESC to escape modals
- [ ] Refactor post functions (there is no necessity to access the db 3 times in the same function)
- [ ] Validate input fields
    

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
