---
layout: post
tag: news
pin-menu: true
pin-card: "card-1"
title:  "February Competition"
thumb: "/assets/posts/2017-01-17-competition-3/diagram-featured.png"
author: "Serena"
date:   2017-01-17 16:45:20 -0500
---

#### Welcome to DARC!
This document outlines the third competiton's rules and scoring. 

## Updates
For the third competition, we're introducing a brand new format - SumoBots! Please read the rules carefully - robots who violate any part of the rules may be disqualified. Judges have final discretion over the interpretation of the DARC rules.


## Introduction

Be prepared to battle! The basic idea of this round of competition is that there is a clearly marked ring of tape inside the field, forming the center zone. In a 1 vs 1 round, a robot scores points by pushing the opposing robot out of the center zone, and remaining closer to the center of the ring by the end of the competition. This competition is divided into an autonomous section, where robots try to score points independent of human control, and a driver-controlled section, where robots may be controlled via remote controllers. Robots are expected to be reasonably sturdy, as to not break in the middle of the competition, but various strategies can be employed for the robot. Is it swift and lightweight, to out-maneuver the other robot? Does is it heavy and bulky, to prevent being pushed away? Please compete in the spirit of the competition; remember that this competition is friendly, so we will not allow robots to have parts that purposely damage other robots or the playing field. Have fun creating your robot, and good luck!

## Diagram
![Diagram][diagram]

## Rules and Scoring

### Autonomous

| Task                           | Score       |
|--------------------------------|-------------|
| Detect center zone border      | 15          |
| Follow center zone border      | 15          |
| Stop robot on designated point | 20          |

### Driver Control

| Task                               | Score                          |
|------------------------------------|--------------------------------|
| Opposing team robot declared "out" | 15                             |
| End-game position                  | 48 - distance from center (in) |
  
## Specifications

* 30 seconds autonomous round, 2 minute main round with a 30-second end game
* Points are tallied at the end of each round
* The entire competition is played in an enclosed 12 ft x 12 ft playing field
  - The center zone is defined by a circle with radius 48 in
    - The border will be taped in white
    - Two stopping points (one per team) are taped with black tape on the center zone border
  - Each team has a reset zone
    - A robot is placed in the reset zone:
        - At the beginning of the driver-controlled period
        - After a reset is declared
  - Each team has an autonomous starting zone
    - A robot is placed in the starting zone at the beginning of the autonomous period
  - The exact center of the field will be taped in white for reference
  - The precise location of the zones are shown in the diagram


* During the autonomous period:
  - At the beginning of each round
    - The robot is placed in a location as determined by the judges
    - The location may vary from round to round, so robots should be ready to adapt to its starting location 
    - Teams may decide which way the robot should be facing
  - A robot must complete a phase to be awarded points for the following phases
  - Phase 1: Detect center zone border
    - 15 points if robots successfully complete detect the white-colored line indicating the center zone using a photo sensor or any equivalent, pre-approved sensor
  - Phase 2: Follow center zone border
    - 15 points if robots successfully follow the white colored line that indicates the center zone, in the direction towards the stopping point, using a photo sensor or any equivalent, pre-approved sensor; this must continue until at least the robot reaches or passes the stopping point
    - Judges have final say on whether a robot is sufficiently following the line
  - Phase 3: Stop robot at designated point
    - 20 points if robots successfully stop on a designated point using a photo sensor or any equivalent, pre-approved sensor 
    - A robot is not allowed to cross to the other team’s side during the autonomous period, or disrupt the other team’s robot’s autonomous
    - If a robot is found attempting this part of the autonomous without utilizing one of these sensors, the robot cannot receive the points for this phase
      - Judges may request to view the hardware or the code for the robot

* During the driver-controlled period:
  - At the beginning of each round, or whenever a reset is declared:
    - The robot must be placed in the reset zone
    - The robot may not leave the reset zone unless the round begins or when signalled by the judges
  - During the non endgame time period, a robot is declared out if:
    - Any part of the robot is touching the ground of the field outside of the center zone, or
    - Appears to be touching the ground of the field outside of the center zone
    - Note that touching the tape that forms the center zone is not outside of the center zone (this aspect is subject to change)
  - 20 points to a team if:
    - The opposing team’s robot is declared out
    - Both teams’ robot are declared out but the opposing team’s robot is out distinctly first
      - Judges have final say on whether the difference is sufficient to award points
  - If either robot is declared out:
    - Judges will indicate robots declared out and any points awarded
    - A reset is declared
      - The game timer becomes paused
      - Robots return to the reset zone
    - The game resumes when signalled by the judges

* During the endgame:
  - Robots compete to finish close to the center of the field
  - No outs are declared and no resets occur
  - When the round ends:
    - 48 points; 1 point subtracted for each inch away from the center of the field
      - The closest point on the robot is used for this measurement
      - Robots will not lose points by being too far away
      - Judges have final say on the precise measured value


## Modified Ranking Rules

(Adapted from FTC Game Manual - Part 1)

At the conclusion of each Match, Qualifying Points (QP) and Ranking Points (RP) are awarded:  

* Teams receive Qualifying Points based on the following:
  - Winning Teams of a Qualifying Match each receive two (2) Qualifying Points.
  - Losing Teams of a Qualifying Match receive zero (0) Qualifying Points.
  - If a Qualifying Match ends in a tie, all four Teams receive one (1) Qualifying Points.
  - If a Team is disqualified, they receive zero (0) Qualifying Points.
* Ranking Points (RP) are awarded based on the following:
  - The number of Ranking Points assigned for each Match is that of the losing Alliance’s score. Both Alliances receive the pre-penalized score of the losing Alliance as their Ranking Points.
  - In the Event of a tie, both Alliances receive the same number of Ranking Points, equal to the lowest pre-penalized score. If a Team is disqualified, they receive zero (0) Ranking Points.
  - If both Teams on an Alliance are disqualified, the Teams on the winning Alliance are awarded their own score as their RP for that Match.

At the conclusion of all Qualification Matches, the Teams are ranked from first through last on the basis of their total Qualifying Points (QPs). If multiple Teams have the same QP total, these Teams are ranked on the basis of their total Ranking Points (RPs).


## Modified Robot Rules

(Adapted from FTC Game Manual - Part 1)

* Be safe!
* Robot restrictions:
  - Fit inside an 18 in x 18 in x 18 in box (FTC robot size) at the start of each round
  - Maximum mass: 25 pounds (value subject to change)
* The following are absolutely prohibited:
  - Modified motors
  - Electronic/network/static interference
  - Robot grounded to the field
* If you’re ever unsure, ask a judge for clarification
* Follow the Modified FTC robot rules specified below

#### General Guidelines

When considering your robot design and your game strategy, ask yourself the following questions. If the answer to any of these questions is yes, the design component is probably not allowed:

* Could it damage or disable another Robot?
  - Exceptions to this rule are potentially damaging/disabling features that are explicitly specified in the rules. See below for more info.
* Could it damage the Playing Field?
* Could it injure a participant or Volunteer?
* Is there already a rule that prohibits this?
* If everybody did this, would the game play be impossible?

#### Illegal Parts

The following types of mechanisms and components are not allowed:
 
* Those that could potentially damage Playing Field components 
* Those that could potentially damage other competing Robots.
* Those that contain hazardous materials such as mercury switches, lead, or lead containing compounds, or lithium polymer batteries. Those that pose an unnecessary risk of entanglement. 
* Those that contain sharp edges or corners.
* Those that contain animal-based materials (due to health and safety concerns). 
* Those that contain liquid or gel materials.
* Those that contain materials that would cause a delay of game if released (e.g. ball bearings, coffee beans, etc.).
* Those that are designed to electrically ground the Robot frame to the Playing Field. 
* Pneumatics

#### Exceptions to the “damaging or disabling robot” rule

Because this competition is intentionally designed for there to be physical contact between robots, there needs to be a line between what constitutes as within the rules, and what does not. Judges make the final decision in deciding whether a robot or a part of a robot is permitted to compete in the competition. If you have any questions, make sure to contact the judges of the competition beforehand.

A robot should be able to withstand:
* The force of another robot driving into it, in the form of pushing or accidental collision
* Being flipped
* Being grabbed or held by another robot

If a robot does not withstand the above conditions to a reasonable degree, the robot’s team is responsible for the robot’s issues.

[diagram]: {{ site.baseurl }}/assets/posts/2017-01-17-competition-3/diagram.png
