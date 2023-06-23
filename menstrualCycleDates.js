import moment from "moment";

// function getFlowDate(lastPeriod, cycleLength, flowLength) {}

// function calculate() {
//   const cycleLength = parseInt(document.getElementById("cycle-length").value);
//   const flowLength = parseInt(document.getElementById("flow-length").value);
//   const today = new Date();
//   const nextPeriod = new Date();

//   nextPeriod.setDate(today.getDate() + (cycleLength - periodLength));

//   const formattedDate = `${
//     nextPeriod.getMonth() + 1
//   }/${nextPeriod.getDate()}/${nextPeriod.getFullYear()}`;

//   document.getElementById("next-period").innerText = formattedDate;
// }

document
  .querySelector("#calculateButton")
  .addEventListener("click", calculateDates);

function calculateDates() {
  // get input values
  const lastPeriodDate = new Date(
    document.querySelector("#lastPeriodDate").value
  );

  const cycleLength = parseInt(document.querySelector("#cycleLength").value);

  const flowLength = parseInt(document.querySelector("#flowLength").value);

  // calculate period dates

  const periodStartDates = [];
  const periodEndDates = [];
  let currentPeriodDate = new Date(lastPeriodDate);
  while (currentPeriodDate < new Date()) {
    currentPeriodDate.setDate(currentPeriodDate.getDate() + cycleLength);
  }
  while (
    currentPeriodDate <=
    new Date(new Date().getFullYear(), new Date().getMonth() + 6, 0)
  ) {
    periodStartDates.push(new Date(currentPeriodDate));
    const periodEndDate = new Date(currentPeriodDate);
    periodEndDate.setDate(periodEndDate.getDate() + flowLength - 1);
    periodEndDates.push(periodEndDate);
    currentPeriodDate.setDate(currentPeriodDate.getDate() + cycleLength);
  }

  // calculate ovulation date
  const ovulationDate = new Date(
    new Date(periodStartDates[1]).getTime() - 86400000
  );

  // Calculate fertile dates
  const fertileStartDates = [];
  const fertileEndDates = [];
  fertileStartDates.push(
    new Date(new Date(ovulationDate).getTime() - 345600000)
  );
  fertileEndDates.push(new Date(new Date(ovulationDate).getTime() - 172800000));
  fertileStartDates.push(
    new Date(new Date(ovulationDate).getTime() - 86400000)
  );
  fertileEndDates.push(new Date(new Date(ovulationDate).getTime() + 86400000));
  fertileStartDates.push(
    new Date(new Date(ovulationDate).getTime() + 172800000)
  );
  fertileEndDates.push(new Date(new Date(ovulationDate).getTime() + 345600000));

  // Calculate non-fertile dates
  const nonFertileStartDates = [];
  const nonFertileEndDates = [];
  for (let i = 0; i < periodStartDates.length; i++) {
    nonFertileStartDates.push(period.StartDates[i]);
    nonFertileEndDates.push(new Date(periodStartDates[i].getTime() - 86400000));
    if (i < periodStartDates.length - 1) {
      nonFertileStartDates.push(
        new Date(periodEndDates[i].getTime() + 86400000)
      );
      nonFertileEndDates.push(
        new Date(periodStartDates[i + 1].getTime() - 86400000)
      );
    }
  }

  const calendarEl = document.querySelector("#calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      ...periodStartDates.map((date) => ({
        title: "Period",
        start: date,
        end: new Date(date.getTime() + flowLength * 86400000),
        backgroundColor: "#FFC0CB",
        borderColor: "#FF69B4",
      })),
      {
        title: "Ovulation",
        start: ovulationDate,
        backgroundColor: "#ADD8E6",
        borderColor: "#87CEFA",
      },
      ...fertileStartDates.map((date, i) => ({
        title: "Fertile",
        start: date,
        end: fertileEndDates[i],
        backgroundColor: "#98FB98",
        borderColor: "#32CD32",
      })),
      ...nonFertileStartDates.map((date, i) => ({
        title: "Non-Fertile",
        start: date,
        end: nonFertileEndDates[i],
        backgroundColor: "#F0E68C",
        borderColor: "#BDB76B",
      })),
    ],
  });
  calendar.render();
}
