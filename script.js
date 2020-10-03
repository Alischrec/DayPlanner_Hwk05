
let secondCount = () => {
    // Moment Time Format:
    let currentDay = $('#currentDay');
    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    // Print Time of Day:
    currentDay.text(time);
}
$(document).ready(function () {
    secondCount();
    setInterval(() => {
        secondCount();
    }, 1000);

    // Create Time Blocks:
    let hours = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
    hours.forEach(hour => {
        const timeBlockEl = $(`<div class="row">
        <div class="col-md-1 pt-2 hour">${moment(hour, 'H').format('h a')}</div>
      </div>`);
      
      let currentHour = parseInt(moment().format('H'));

      let timeBlockClass = 'past';
      if (currentHour < parseInt(hour)) {
        timeBlockClass = 'future';
      }
      else if (currentHour === parseInt(hour)) {
        timeBlockClass = 'present';
      }
      const inputEl = $(`<input class="col-md-10 ${timeBlockClass}" type="text" data-time="${hour}">
      `);
      
      inputEl.val(localStorage.getItem(`hour-${hour}`));
      const saveBtnEl = $(`<button class="col-md-1 saveBtn fas fa-save" data-time="${hour}"></button>`);
      saveBtnEl.on("click", function () {
        const inputValue = $(inputEl).val();
        localStorage.setItem(`hour-${hour}`, inputValue);
    })
      timeBlockEl.append(inputEl).append(saveBtnEl);
        $('.container').append(timeBlockEl);
    })
    $('.container').append(`
    <br> <br>
    `)
});

// Save input into Local Storage and Displayed on browser:

