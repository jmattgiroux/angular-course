import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  isOdd: boolean;

  @Input()
  isEven: boolean;

  @Output("courseSelected")
  courseEventEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked...");
    this.courseEventEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      const classes = ["beginner"];
      const meh = classes;
      return meh;
    }
  }
}
