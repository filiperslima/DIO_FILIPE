import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.services";
import { Course } from "./courses";

@Component({
    templateUrl: './info-component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course!: Course;
    
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+ this.activatedRoute.snapshot.paramMap.get('id'));

    }

}