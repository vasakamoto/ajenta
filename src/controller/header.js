import pug from "pug";

function getDate(req, res) {
    let date = new Date();
    const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    date = `${weekDays[date.getDay()]} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const template = pug.compileFile("./src/view/templates/header-date.pug");
    const markup = template({date});
    res.send(markup);
}

export { getDate }
