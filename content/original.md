# AI Use Case Evaluation Guide for School Administrators

## Purpose of This Guide

This guide helps you evaluate whether AI-powered tools would create value for Imagine School. It's a framework for discovery, not a prescription. The goal is to understand:
- Which use cases would save meaningful time
- Where data quality is sufficient (or can be improved incrementally)
- What makes sense to implement first
- How to think about costs, security, and sustainability

Think of this as exploring what's possible, then deciding together what's worth doing.

## Understanding How AI Works with Your School's Data

### What Should AI Handle vs. What Needs Human Judgment?

**Some topics should always route to staff, even when AI is technically capable.**

Your school has identified that academic performance, finances, and behavioral issues should be handled by specific employees. This is the right approach—not because AI can't discuss these topics, but because:
- These conversations often need nuance and relationship context
- Parents may need to ask follow-up questions or discuss solutions
- Staff need to maintain their connection to families on sensitive matters
- The human relationship is part of the value, not just the information

**How this works in practice:**

Parent asks: "Is Sam doing better in Science yet?"

AI response: "I can see that Sam has had three Science assessments this term. For a detailed discussion about Sam's progress and any support he might need, Ms. Rodriguez (Science teacher) is the best person to speak with. Would you like me to help you schedule a time to talk with her?"

The AI recognized this is academic performance (route to teacher) rather than schedule information (can answer directly).

**The key:** During setup, we would work together to define which question types go where. The AI can then become an intelligent routing system for sensitive topics, while handling straightforward information requests directly.

### The Security Question: Who Sees What?

When parents ask "What activities can Sam join this term?" the AI needs to know:
- Which Sam (there might be 10 students named Sam)
- Whether the person asking is Sam's parent
- Sam's grade level and current schedule
- Available activities for Sam's age group
- Only Sam's data—not other students' information

**The critical insight:** The AI chatbot itself cannot make these decisions. 

Think of it like this: You wouldn't hand a substitute teacher your entire student database and say "only share information with the right parents." Instead, you'd give them specific files for specific students they're authorized to see.

AI works the same way. **Before** the conversation even starts, the system would:
1. Verify who is asking (parent, teacher, admin)
2. Determine what they're allowed to see
3. Pull **only** that information for the AI to work with

The AI never has access to the full database. It only sees what we've decided this specific person should see.

### The Data Pipeline: Connecting the Dots

Look at this parent question: "Sofia had an upset stomach. What was on the menu today?"

To answer this, the AI needs:
- Today's cafeteria menu (static, updated weekly)
- The current date and day of the week (dynamic)
- Knowledge of which meal service Sofia's grade receives (personalized)

A human administrator would:
1. Check today's date
2. Open the weekly menu document
3. Find today's lunch
4. Remember (or check) which lunch period Sofia's class has
5. Combine all this into an answer

**This takes 2-3 minutes for a human. The AI answers in 3 seconds.**

But here's what makes this possible: Someone must set up **how** the AI gets this information. This happens once, during implementation. After that, every similar question is effortless.

#### Thoughtful Implementation: Building with Intent

**Important principle:** AI implementation isn't about throwing documents at a system and hoping it figures things out.

Effective AI requires understanding exactly what you want it to do:
- Which specific questions should it answer?
- What information does each answer require?
- What should it do when it encounters edge cases?
- How should it handle ambiguous questions?

**Example of thoughtful setup:**

Bad approach: Upload all school documents and tell the AI "answer parent questions."

Good approach:
1. Identify specific question types: "What's on the menu today?" "When does the bus arrive?" "What's due this week?"
2. For each question type, define: What data sources? What's the expected answer format? What if the data is missing?
3. Create test cases: "If a parent asks about the menu on a weekend, what should the AI say?" "If the bus GPS is offline, how should it respond?"
4. Build guardrails: "Never share grade information." "Always route financial questions to the office." "If asking about medication, refer to the nurse."
5. Test thoroughly before launch with real scenarios

This discovery process helps ensure the AI does what you actually need, not just what's technically possible.

Think of it like training a new staff member - you wouldn't just hand them all the school's files and say "figure it out." You'd explain your processes, show examples, and check their understanding before they start working independently.

### Facts vs. Assessments: What AI Should Actually Say

**Concern:** "We don't want AI making assessments like 'Yes, Matt will catch the bus' because if it's wrong, who's responsible?"

**The solution:** AI should state facts and historical patterns, not make promises.

#### The Wrong Approach:
Parent: "Matt just left home. Will he catch the bus?"
AI: "Yes, Matt will catch the bus if he hurries."

This is an assessment. It's making a prediction as if it's certain.

#### The Right Approach:
Parent: "Matt just left home. Will he catch the bus?"

AI: "Here's the current situation:
- The bus's last stop was Maple Street, 3 minutes ago
- Typically, it takes 8 minutes to get from Maple Street to Matt's stop (Oak Avenue)
- The official timetable shows arrival at 7:37am
- Based on current progress, the bus is running 2 minutes early today
- Historical data shows the bus arrives at Oak Avenue between 7:33-7:39am on 90% of school days

Matt's stop is scheduled in about 5 minutes."

**Everything here is factual:**
- Current bus location (fact)
- Typical timing (historical data)
- Official schedule (fact)
- Today's actual timing (fact)
- Historical variation (statistical fact)

The parent can make their own decision about whether to rush Matt or drive him.

#### Why This Approach Is Actually Better Than Human Answers

When a parent calls the office asking this question, a staff member typically says:
- "Let me check... the bus should be there around 7:37"
- Or: "I don't know exactly where it is right now"
- Or: "It usually gets there around 7:35-7:40"

**What they can't do (but AI can):**
- Cross-reference real-time GPS location with historical timing data
- Calculate that on rainy days (like today), Route 2 averages 4 minutes slower
- Notice that this particular driver tends to run 3 minutes faster than the previous driver
- Remember that construction on Elm Street has been adding 2 minutes for the past week

The AI isn't making a judgment—it's synthesizing data humans don't have time to analyze. The answer is more accurate precisely because it's based on more complete information.

#### Applying This Principle Broadly

**Academic questions:**
- Wrong: "Sam is doing great in Science now!"
- Right: "Sam's Science grades this term: Quiz 1: 78%, Quiz 2: 85%, Lab Report: 92%. For context on Sam's overall progress, Ms. Rodriguez would be the best person to discuss this with."

**Behavioral questions:**
- Wrong: "Julie's behavior has improved significantly."
- Right: "I can see Julie's attendance records and teacher notes, but discussions about behavior are handled by Mr. Chen, the Year 6 coordinator. Would you like me to help arrange a conversation with him?"

**Medical questions:**
- Wrong: "Sofia should be fine to eat the cafeteria lunch."
- Right: "Today's menu includes chicken pasta, green beans, and fruit. The ingredient list shows it contains dairy and gluten. For specific dietary advice related to Sofia's upset stomach, please consult your pediatrician or speak with Nurse Williams."

**The pattern:** AI provides complete, factual information. Humans provide interpretation, advice, and relationship-based communication.

#### Adding Appropriate Disclaimers

For predictions based on historical patterns, a simple disclaimer makes the limitations clear:

"*This timing is based on historical patterns and current location. Traffic, weather, and other factors may cause variations.*"

This is honest and helpful. It's exactly what a thoughtful staff member would say, but backed by more data than any human could mentally process.

#### The Reliability Advantage

Here's the paradox: People worry about AI being "responsible" for wrong answers, but AI answers based on data are often more reliable than human answers based on memory and assumptions.

**Human answering the bus question:**
- Relies on memory of typical timing
- Might not know there's construction
- Doesn't have current GPS data
- Gives their best guess

**AI answering the bus question:**
- Checks actual current location
- References complete historical data
- Accounts for known variables (weather, construction)
- States confidence level based on data quality

The AI answer is more likely to be accurate. The difference is that AI makes its data sources and reasoning visible, while humans give confident-sounding answers that might be based on less information.

### Static vs. Dynamic Data: The Real Value Proposition

#### Static Data Alone = Limited Value

If the AI only knows:
- School policies (handbook)
- Building hours
- Public calendar dates

Then it's basically a searchable FAQ. Helpful, but not transformative.

#### Static + Dynamic + Personalized = High Value

When the AI can combine:
- **Static:** School policies, curriculum standards, standard schedules
- **Dynamic:** Today's menu, current bus location, this week's homework
- **Personalized:** Matt's class schedule, Julie's grade level, Sam's progress reports

Then you get questions like these answered instantly:
- "Matt has just left home. Will he catch the bus?" (needs: current time, bus location, Matt's stop, typical timing)
- "Julie left an essay at her desk. Is there anything due today?" (needs: today's date, Julie's classes, current assignments)
- "Route 2 is 30 minutes late, notify parents where the bus has not stopped yet" (needs: route data, current location, which stops are ahead, parent contact info for those stops)

### One AI, Multiple Access Points

**Important concept:** It's the same AI model serving different channels with different knowledge.

Think of it like one very knowledgeable staff member who can:
- Answer the office phone (web chat on school website)
- Respond to text messages (WhatsApp, SMS)
- Check email (automated email responses)
- Staff a front desk (in-person kiosk)

It's the same person, but depending on who's asking and where they're asking, they share different information:

**Example scenarios:**

1. **Anonymous admission chatbot on website:**
   - No login required
   - Serves: School tours, admission deadlines, tuition info, program descriptions
   - Cannot access: Student data, parent-specific information

2. **Authenticated parent portal:**
   - Login required
   - Serves: Everything admission chatbot knows PLUS personalized student data
   - Access controlled: Only sees their own children's information

3. **Staff WhatsApp number:**
   - Phone number verification
   - Serves: Everything for that staff member's role
   - Teachers see class rosters, admins see financial data, etc.

Same AI model. Different knowledge based on who's asking and where.

### The WhatsApp Game-Changer

**Here's something most schools don't know:** WhatsApp Business has a 24-hour free messaging window.

**How it works:**
1. Parent sends a message to the school's WhatsApp Business number
2. For the next 24 hours, the school can reply as many times as needed - **completely free**
3. After 24 hours of inactivity, if the school wants to initiate a new conversation, there's a small cost

**What this means in practice:**

Parent texts at 7:15 AM: "Did Matt's bus already leave?"

AI responds in 10 seconds: "Route 2's last stop was Maple Street 3 minutes ago. Based on current progress, it should arrive at Matt's stop (Oak Avenue) in about 5 minutes. The official schedule shows 7:37am, but the bus is running 2 minutes early today."

Parent texts back at 7:20 AM: "Thanks! Is there anything due today for Matt?"

AI responds: "Matt (Year 6) has Science homework due today - worksheet on photosynthesis. No other assignments due."

**All of this - free.** Because the parent initiated the conversation.

**The convenience factor:**

Compare these experiences:

**Traditional approach:**
- Parent calls school office
- Gets put on hold (office is handling 10 other calls during morning rush)
- Finally speaks to someone who has to check the bus tracking system
- Needs to transfer to check homework
- Total time: 8-12 minutes
- Parent had to stop what they were doing to make the call

**WhatsApp AI approach:**
- Parent sends message while making breakfast
- Gets answer in 10 seconds
- Sends follow-up question
- Gets answer in 10 seconds
- Total time: 30 seconds
- Parent never stopped making breakfast

**For the school:**
- No staff time consumed
- No phone lines tied up
- Parents are happier (instant, convenient)
- Office can focus on tasks that actually need human attention

### Preventing Misuse and Controlling Costs

**Common concern:** "What if parents start asking random questions? What if they use it for personal chatting? Won't the AI bills get huge?"

**The solution: Intent Detection and Routing**

Before the expensive, smart AI sees any message, a cheaper, simpler model acts as a gatekeeper:

**The routing flow:**

1. Parent message arrives
2. Cheap AI analyzes: "Is this a school-related question?"
3. Routes based on analysis:
   - **YES, legitimate school question** → Route to smart AI
   - **NO, off-topic** → Template response: "I can only help with school-related questions"
   - **SENSITIVE TOPIC (academic/behavioral)** → Template response: "Please contact Ms. Rodriguez directly"

**Real examples:**

Message: "What time does the bus arrive at Oak Avenue?"
→ Legitimate → Route to smart AI

Message: "What's the weather today?"
→ Off-topic → Template: "I can only help with school-related questions. For weather, try weather.com or your phone's weather app."

Message: "Is my son behaving better in class?"
→ Sensitive topic → Template: "For discussions about student behavior, please contact Mr. Chen, the Year 6 coordinator. Would you like me to help you schedule a time to speak with him?"

Message: "Can you help me write an email to my boss?"
→ Off-topic → Template: "I can only help with school-related questions."

**Cost breakdown:**

- Cheap gatekeeper AI: $0.0001 per message
- Smart AI (only for legitimate questions): $0.02 per message
- Template responses: Free (no AI needed)

If 100 messages come in:
- 70 are legitimate school questions → $1.40 (70 × $0.02)
- 20 are off-topic → $0.002 (20 × $0.0001, template response)
- 10 are sensitive topics requiring staff → $0.001 (10 × $0.0001, template response)
- **Total cost: ~$1.40 for 100 messages**

Without intent detection:
- 100 messages all go to smart AI → $2.00
- Plus the cost of answering irrelevant questions

**The protection is automatic.** Parents can't "accidentally" rack up costs by chatting about random topics. The system only spends money on legitimate school-related questions.

**Additional benefits:**

1. **Quality control:** Even legitimate questions get better answers because the routing system can direct specific topics to specific response strategies
2. **Staff protection:** Sensitive topics automatically route to appropriate humans, maintaining the human connection where it matters
3. **Spam prevention:** Marketing messages, scams, or spam get caught before consuming any resources
4. **Usage insights:** You can see what types of questions parents ask most, helping you improve communications

**The key insight:** The gatekeeper costs pennies. It protects against misuse, ensures appropriate routing, and only spends real money on questions that create real value.

### AI for Staff: Beyond Answering Questions

**Everything discussed so far has been about AI retrieving and presenting information.** But AI is equally powerful for generating and processing content that staff currently spend hours on.

#### Newsletter Generation

**Current process:**
- Administrator spends 2-3 hours writing monthly newsletter
- Gathers information from different teachers and departments
- Struggles with consistent tone and formatting
- Worries about forgetting important details
- Repeats similar structure every month

**With AI:**

Administrator inputs:
- "Garbi class will go to the Zoo on the 4th of May"
- "Year 8 field trip permission forms due Friday"
- "Science fair winners announced"
- Brief notes on each item

AI generates a complete newsletter by:
- Referencing past newsletters for consistent style and structure
- Using the school's typical tone and formatting
- Including standard sections (principal's message, upcoming events, reminders, celebrations)
- Suggesting relevant details based on similar past announcements

Administrator reviews, makes adjustments, sends.

**Time savings: 2-3 hours → 20 minutes**

**Quality improvement:** Consistent tone, nothing forgotten, professional formatting every time.

#### Document Template Assistance

**The frustration everyone knows:**
- Spending 45 minutes formatting a table in Word
- Columns that won't align properly
- Fighting with spacing and margins
- Copying formatting from last year's document, hoping it works

**With AI and document templates:**

Staff: "Create a field trip permission form with student name, emergency contact, medical info, and signature sections"

AI:
- Uses the school's template library
- Generates properly formatted document
- Includes all legal requirements from previous permission forms
- Applies school branding and formatting standards
- Creates fillable fields where appropriate

Staff reviews and uses.

**Or even simpler:**

Staff uploads a messy spreadsheet and says: "Format this as a nice-looking table in a Word document with our school colors"

AI handles all the formatting details.

#### Translation Accuracy and Consistency

**Common problem in bilingual schools:**
- Documents translated to Spanish (or other languages) by different people at different times
- Inconsistent terminology across documents
- Uncertainty about translation quality
- No easy way to check if Spanish version matches English version exactly

**With AI:**

1. **Translation checking:**
   - Upload English and Spanish versions of the same document
   - AI: "These documents are mostly aligned, but paragraph 3 in English discusses 'emergency procedures' while the Spanish version says 'safety protocols'. The English version has a bullet point about 'early dismissal' that's missing in Spanish."

2. **Consistent translation:**
   - AI learns your school's preferred terminology
   - "Homeroom" always translates to your preferred Spanish term
   - "Field trip" consistently uses the same translation across all documents
   - Maintains formal/informal tone appropriate to context

3. **Quick translation with review:**
   - Staff: "Translate this announcement to Spanish"
   - AI provides translation using school's standard terminology
   - Staff or bilingual parent reviews (much faster than translating from scratch)

#### Finding Conflicts and Overlaps in Documents

**Ever had this happen?**
- Handbook says one policy, website says something slightly different
- Two different documents give different dates for the same event
- Updated one policy document but forgot to update related documents

**With AI:**

Upload multiple documents and ask:
- "Do the student handbook and parent handbook have any conflicting information about absence policies?"
- "Check if the lunch schedule on the website matches the schedule in the August newsletter"
- "Review these three policy documents and flag any contradictions"

AI responds:
- "The student handbook (page 12) states that late pick-up fees begin after 15 minutes, but the parent handbook (page 8) states 20 minutes."
- "The website shows library hours until 4pm on Thursdays, but the October newsletter states library closes at 3:30pm on Thursdays."

This would take a human hours of careful reading and cross-referencing. AI does it in minutes.

#### Generating Content from Examples

**Use case: Announcements about upcoming events**

Instead of writing from scratch each time:

Staff provides:
- Brief details about the event
- Points AI to 2-3 similar announcements from the past

AI generates:
- New announcement in the same style
- Includes all the relevant details (date, time, location, what to bring, RSVP deadline)
- Maintains consistent tone and structure
- Staff reviews and adjusts

**Use case: Progress report comments**

Some schools use AI to help teachers with the writing burden:

Teacher provides:
- Student performance data (scores, participation, behavior notes)
- Areas of strength and areas for improvement

AI suggests:
- Professionally worded comments
- Specific and constructive (not generic)
- Appropriate length and tone
- Teacher reviews, personalizes, approves

**Critical note:** The teacher is still writing the report - AI just helps with the time-consuming task of converting bullet points and observations into polished prose.

#### Processing and Organizing Information

**Common staff tasks that AI handles well:**

1. **Extracting data from emails:**
   - "Review the last 20 parent emails and create a list of all the field trip permission forms that haven't been returned"
   - "Find all mentions of bus schedule concerns in parent emails from the last month"

2. **Organizing meeting notes:**
   - Upload voice recording or rough notes from staff meeting
   - AI creates organized summary with action items, decisions made, and follow-up needed

3. **Creating comparison documents:**
   - "Compare this year's enrollment numbers by grade with last year's and create a summary of changes"
   - "Analyze which after-school activities had the highest enrollment over the past 3 years"

4. **Content review and editing:**
   - "Check this letter home for tone - is it too formal or too casual?"
   - "Review this policy document for clarity - flag any confusing sections"
   - "This email is too long - create a concise version with the same key points"

#### The Pattern: AI as an Administrative Assistant

Notice what all these use cases have in common:

- **Staff still makes decisions** - AI provides drafts, suggestions, and analysis
- **AI saves time on mechanical tasks** - formatting, organizing, cross-checking
- **Quality improves** - consistent tone, fewer errors, nothing forgotten
- **Staff focuses on judgment** - reviewing content, adding personal touches, making final calls

AI doesn't replace staff expertise - it eliminates the tedious parts so staff can focus on what requires human judgment and relationship-building.

#### Implementation Note

These internal staff tools often work differently than parent-facing chatbots:
- Staff might use a dedicated web interface or chat
- Access tied to staff login with appropriate permissions
- Can be integrated into existing workflow tools (email, document systems)
- Often starts with one or two high-value use cases (like newsletter generation) then expands

The same technical infrastructure that powers parent questions also powers staff productivity tools - it's just a matter of configuration and access control.

### The Decision Framework: Is This Worth Automating?

Ask yourself these questions for each use case:

#### 1. How much time does a human spend on this now?

**Low-value for AI:**
- "What are school hours?" → 10 seconds to answer
- "What's the absence policy?" → 30 seconds to answer

**High-value for AI:**
- "Which Year 8 students haven't submitted field trip forms?" → 5-10 minutes to cross-reference lists
- "Route 2 is late—who still needs to be notified?" → 10-15 minutes to match route stops with parent contacts

#### 2. How many data sources need to be combined?

**Simple (low AI value):**
- Single document lookup
- One database query

**Complex (high AI value):**
- "Is Sam doing better in Science yet?" requires:
  - Current grades
  - Past grades for comparison
  - Grading timeline (is "yet" reasonable given when the term started?)
  - Definition of "better" in your grading system

#### 3. How often is this question asked?

- **Asked daily by multiple people** → High value
- **Asked monthly by one person** → Low value

Even if a task takes 10 minutes, automating something that happens once a month saves 2 hours per year. Automating something that happens 10 times per day saves 400+ hours per year.

### The Critical Question About Data Reliability

**The AI is only as reliable as the data feeding into it.**

If a parent asks "What did my daughter miss Monday and Tuesday?" and the AI says "Math test and Science lab," but the Science teacher forgot to log the lab in the system, the AI will be wrong.

This isn't an AI problem—it's a data entry problem. You already have this problem today. But AI makes it more visible because:
- Parents expect instant, accurate answers
- Errors are immediately noticed rather than hidden in scattered communications
- Consistency across all interactions means inconsistent data stands out

**The practical approach:** You don't need to fix all data quality issues before implementing AI. You need to fix the specific data that powers the specific use cases you're implementing.

**Example progression:**

**Phase 1:** Implement bus tracking
- Need: Real-time GPS data (already exists from bus company)
- Need: Route schedules (static, update once per term)
- Need: Student home addresses (already in enrollment system)
- Data quality fix: None needed, just connect existing sources

**Phase 2:** Add cafeteria menu questions
- Need: Weekly menu (school already produces this)
- Data quality fix: Instead of posting as PDF on website, also save in a structured format AI can read
- Creative solution: Use AI to extract text from the PDF you already create—no process change needed

**Phase 3:** Add "what's due this week" questions
- Need: Assignment tracker kept up to date
- Current problem: Teachers don't consistently log in central system
- Creative solution: AI monitors teacher emails and websites where they already post homework, suggests entries for teachers to approve with one click
- Now teachers spend less time than before, data gets better

**The insight:** Sometimes implementing AI reveals smart ways to improve data collection that actually *reduce* staff workload rather than adding to it. The key is addressing one use case at a time, finding the creative solution for that specific data point, then moving to the next.

### What You Need to Know About Implementation

#### The Setup Phase (One-Time Investment)

Someone technical needs to build "data pipelines"—the automated connections that:
1. Pull information from your various systems (attendance, grades, schedules, menus, bus tracking, etc.)
2. Transform it into a format the AI can understand and search through
3. Update it on the right schedule (real-time for bus locations, daily for menus, weekly for schedules)
4. Apply security rules (this parent sees only their children's data)

**This is specialized work.** It's not "installing software"—it's connecting your specific systems in your specific way.

Think of it like plumbing: Every school has different pipes (databases), different fixtures (software systems), and different layouts (workflows). The plumber (data engineer) needs to understand your specific building.

#### The Ongoing Maintenance

Once set up, someone needs to:
- Monitor that data is flowing correctly
- Update connections when you change systems
- Adjust rules when policies change
- Review questions the AI couldn't answer to improve coverage

This is more like facility maintenance than a major project—important, but not consuming.

### Questions to Consider: When AI Might Not Be the Right Fit

**AI may not be worth pursuing if:**

1. **There's no willingness to address data issues as they arise**
   - "We know our attendance system is unreliable, but we're not going to fix it"
   - "Teachers will never update the assignment tracker consistently"
   - No one is willing to improve processes when problems surface

   → AI doesn't need perfect data to start, but it does need a commitment to fix issues when they matter. If you're unwilling to improve data quality for specific use cases that you want AI to handle, those use cases won't work.

2. **The questions are truly rare**
   - If these scenarios happen 2-3 times per month total
   - If only one person would ever use this

   → The setup cost exceeds the time saved

3. **You lack technical partnership**
   - No one available who understands your databases
   - No one with experience building data pipelines at scale
   - No capacity for ongoing monitoring and maintenance

   → You'll have a system that breaks and no one can fix

   **Note:** For this exploration, Lorenzo is available to handle all technical implementation.

### Positive Indicators: When AI Could Create Real Value

**AI is worth exploring if:**

1. **There's willingness to improve data quality one piece at a time**
   - You don't need perfect data everywhere—just for the use cases you're implementing
   - Example: If you want AI to answer "What's due this week?" but assignment tracking is inconsistent, you commit to improving *that specific data point* when you implement *that feature*
   - You can often solve data issues creatively without major infrastructure changes
   
   **Real example:** 
   - Problem: Teachers don't log homework in the central system
   - Expensive solution: Buy new assignment management software, retrain everyone
   - Creative solution: AI scrapes homework from teacher websites/emails they already send, populates a tracker automatically, flags for teacher review
   - The data gets better because you've reduced the manual work, not added to it

2. **You have recurring "data detective" work**
   - Staff spend hours cross-referencing lists
   - Same questions get asked repeatedly
   - Information exists but is hard to access quickly

3. **You're willing to start small and expand**
   - Pick 2-3 high-value use cases to prove value
   - Fix only the data needed for those cases
   - Add more use cases once the first ones work
   - Each success funds improving the next data point

   **Practical path:**
   - Month 1: Implement bus tracking questions (needs: GPS data, route info, stop schedules)
   - Month 3: Add "what's on the menu" questions (needs: weekly menu uploads)
   - Month 6: Add "what activities can my child join" (needs: activities list, grade levels, current enrollment)
   
   You fix data quality incrementally, as needed, not all at once.

4. **Technical implementation support is available**
   - Lorenzo is available to handle the technical setup (data pipelines, security, RAG)
   - Would include automated monitoring to detect issues before they impact users
   - Would include complete documentation so anyone can understand and maintain the system
   - Systems would be designed to be maintainable, not dependent on one person

### Evaluating Specific Use Cases

When you consider a use case, think about:

**Impact Score (1-5):**
- How much time would this save per instance?
- How often does this happen?
- How many people would benefit?

**Feasibility Score (1-5):**
- Is the needed data already digital and accessible?
- Is it reliably updated?
- Could we get the data sources connected?

**Priority = Impact × Feasibility**

A good discovery process might start with your highest-scoring use cases. Prove value there, then decide whether to expand.

### Technical Implementation: What Would Be Provided

Building data pipelines that feed AI systems requires specific expertise:
- Understanding how to securely connect to school databases
- Setting up data transformations for semantic search (RAG)
- Designing security rules that filter data before the AI sees it
- Creating automated updates on the right schedule (real-time, daily, weekly)
- Finding creative solutions to data quality issues without rebuilding infrastructure
- Setting up monitoring systems that catch problems automatically
- Documenting everything so the system is maintainable long-term

**For Imagine, Lorenzo is happy to handle all of this.** 

With experience building data pipelines at Google, Lorenzo would bring:
- **Security architecture** - Data filtering happens before the AI sees anything, following the principle that the AI cannot be trusted to enforce access rules
- **Creative problem-solving** - Finding ways to improve data quality that reduce staff workload rather than adding to it (like auto-scraping homework from emails teachers already send)
- **Proven patterns** - Knowing which architectures work long-term versus which create ongoing headaches
- **Incremental implementation** - Setting up one use case at a time, fixing only the data needed for that case
- **Automated monitoring** - Systems that detect when data isn't flowing correctly and alert before users notice problems
- **Comprehensive documentation** - Clear explanations of how everything works so anyone can understand, troubleshoot, and maintain the system

**Key point about sustainability:** The system would be built with documentation and automated monitoring so it's not dependent on one person. The architecture would be standard and maintainable, with:
- Monitoring alerts that explain what's wrong when something breaks
- Documentation showing how each pipeline works and how to fix common issues
- Clear handoff capability if needed in the future

**The bottom line:** The technical capability is available. The question for school administrators is whether the use cases would create enough value to make the implementation worthwhile.

---

## Summary

AI for school operations could be valuable when:
1. It connects data you already have but find time-consuming to combine
2. It answers questions you get frequently
3. You have reliable data processes (or willingness to improve them incrementally)
4. You have proper technical implementation support

It's likely not the right fit when:
1. Simple lookups are sufficient
2. Use cases are rare
3. Underlying data is unreliable with no plan to improve it
4. You lack implementation expertise

**The opportunity isn't in the AI itself—it's in finally having all your school's information connected and accessible in a way that respects privacy and security while making everyone's job easier.**

This guide is meant to help you think through whether that opportunity is worth pursuing for Imagine. The next step would be to identify 2-3 specific use cases to explore in more detail, understand what data they require, and evaluate the effort versus the benefit.