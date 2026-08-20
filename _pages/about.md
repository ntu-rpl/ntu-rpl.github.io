---
layout: about
title: Home
logo: ntu-logo.png
permalink: /
subtitle: CSIE5117 • Fall 2026 • National Taiwan University

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   more_info: >
#     <p>555 your office number</p>
#     <p>123 your address street</p>
#     <p>Your City, State 12345</p>

social: false # includes social icons at the bottom of the page
---

Building a robot to function in the real-world remains challenging, which requires (1) perception, that recognizes the hidden states of the embodied scene, (2) decision making, that generates optimal plans to achieve tasks, and (3) action, that controls robot’s machinery to navigate in/interact with the environment. With decades of efforts, scientists have introduced numerous techniques that enable robots working in a controlled and known environment (e.g. industrial robots). However, these techniques fail in non-controlled and non-structured environments, such as streets/kitchens/homes/offices that are noisy, complex and constantly changing. Moreover, these techniques are incapable of building robots that continually learn new tasks, adapt effectively to new environments, and achieve each user’s individual need.

This course provides a technical overview of decision making and action control in robotics with an emphasis on the development of generalist robots. The course covers: (1) fundamental robot kinematics that discusses geometric relationships between the robot’s body and the end effector, (2) classical control and planning, that provides a theoretical basis, and (3) state-of-the-art robot learning that facilitate adaptive and continual learning of robot tasks.

Starting from 2026, we introduce hands-on contents into the course: in addition to implementing algorithms in simulation, students will build a real inverted pendulum from scratch. In each of the two/three assignments, students will implement control programs or train robot policies, testing them on the pendulum robot. We will provide 3D-printed robot bodies, and required electronic components & motors. Students have to assemble the robot themselves.

Note: The perceptual components of robot systems will be discussed in the course of Embodied Vision (CSIE5421). 

---

### Course Goals

The goal of this class are three-fold, guiding you through “what are the essential components for controlling the robot’s motion”, "how to build a simple robot from scratch", and “when/how these components are used in a real robot” in robotic research. We aim to cover as many components as possible, just to give you a broad look at the field. Going through each component thoroughly is not our goal. Students put effort into understanding these material after class. Help from AI is highly encouraged.

Upon completion of the course students should know:

1. The fundamental theorem of robot kinematics.
2. The classical planning-and-control pipeline in robotics.
3. Why learning is important in robotics, and what are the open research questions in robot learning.
4. What’re under the hood of robot systems.
5. How to build a simple robot from scratch.

Upon completion of the course students should be able to:

1. Set up a simulator to kick-start your robotic research.
2. Implement control programs as robot policies.
3. Train robot policies with imitation learning.
4. Train robot policies with reinforcement learning.
5. Automate a real robot with any robot policies 

### Prerequisite Knowledge

Students should have a solid understanding of the following areas:

1. Machine learning: stochastic gradient descent, loss function, optimization, neural network.
2. Linear algebra: matrices, vectors, norms, scalar/vector products, orthogonality, singular value decomposition etc.
3. Probability: expectation, independence, Baye’s Theorem etc.
4. Computer vision: convolutional neural networks, transformer models, 3D vision geometry.
5. Linux system: setting up the required environment, being familiar with bash scripts.
6. Python programming: creating python projects, importing required packages, visualizing your results.
7. Pytorch programming: creating NNs, setting up training & evaluation pipeline. 

### Prerequisite Hardware

Grading in this course heavily depends on the final project. You should prepare for your own Linux machine with GPUs for the final project. Otherwise, you can try cloud platforms for the access of GPUs.

### Other Information

- Lectures: Monday 13:20 AM - 16:20 PM
- Lecture Location: CSIE Building Room 104
- Discussion: Discord
- HW submission: Github classroom
