class UserManager {
  authenticateUser(username, password) {
    //some logic
  }
  updateUserProfile(userId, updatedProfile) {
    //some logic
  }
  sendNotifications(userEmail, message) {
    //some logic
  }
}

class UserAuthenticator {
  authenticateUser(username, password) {
    //some logic
  }
}

class ProfileUpdater {
  updateUserProfile(userId, updatedProfile) {
    //some logic
  }
}

class EmailNotifier {
  sendNotifications(userEmail, message) {
    //some logic
  }
}

import logMessage from "./00-logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max calories exceeded");
    }
  }
}

// Calorie tracker does not violate single responsibility

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
