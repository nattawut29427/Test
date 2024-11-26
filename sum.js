function classifyHealth(fbs, systolic) {
  if (fbs <= 100 && systolic <= 120) {
      return "General"
  } else if ((fbs > 100 && fbs <= 125) && systolic <= 139) {
      return "Risk"
  } else if ((fbs > 125 && fbs <= 154) || (systolic >= 140 && systolic <= 159)) {
      return "High Risk level 1"
  } else if ((fbs > 154 && fbs <= 182) || (systolic >= 160 && systolic <= 179)) {
      return "High Risk level 2"
  } else if (fbs > 182 || systolic >= 180) {
      return "High Risk level 3"
  } else {
      return "Not found"
  }
}


classifyHealth(183,180); 

module.exports = classifyHealth;