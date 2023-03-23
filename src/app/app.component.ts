import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import * as config from "./../config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES.filter((course: Course) => course !== undefined);
  course = null;

  onCourseSelected(course: Course) {
    console.log("App Component - click event bubbled...", course);
  }

  constructor() {
    if (config.variables.JsonOutputFeature) {
      const startDate = new Date(2000, 0, 1);

      const title = this.courses[0].description;

      const price = 9.99;

      const rate = 0.54;

      const course = this.courses[0];
    } else {
      const course = null;
    }
  }
}
