import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES.filter((course: Course) => course !== undefined);

  startDate = new Date(2000, 0, 1);

  title = this.courses[0].description;

  price = 9.99;

  rate = 0.54;

  course = this.courses[0];

  onCourseSelected(course: Course) {
    console.log("App Component - click event bubbled...", course);
  }
}
