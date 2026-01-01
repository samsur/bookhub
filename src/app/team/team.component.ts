import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface TeamMember {
  name: string;
  avatar: string;
  role: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Tara',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Grace',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Rebecca',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Full Stack Developer'
    },
    {
      name: 'Araya',
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      role: 'Backend Developer'
    }
  ];
}

