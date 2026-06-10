<span style="background-color: yellow;">so till now I have two techniques used for research : mathematical validation of a solution and creating a toy problem. What are the other techniques?</span> :


- pattern recognition 
- problem solving  
- toy problem 
- mathematical proof of solution validation 
- ablation studies 
- failure cases 
- thought experiments : what if book 
- cross-subject theory experimentation like game theory to multimodality

<hr style="border: none; border-top: 1px solid #ccc;">

<span style="background-color: yellow;">is there any video or blog or linkedin post available?</span> :


Yes. If your goal is to learn **how researchers construct evidence and validate ideas**, there are some excellent resources. I'll group them by what you're trying to learn.

## 1. How researchers think about evidence and experiments

### Richard Hamming — "You and Your Research"

This is probably the single best talk for understanding how great researchers think.

[You and Your Research (Bell Labs transcript)](https://www.cs.virginia.edu/~robins/YouAndYourResearch.html?utm_source=chatgpt.com)

Don't read it as productivity advice. Read it as:

> How do researchers decide what is worth investigating?

---

### Michael Nielsen

His essays are excellent for understanding scientific thinking.

[Michael Nielsen Essays](https://michaelnielsen.org/blog/?utm_source=chatgpt.com)

Particularly useful because he often discusses:

- experiments
    
- theory
    
- research intuition
    
- scientific discovery
    

---

## 2. Toy problems and mechanistic understanding

### [Anthropic: Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/index.html?utm_source=chatgpt.com)

This is one of the clearest examples of:

```text
Big Question
↓
Tiny Toy Problem
↓
Mechanistic Understanding
```

While it is about neural network interpretability, the methodology applies to any research area.

---

## 3. How to design experiments

### Andrej Karpathy

His talks are filled with practical experimental thinking.

[Andrej Karpathy YouTube Channel](https://www.youtube.com/@AndrejKarpathy?utm_source=chatgpt.com)

Pay attention to:

- how hypotheses are formed
    
- why ablations matter
    
- how experiments answer questions
    

---

### Yann LeCun interviews

LeCun frequently discusses:

```text
Hypothesis
↓
Experiment
↓
Revision
```

rather than simply building models.

[Yann LeCun Official Site](https://yann.lecun.com/?utm_source=chatgpt.com)

---

## 4. Research methodology for ML

### [The Gradient](https://thegradient.pub/?utm_source=chatgpt.com)

One of the best blogs for understanding:

- why papers are convincing
    
- how to evaluate claims
    
- experimental design
    
- benchmarking
    

Search there for:

- ablations
    
- evaluation
    
- benchmarking
    
- causal reasoning
    

---

## 5. The framework you're actually looking for

From our conversations, I think you're gradually discovering that researchers use several different "evidence generators":

```text
Mathematical proof
Toy problem
Ablation
Benchmark
Intervention
Visualization
Failure analysis
Representation analysis
```

A useful exercise when reading any paper is:

### Research Evidence Audit

Write:

```text
What claim is being made?

How is the claim supported?

□ Theory
□ Toy Problem
□ Benchmark
□ Ablation
□ Visualization
□ Failure Cases
□ Intervention
□ Representation Analysis
```

After doing this for 20–30 papers, you'll start seeing recurring patterns.

---

For someone with your interests (representation learning, audio-visual learning, temporal modeling, action localization), I would start with:

1. [Richard Hamming's "You and Your Research"](https://www.cs.virginia.edu/~robins/YouAndYourResearch.html?utm_source=chatgpt.com)
    
2. [Anthropic's Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/index.html?utm_source=chatgpt.com)
    
3. [The Gradient](https://thegradient.pub/?utm_source=chatgpt.com)
    

Together they cover:

- how to choose questions,
    
- how to isolate mechanisms,
    
- and how to build evidence for claims.

<hr style="border: none; border-top: 1px solid #ccc;">

<span style="background-color: yellow;">any books?</span> :

Yes. But based on what you've been asking lately, I would **not** recommend books on productivity or "how to do research" first.

You're trying to understand:

- How researchers discover problems
    
- How they build evidence
    
- How they trust ideas enough to test them
    
- How they move from intuition → hypothesis → experiment
    

For that, I'd recommend these books.

---

## 1. The Art of Doing Science and Engineering

If I could recommend only one book to a new researcher, it would be this.

Hamming discusses:

- How great scientists think
    
- How to identify important problems
    
- Why some people produce more research than others
    
- How to cultivate insight
    

What you'll like:

He focuses on **problem selection and scientific thinking**, not productivity hacks.

---

## 2. The Craft of Research

This book teaches:

```text
Claim
↓
Evidence
↓
Argument
```

which is essentially what a research paper is.

Useful because you're beginning to think about:

> How do researchers convince others?

This book directly addresses that.

---

## 3. How to Solve It

One of the most influential books on problem solving ever written.

Pólya's framework:

```text
Understand the problem
↓
Devise a plan
↓
Carry out the plan
↓
Look back
```

appears everywhere in science.

This is especially relevant because you're trying to become more problem-oriented.

---

## 4. The Structure of Scientific Revolutions

This is not a practical research book.

It's about:

> How scientific ideas evolve.

You'll learn:

- paradigms
    
- anomalies
    
- scientific revolutions
    

Many research ideas come from understanding where current paradigms fail.

---

## 5. Thinking, Fast and Slow

Since you've asked about:

- self-doubt
    
- intuition
    
- System 1 vs System 2
    

this book will help you understand:

- cognitive biases
    
- decision making
    
- uncertainty
    

However, don't read it as a research methodology book.

Read it as:

> How my mind works while doing research.

---

## 6. The Beginning of Infinity

This is my wildcard recommendation for you.

The central idea is:

> Progress comes from creating better explanations.

Not:

```text
more data
```

Not:

```text
more confidence
```

But:

```text
better explanations
```

This is surprisingly close to how good researchers think.

---

# For your current stage

Given everything we've discussed over the last year, I'd read them in this order:

### First

The Art of Doing Science and Engineering

because you're struggling with:

- problem selection
    
- confidence
    
- research direction
    

---

### Second

How to Solve It

because you're trying to build a framework for approaching research problems.

---

### Third

The Craft of Research

because you're beginning to analyze papers in terms of evidence and argument.

---

### Fourth

The Beginning of Infinity

because it helps develop the mindset:

> My job is not to find certainty.
> 
> My job is to create and test explanations.

And honestly, that mindset would directly address many of the questions you've been asking recently about self-doubt, adaptability, and committing to research directions despite uncertainty.
