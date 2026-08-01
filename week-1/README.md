# Week 1 — Prompt Engineering Types

**Task:** Test the same question using 3 different prompt engineering techniques (Zero-shot, Few-shot, Chain-of-Thought) across 2 models, and compare the results.

**Models used:** Qwen3-235B-A22B-2507 vs Qwen3.7-Max (via Qwen Studio)

**Question used for all tests:**
> A train travels 60 km in 45 minutes. At the same speed, how long will it take to travel 180 km? Give your answer in hours and minutes.

---

## 1. Zero-shot Prompting

**Prompt:**
```
A train travels 60 km in 45 minutes. At the same speed, how long will it take to travel 180 km? Give your answer in hours and minutes.
```

### Model: Qwen3-235B-A22B-2507
**Response:**

To determine how long it will take the train to travel 180 km at the same speed, we begin by analyzing the given information:

- The train travels **60 km in 45 minutes**.

**Step 1: Determine the Speed**

We can express the speed of the train as:

$$\text{Speed} = \frac{\text{Distance}}{\text{Time}} = \frac{60\text{~km}}{45\text{~min}}$$

Simplify this fraction:

$$\frac{60}{45} = \frac{4}{3}\text{~km/min}$$

So, the train's speed is $\frac{4}{3}$ **km per minute**.

**Step 2: Calculate Time for 180 km**

Now, use the formula:

$$\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{180}{\frac{4}{3}} = 180 \times \frac{3}{4} = \frac{540}{4} = 135\text{~minutes}$$

**Step 3: Convert Minutes to Hours and Minutes**

Since 60 minutes = 1 hour:

$$135 \div 60 = 2\text{~hours~with~a~remainder~of~}15\text{~minutes}$$

Thus, **135 minutes = 2 hours and 15 minutes**.

**Final Answer**

$$\boxed{2\text{~hours~and~}15\text{~minutes}}$$

### Model: Qwen3.7-Max
**Response:**

**To find the time it takes to travel 180 km, we can set up a proportion or calculate the train's speed.**

**Method 1: Using Proportions**

1. **Notice that the new distance (180 km) is exactly 3 times the original distance (60 km): 180 km ÷ 60 km = 3**

2. **Since the speed is constant, the time taken will also be 3 times longer: 45 minutes × 3 = 135 minutes**

**Method 2: Calculating Speed**

1. **First, find the speed of the train: Speed = Distance ÷ Time Speed = 60 km ÷ 45 minutes = 1.333... km/minute (or 60 km in 3/4 of an hour = 80 km/h)**

2. **Next, calculate the time for 180 km: Time = Distance ÷ Speed Time = 180 km ÷ 80 km/h = 2.25 hours**

**Converting to Hours and Minutes: Now, convert 135 minutes (or 2.25 hours) into hours and minutes:**

- **There are 60 minutes in an hour.**

- **135 minutes ÷ 60 = 2 hours with a remainder of 15 minutes. *(Similarly, 0.25 of an hour is 15 minutes).***

**Answer: It will take 2 hours and 15 minutes to travel 180 km.**

---

## 2. Few-shot Prompting

**Prompt:**
```
Q: A car travels 100 km in 2 hours. At the same speed, how long will it take to travel 250 km? Give your answer in hours and minutes.
Ans: Speed = Distance/Time = 100 km / 2 h = 50 km/h. Time for 250 km = Distance/Speed = 250/50 = 5 hours = 5 hours 0 minutes.

Q: A cyclist covers 30 km in 90 minutes (1.5 hours). At the same speed, how long will it take to cover 50 km? Give your answer in hours and minutes.
Ans: Speed = Distance/Time = 30 km / 1.5 h = 20 km/h. Time for 50 km = Distance/Speed = 50/20 = 2.5 hours = 2 hours 30 minutes.

Q: A train travels 60 km in 45 minutes. At the same speed, how long will it take to travel 180 km? Give your answer in hours and minutes.
Ans:
```

### Model: Qwen3-235B-A22B-2507
**Response:**

Ans: Speed = Distance/Time = 60 km / 45 minutes. First, convert 45 minutes to hours: 45/60 = 0.75 hours. Speed = 60 km / 0.75 h = 80 km/h. Time for 180 km = Distance/Speed = 180/80 = 2.25 hours. 2.25 hours = 2 hours + 0.25 hours = 2 hours + (0.25 × 60) minutes = 2 hours 15 minutes.

Alternatively: Since 180 km is 3 times 60 km, the time will be 3 times 45 minutes = 135 minutes = 2 hours 15 minutes.

### Model: Qwen3.7-Max
**Response:**

Speed = Distance/Time = 60 km / 0.75 h = 80 km/h. Time for 180 km = Distance/Speed = 180/80 = 2.25 hours = 2 hours 15 minutes.

---

## 3. Chain-of-Thought (CoT) Prompting

**Prompt:**
```
A train travels 60 km in 45 minutes. At the same speed, how long will it take to travel 180 km? Give your answer in hours and minutes.

Think step by step: first find the speed using the given distance and time, then use that speed to calculate the time for the new distance. Show each step clearly before giving the final answer.
```

### Model: Qwen3-235B-A22B-2507
**Response:**

To determine how long it will take the train to travel **180 km** at the same speed, we proceed step by step.

**Step 1: Find the Speed of the Train**

We are given:

- Distance = 60 km

- Time = 45 minutes

Since speed is typically measured in **km/h**, we first convert the time from minutes to hours:

$$\text{Time~in~hours} = \frac{45}{60} = 0.75\text{~hours}$$

Now calculate the speed using the formula:

$$\text{Speed} = \frac{\text{Distance}}{\text{Time}} = \frac{60}{0.75} = 80\text{~km/h}$$

✅ **Speed = 80 km/h**

**Step 2: Calculate Time to Travel 180 km**

We now use the same speed to find the time required for a distance of 180 km.

$$\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{180}{80} = 2.25\text{~hours}$$

Convert the decimal part (0.25 hours) into minutes:

$$0.25 \times 60 = 15\text{~minutes}$$

So, **2.25 hours = 2 hours and 15 minutes**

**Alternative Verification**

Another way to verify is to observe that **180 km is three times 60 km**, so the time should also be **three times 45 minutes**:

$$3 \times 45 = 135\text{~minutes}$$

Convert 135 minutes to hours and minutes:

$$135 \div 60 = 2\text{~hours~with~a~remainder~of~}15\text{~minutes}$$

✅ **135 minutes = 2 hours and 15 minutes**

**✅ Final Answer**

$$\boxed{2\text{~hours~and~}15\text{~minutes}}$$

### Model: Qwen3.7-Max
**Response:**

**Step 1: Find the speed of the train**

First, let's convert the time from minutes to hours: 45 minutes = 45 ÷ 60 = **0.75 hours**

Now, calculate the speed: Speed = Distance ÷ Time Speed = 60 km ÷ 0.75 hours = **80 km/h**

**Step 2: Calculate the time for 180 km**

Using the speed we found, calculate the new time: Time = Distance ÷ Speed Time = 180 km ÷ 80 km/h = **2.25 hours**

**Step 3: Convert to hours and minutes**

2.25 hours = 2 hours + 0.25 hours 0.25 hours × 60 minutes = 15 minutes

**Final Answer:** It will take **2 hours and 15 minutes** to travel 180 km.

---

## Observations

- **Correctness:** All 6 responses (2 models × 3 prompt types) arrived at the correct final answer — **2 hours 15 minutes**. The question was straightforward enough that both models solved it regardless of prompting style.
- **Zero-shot:** Produced the most detailed, sometimes multi-method explanations without being asked — thorough, but longer than necessary.
- **Few-shot:** Produced the most concise, consistently formatted answers, closely matching the style of the given examples. Best choice when output format consistency matters.
- **Chain-of-Thought:** Produced clearly labeled, structured step-by-step reasoning, with both models adding self-verification steps. Most useful when the *reasoning process* itself needs to be visible and verifiable, not just the final answer.

**Conclusion:** Prompt engineering didn't change *correctness* here, but it clearly controlled *output structure, length, and reasoning visibility* — few-shot for consistency, CoT for transparent reasoning, zero-shot for open-ended explanation.
