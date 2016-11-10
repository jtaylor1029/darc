---
layout: post
tag: news
pin-menu: true
pin-card: "card-1"
title:  "Competition"
thumb: "/assets/posts/2016-11-10-competition-2/diagram-featured.png"
author: "Xander"
date:   2016-11-10 16:45:20 -0400
---

#### Welcome to DARC!
This document outlines the second competiton's rules and scoring. 

## Updates
For the second competition, a 30-second autonomous period is added and the driver control period remains unchanged.

## Diagram
![Diagram][diagram]

## Rules and Scoring

### Autonomous

| Task                   | Score       |
|------------------------|-------------|
| Block in White Zone    | 15          |
| Touching Wall          | 15          |

### Driver Control

| Task                   | Score       |
|------------------------|-------------|
| Block in Safe Zone     | 1 per block |
| Block in Center Zone   | 3 per block |
| Block in Team's Bucket | 5 per block |
| Flag in Team's pipe    | 20          |
  
* 30 seconds autonomous round, 2 minute main round 
* Points are tallied at the end of each round
* At the beginning of the game, each robot starts touching the wall on the side of their team’s pipe but outside of their safezone.
* Each team has a white zone
  - 15 points if a robot, during their autonomous round,
    - is partially in their zone at any point, and
    - in any way moves at least one block into the zone
  - 15 extra points if a robot is touching the wall at the end of the autonomous round
    - Points are only awarded if a robot successfully moves a block into the zone
  - Cannot cross the middle line at any point during the round
    - Minor penalty
* Each team has a safe zone
  - A robot cannot enter or clear out blocks in an opposing team’s safe zone
    - Minor penalty
  - 1 point per block in safe zone
* Each team has a center zone
  - An robot may enter and can clear out blocks from an opposing team’s center zone
  - 3 points per block in center zone
* Each team has a colored bucket in a corner
  - A robot cannot remove a block from an opposing team’s bucket
    - Minor penalty
  - 5 points per block in their team’s bucket
* Each team starts with a flag anywhere on their robot
  - Each team has a pipe where they can insert the flag
  - Once the flag has been inserted into the pipe the team:
    - Cannot score any blocks into any of their own zones
    - Cannot de-score any blocks in the opposing center zone
    - Cannot enter the opposing center zone
      - You can still defend your team’s center zone or attempt to prevent the other team from scoring
    - Any of these are a minor penalty
  - No descoring the opposing flag
    - Minor penalty
  - 20 points for inserting the flag

## Penalties
* Minor penalty
  - 5 points for opposing team on first penalty
  - 10 points for opposing team on each repeated penalty
* If a penalty directly causes points to be de-scored (i.e. blocks to be removed from a zone or the flag to be removed), the points are restored as though they are not de-scored.
  - E.g. knocking a block out of the opposing safe zone allows the opposing team to keep the points
  - E.g. knocking the opposing flag out allows the opposing team to keep the points of the flag, but the opposing team still cannot score any blocks into any of their own zones or put in the flag again
* If a penalty directly causes points to be scored, the team is given additional negative penalty points in addition to the regular penalty
  - E.g. scoring a block after the team has placed the flag causes the score to not count  (in addition to the penalty), while removing the same block later causes the team to still lose points equal to the block value


[diagram]: {{ site.baseurl }}/assets/posts/2016-11-10-competition-2/diagram.png
