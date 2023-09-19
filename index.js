// code your solution here
let defaultActivity = "roller-skate";


function setDefaultActivity(activity) {
  defaultActivity = activity;
}

function saturdayFun(activity) {
  const usedActivity = activity || defaultActivity;
  return `This Saturday, I want to ${usedActivity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  










