import { Component, OnInit, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  @Input()
  cardIndex: number;
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  onCourseViewed() {
    console.log("Button Clicked");
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    if (this.course.category === "BEGINNER") return ["beginner"];
  }

  cardStyles() {
    return {
      "text-decoration": "underline",
    };
  }
}
