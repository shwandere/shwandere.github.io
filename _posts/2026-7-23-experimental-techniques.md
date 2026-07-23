In research one thing that is most important and can help analysing your idea or refining it is experiments. Initially what I thought that implmentation of your idea and reproducing the paper and ablation studies are the only activities in the name of experiments. Experiments can help you analyse understanding the bigger picture better. 
In deep learning, as the problem gets complex, its implementation and exeprimenting with it becomes harder. So while reproducing a paper I found a few useful points for experiments : 

1) **When a complex system fails, don't treat it as one problem. Decompose it into smaller, testable hypotheses.  
2) **freeze everything except one  
3) **Instead of proving the idea, focus on how to prove if my idea is wrong. (If your idea survives attempts to break it,it's becoming stronger)  
4) **stress testing : thats where the ideas are built on the usage of your idea in the bigger picture  
    What happens if
       - videos are short?videos are long?  
		- only rare classes?   
		- noisy features?  
		- different seeds?   
6) **Think about how you think system should work and compare how it behaved (like via training curve)  
7) **error taxonomy like where model fails. Like :  
		- Localization errors  
		- Classification errors   
		- Duplicate predictions  
		- Background confusion  
		- Short actions  
		- Long actions  
8) **First principle thinking : how one module is solving a problem, what other ways can be to solve a problem. 

<hr style="border: none; border-top: 1px solid #ccc;">

**For system thinking figure out what are the different systems you are dealing with : 
- either by identifying different classes  
			- Is it the backbone?  
			- Is it the preprocessing?  
			- Is it NMS?  
			- Is it feature extraction?  
- getting losses

<hr style="border: none; border-top: 1px solid #ccc;">

The last thing important in PhD is to decide the next step. Once you reproduce the paper and it is working fine and you are starting with building new framework, there you need to know a few techniques to move ahead, to design experiments to prove or disprove the idea you are focusing on. And besides if you dont know the next step, you need to do a literature review...not to find a solution or technique for your problem, but to find out what most of techniques are trying to focus on. For example contrastive learning, its good if you know the engineer part of like how it is performed : bringing the pairs closer on one who share one trait and far apart if not. But more important is that contrastive learning is focused on the correspondance between audio and visual embeddings. Now you can ask what are the other ways to do that and you can be innovative in your technique.
