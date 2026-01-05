# 24-Hour Hackathon Guide (Complete, End-to-End)

This guide is designed for high school students participating in a 24-hour hackathon. It assumes approximately **few hours of sleep** and focuses on **execution, stability, and a strong demo**.

## Assumptions

- Total time: 24 hours
- Sleep: ~5 hours
- Goal: a working, stable demo with a clear explanation

## Hour 0-1: Kickoff and Momentum

### 1. Choose a Project Name (5 minutes)

Pick a simple name for your project. Don't spend too much time on this! You can always change it later.

Example:
- Project name: `indigo`
- Front-end (website): `indigo.web`
- Back-end (server): `indigo.backend`

Why do this? Because you can start building even if you're still deciding on your final app idea.

### 2. Set Up the Front-End (Angular)

Create the Angular project:

```bash
ng new indigo-web
cd indigo-web
ng add @angular/material
```


**Open the project in Visual Studio Code:**


 manually open VS Code and select File > Open Folder, then choose the `indigo-web` folder.

### 3. Create GitHub Repository for Front-End

**Step 1: Commit your code locally**

You can commit using the VS Code interface or the terminal.

**Option A: Using VS Code Interface**

1. Click on the **Source Control icon** (branch icon) in the left navigation bar
2. You should see all your files listed as changes
3. Type a commit message like "Initial Angular setup" in the message box
4. Click the checkmark button to commit

**Option B: Using Terminal**

Open a terminal in VS Code (Terminal > New Terminal) and run:

```bash
git add .
git commit -m "Initial Angular setup"
```

**Step 2: Create GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner and select "New repository"
3. Name it `indigo.web` (use the same name as your project)
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

**Step 3: Connect and Push to GitHub**

After creating the repository, GitHub will show you instructions. Look for the section that says:

```
...or push an existing repository from the command line
```

You will see commands like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.web.git
git branch -M main
git push -u origin main
```

**Copy these commands one by one** and paste them into your VS Code terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.web.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Why do this early?** If something goes wrong later, you have a backup. Plus it feels good to have your first commit done!

### 4. Set Up the Back-End Skeleton (Python)

Create a folder named `indigo.backend`. 
**Open the project in Visual Studio Code:**

Manually open VS Code and select File > Open Folder, then choose the `indigo.backend` folder.

Add:

- `main.py`
- `requirements.txt`
- `.gitignore`

`requirements.txt` lists all the Python packages your project needs. If you're building a backend that uses AI, add:

```
fastapi
uvicorn
groq
python-dotenv
```

`.gitignore` tells Git which files NOT to save to GitHub (like secret keys). Add:

```
.env
.Python
build/
lib/
```




### Initialize Git Repository and Push to GitHub

**Step 1: Initialize Git in your project**

Open a terminal in VS Code (Terminal > New Terminal) and run:

```bash
git init
git add .
git commit -m "Initial backend setup"
```

**Option: Using VS Code Interface**

Alternatively, you can:
1. Click on the **Source Control icon** (branch icon) in the left navigation bar
2. Click "Initialize Repository"
3. You should see all your files listed as changes
4. Type a commit message like "Initial backend setup" in the message box
5. Click the checkmark button to commit

**Step 2: Create GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner and select "New repository"
3. Name it `indigo.backend` (use the same name as your project)
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

**Step 3: Connect and Push to GitHub**

After creating the repository, GitHub will show you instructions. Look for the section that says:

```
...or push an existing repository from the command line
```

You will see commands like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.backend.git
git branch -M main
git push -u origin main
```

**Copy these commands one by one** and paste them into your VS Code terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.backend.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Hour 1-3: Focused Brainstorm and Scope Lock

### 5. Brainstorm Your Idea (Maximum 60 minutes)

Set a timer and answer these three simple questions:

- Who will use your app? (Example: students, teachers, gamers)
- What problem are they facing? (Example: can't find study groups easily)
- What is the ONE thing your app does to help? (Example: shows available study groups)

Keep it simple! Avoid making long lists of features or spending too much time talking. Pick one idea and move forward.

### 6. Define What Your App Shows (30 minutes)

Think about the main "thing" your app will display. This is called a data model, but think of it as defining what information you need to show.

**Example:** Let's say you're building an app that shows a list of events. You need to decide: what information does each event have?

```
Event (this is your main object)
- id (a unique number for each event)
- title (the name of the event)
- dateTime (when it happens)
- location (where it happens)
- description (what it's about)
```

This becomes the blueprint for everything:

- **What your screens show**: Your app will display these fields (title, location, etc.)
- **What your backend sends**: The Python code will send this exact information
- **What you demo**: You'll show how users can see and interact with this information

**Keep it simple!** Only add extra fields if you have extra time later.

### 7. Decide What "Done" Looks Like (15 minutes)

MVP stands for "Minimum Viable Product" but think of it as: **What's the simplest version that actually works?**

As a team, agree on this sentence: "If this works, we can show it to the judges."

**Example:** "If a user can see a list of events and click to see details, we can demo."

Everything else (fancy buttons, extra features, cool animations) is optional. Focus on making ONE thing work really well.

## Hour 3-8: Build Your App (Team Split Up)

During these hours, your team should split up and work on different parts at the same time.

### Front-End Team (The Website Part)

- Create the main screens (example: a list of events, a details page)
- Start with fake data (just make up some events to display while the backend isn't ready)
- Make sure what you show matches your data model from step 6

### Back-End Team (The Server Part)

- Create the endpoints (these are like URLs that send data)
- Send back the data in the format that matches your data model
- Test them by yourself first (before connecting to the website)

### Goal by Hour 8

- The website and server are talking to each other
- You can click through one complete action (example: see the list, click an event, see the details)

## Hour 8-13: Sleep and Quick Check

### Sleep (Approximately 4.5 hours)

Yes, really! Sleep helps you think clearly and make fewer mistakes. A tired brain makes more bugs.

### Quick Check (30 minutes)

When you wake up:
- Turn everything off and start it again (restart your servers)
- Write down what's broken or weird
- Don't try to rewrite big chunks of code right now

## Hour 13-17: Fix Bugs and Make It Smooth

### 8. Fix What's Broken First

Focus on making things work, not adding new stuff:
- Server errors (when the website can't talk to the backend)
- Data problems (information showing up wrong or missing)
- Broken clicks (buttons that don't work)

### 9. Make It Easy to Use

Small improvements that make a big difference:
- Clear labels (instead of "Submit", say "Add Event")
- Everything looks organized (not messy)
- Show "Loading..." when data is coming from the server

### Goal by Hour 17

- Your app doesn't crash
- You can walk through your demo without surprises

## Hour 17-20: Make It Stand Out

### 10. Add ONE Cool Extra Thing

Pick just one thing that makes your app special. Don't try to add everything!

Ideas:
- Search or filter (example: search events by location)
- Smart suggestions (example: show events happening today first)
- Use AI for something simple (example: summarize event descriptions)

### Make It Look Good

Small visual touches:
- Use the same colors throughout
- Make text easy to read (not too small, not weird fonts)
- Buttons should look like buttons

## Hour 20-22: Get Ready to Present

### 11. Create 3 to 4 Slides

Keep your slides super simple. Here's what to include:

- **Problem**: What problem does your app solve? (1 sentence)
- **Solution**: What does your app do? (1 sentence)
- **How it works**: Show a simple diagram (boxes for website, server, maybe AI)
- **Demo and team**: List your team members and say you'll show a live demo

Don't fill slides with tons of text. Keep it simple so judges focus on your demo!

### 12. Decide Who Does What in the Demo

- **Speaker**: Tells the story and explains what the app does
- **Driver**: Actually clicks through the app on screen
- **Backup**: Answers questions if judges ask about technical stuff

## Hour 22-23: Practice Your Demo

- Run through your demo completely, just like you'll do for judges
- Practice what you'll say at each step
- Have a backup plan: "If the server crashes, here's what we would show..."

## Hour 23-24: Final Checks Before Demo

- Restart both your website and server (turn them off and on)
- Open all the browser tabs you'll need
- Make sure you can access your GitHub repositories (judges might want to see your code)

## Troubleshooting Guide

### Front-End Debugging (Website Part)

**How to See What's Happening**

Add `console.log()` to print out information and see what's going on in your code:

```typescript
export class MyComponent {
  loadData() {
    console.log('Starting to load data...');
    this.service.getData().subscribe(data => {
      console.log('Received data:', data);
      this.items = data;
    });
  }
}
```

**Where to See the Output**

1. In your web browser, press F12 (or right-click > Inspect)
2. Click on the "Console" tab
3. Run your app and you'll see your messages appear there

**Common Problems**

- **CORS errors**: This means your backend needs to allow your website to connect to it. Look for "CORS" or "Access-Control" errors.
- **Undefined is not an object**: Something you're trying to use doesn't exist yet. Check your console.log messages to see where it goes wrong.
- **Can't connect to backend**: Make sure your backend server is actually running, and check that the URL is correct (usually http://localhost:8000)

### Back-End Debugging (Python Server Part)

**How to See What's Happening**

Add `print()` statements to see what your code is doing:

```python
@app.route('/api/events')
def get_events():
    print('Fetching events...')
    events = fetch_from_database()
    print(f'Found {len(events)} events')
    return jsonify(events)
```

**Where to See the Output**

Look at the terminal window where you started your Python server. Your print messages will show up there.

**Common Problems**

- **Port already in use**: This means something is already running on that port. Close the old server or change the port number.
- **Module not found**: You forgot to install something. Run `pip install -r requirements.txt` in your terminal.
- **Can't convert to JSON**: Your data has something that can't be sent (like a datetime). Convert it to a string first.

### Testing Your Backend Without the Website

You can test if your backend is working before connecting it to your website:

- **Postman**: A free app that lets you test your backend by clicking buttons (easier for beginners)
- **curl**: A command you type in the terminal to test your backend

Example curl command (type this in your terminal):

```bash
curl http://localhost:8000/api/events
```

This will show you what data your backend is sending. If you see your data, it's working!

## Final Principles

- A working demo is more important than extra features
- Stability is more valuable than complexity
- One well-executed idea beats many unfinished ideas
- Sleep improves decision-making and demo quality

## Final Reminder

Judges care most about clarity, execution, and teamwork, not perfection.
