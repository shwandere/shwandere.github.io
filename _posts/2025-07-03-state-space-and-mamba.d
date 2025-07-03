---
layout: post
title: "State Space and Mamba"
date: 2025-07-03
tags: [research, state space, mamba]
--- 

The video explained how state space = RNNs + CNNs 
https://www.youtube.com/watch?v=g1AqUhP00Do

It explained with respect to LLMs and how state space makes them faster. 

So what it explained : 

It took the example of car repair and related it to RNN equations. and converted all RNNs equations in terms of input and output variables. And all the equations can be expressed as convolutions of state space matrices with inputs. 
![[Screenshot from 2025-07-01 14-31-50.png]]
![[Screenshot from 2025-07-01 14-29-40.png]]
![[Screenshot from 2025-07-01 14-31-05.png]]
![[Screenshot from 2025-07-01 14-31-45.png]]
![[Screenshot from 2025-07-01 14-31-50 1.png]]
![[Screenshot from 2025-07-01 14-31-56.png]]
![[Screenshot from 2025-07-01 14-32-02.png]]

Those convolutions are what making SSMs faster than RNNs. 
## What is mamba : 
https://arxiv.org/abs/2312.00752
Mambas are selective SSMs. 
"Selective SSMs introduce attention-like behavior by dynamically selecting or modulating token updates based on the input. While traditional SSMs use static parameters (A, B, C), selective SSMs make these updates input-dependent. This allows them to prioritize certain tokens over others, similar to attention, and enables effective learning through backpropagation."

## What is Backpropagation Doing in Selective SSMs?

Backpropagation doesn’t directly “update the tokens.”  
It **updates the model parameters** — including:

- **Gating parameters**
    
- **SSM parameters** (A, B, C in a learnable form)
    
- **Layer norms, linear layers**, etc.


The **tokens get modulated** (e.g., gated or filtered) as part of the forward pass — the **learned parameters** decide _how_ they’re modulated.

    
Here is the structure of the Mamba : 


[

![](https://substackcdn.com/image/fetch/$s_!fR9z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc94d349d-8620-45a9-8095-7c27de8b7865_1660x1356.png)



](https://substackcdn.com/image/fetch/$s_!fR9z!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc94d349d-8620-45a9-8095-7c27de8b7865_1660x1356.png)

What is the difference between the Mamba and SSMs : 

Mamba, like Flash Attention, attempts to limit the number of times we need to go from DRAM to SRAM and vice versa. It does so through _kernel fusion_ which allows the model to prevent writing intermediate results and continuously performing computations until it is done.

[

![](https://substackcdn.com/image/fetch/$s_!CeHw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc46b75de-9896-4be1-baac-29c07c68dfd4_1920x448.gif)



](https://substackcdn.com/image/fetch/$s_!CeHw!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc46b75de-9896-4be1-baac-29c07c68dfd4_1920x448.gif)

Transformer vs SSMs :
how much efficiency related to time, memory and GPU computational cost can we expect with state space. Since the SSMs dont have to save big attention matrics therefore they are linear in memory. And in terms of speed they are linear therefore good for long length sequences. And as described earlier above about Mamba, they improved the performance specially for vision problems. 

![[Screenshot from 2025-07-01 14-37-24.png]]

![[Screenshot from 2025-07-01 14-37-38.png]]

