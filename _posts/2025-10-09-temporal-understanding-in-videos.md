---
layout: post
title: "Temporal understanding in videos"
date: 2025-10-09
tags: [videos, temporal aspect]
--- 

First of all LSTM,RNN and GRU are used for the temporal modelling of the videos. ie to understand the relation between the frames in time. 

Various attempts has been done to understand how the action sequence is understood in time. But the context of time changes in the presence of the multiple modalities. 

There comes different papers that I feel are important to consider. One is what makes a video a video. In the paper they took the help of generation to understand how the frame selection and frame sequence effects the next action predicted. 

Another paper that I found interesting is causality matters in which it is stated that temporal reasoning can be better understood with causal attention between inter visual token embeddings. They asked the question if positional encoding is key to temporal understanding?and with experiments stated that the impact of PEs for temporal understanding is restricted to the first layer of the model, as later layers exhibit minimal sensitivity to their presence or absence.  

So first question arises why is it important to understand the temporal modelling. One common application can action recognition. Where the sequence of actions is important to understand complete action. And second question is how the temporal aspect of the videos can be better understood. 

One small question that I worked on how the temporal modelling can be done in case of audio and visual modalities. So the problem where chatgpt helped is adding temporal penalty to the process ie only the audio and videos nearby can only be considered. Most of the problems that are related to temporal understanding are either related to even localization or detection.
