// calculate the time
document.querySelector('.calculate-btn').addEventListener('click', function() {
    let totalHours = 0;
    // each row of days
    let rows = document.querySelectorAll('.time-row');
    // loop to iterate over each row of days
    for (let i = 0; i < rows.length; i++) {
        // start time store input feild time with a construtor new date.
      let startTime = new Date('01/01/2001 ' + rows[i].querySelector('.start-time').value).getTime();
      //end time store input feild time with a construtor new date.
      let endTime = new Date('01/01/2001 ' + rows[i].querySelector('.end-time').value).getTime();
      // breaktime store the user enter break in hours.
      let breakTime = parseInt(rows[i].querySelector('.break-time').value) * 60 *60* 1000;
      // total stored the value converted into hours
      let total = (endTime - startTime - breakTime) / 1000 / 60 / 60;
      
      if (!isNaN(total)) {
        totalHours += total;
        rows[i].querySelector('.total-time').innerHTML = total.toFixed(2) + ' hours';
      } else {
        rows[i].querySelector('.total-time').innerHTML = 'Invalid time';
      }
    }
    
    document.querySelector('.total-value').innerHTML = totalHours.toFixed(2) + ' hours';
  });
  