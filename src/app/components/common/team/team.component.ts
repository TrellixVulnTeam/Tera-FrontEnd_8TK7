import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Découvrez notre équipe',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    singleTeamMember = [
        {
            img: 'assets/img/user1.jpg',
            title: 'James Anderson',
            designation: 'CEO & Founder',
            social: [
                {
                    icon: 'bx bxl-facebook',
                    link: '#'
                },
                {
                    icon: 'bx bxl-twitter',
                    link: '#'
                },
                {
                    icon: 'bx bxl-linkedin',
                    link: '#'
                }
            ]
        },
        {
            img: 'assets/img/user2.jpg',
            title: 'Sarah Taylor',
            designation: 'Co-Founder',
            social: [
                {
                    icon: 'bx bxl-facebook',
                    link: '#'
                },
                {
                    icon: 'bx bxl-twitter',
                    link: '#'
                },
                {
                    icon: 'bx bxl-linkedin',
                    link: '#'
                }
            ]
        },
        {
            img: 'assets/img/user3.jpg',
            title: 'Steven Smith',
            designation: 'Web Developer',
            social: [
                {
                    icon: 'bx bxl-facebook',
                    link: '#'
                },
                {
                    icon: 'bx bxl-twitter',
                    link: '#'
                },
                {
                    icon: 'bx bxl-linkedin',
                    link: '#'
                }
            ]
        },
        {
            img: 'assets/img/user4.jpg',
            title: 'John Capabel',
            designation: 'Programer',
            social: [
                {
                    icon: 'bx bxl-facebook',
                    link: '#'
                },
                {
                    icon: 'bx bxl-twitter',
                    link: '#'
                },
                {
                    icon: 'bx bxl-linkedin',
                    link: '#'
                }
            ]
        }
    ]

}