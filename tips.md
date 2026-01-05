# 24-Hour Hackathon Guide (Complete, End-to-End)

This guide is designed for high school students participating in a 24-hour hackathon. It assumes approximately **few hours of sleep** and focuses on **execution, stability, and a strong demo**.

## Assumptions

- Total time: 24 hours
- Sleep: ~5 hours
- Goal: a working, stable demo with a clear explanation

## Hour 0-1: Kickoff and Momentum

### 1. Choose a Project Code Name (5 minutes)

Pick a **neutral code name** that does not define the final solution.

Example:
- Project code name: `indigo`
- Front-end: `indigo.web`
- Back-end: `indigo.backend`

This avoids blocking progress while ideas are still forming.

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

Early commits reduce risk and build confidence.

### 4. Set Up the Back-End Skeleton (Python)

Create a folder named `indigo.backend`. 
**Open the project in Visual Studio Code:**

Manually open VS Code and select File > Open Folder, then choose the `indigo.backend` folder.

Add:

- `main.py`
- `requirements.txt`
- `.gitignore`

 `requirements.txt` should contain the following content if building API that connects to LLM:

```
fastapi
uvicorn
groq
python-dotenv
```
`.gitignore` file should contain the following content
```
.env
.Python
build\
lib\
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

### 5. Time-Boxed Brainstorm (Maximum 60 minutes)

Answer only:

- Who is the user?
- What problem do they have?
- What is the one thing the app does?

Avoid feature lists and extended discussions.

### 6. Pick One Core Object and Data Model (30 minutes)

Choose a single object that represents the entire app.

Example: Event Model

```
Event
- id
- title
- dateTime
- location
- description
```

This model becomes the foundation for:

- UI design
- API design
- Demo flow

Optional fields are added only if time allows.

### 7. Lock the MVP Scope (15 minutes)

Agree as a team: "If this works, we can demo."

Anything beyond this is optional.

## Hour 3-8: Build the MVP (Parallel Work)

### Front-End Tasks

- Create core components such as list and detail views
- Use mock data initially
- Build UI strictly based on the data model

### Back-End Tasks

- Implement core API endpoints
- Return JSON matching the data model
- Test endpoints independently

### Goal by Hour 8

- Front-end and back-end communicate
- One complete end-to-end flow works

## Hour 8-13: Sleep and Light Review

### Sleep (Approximately 5 hours)

Sleep is required to maintain focus and reduce errors.

### Light Review (15 to 30 minutes)

- Restart the application
- Note bugs and issues
- Do not perform major refactors

## Hour 13-17: Integration and Stability

### 8. Fix Stability Issues First

- API errors
- Data mismatches
- Broken UI flows

### 9. Improve Usability Carefully

- Clear labels
- Consistent layout
- Basic loading states

### Goal by Hour 17

- Application is stable
- Demo flow is predictable

## Hour 17-20: Differentiation and Polish

### 10. Add One Bonus Feature

Choose only one:

- Filtering or search
- Smart defaults
- Simple rule-based logic or AI usage

Avoid adding multiple features.

### Visual Polish

- Consistent colors
- Readable typography
- Clear buttons and actions

## Hour 20-22: Presentation Preparation

### 11. Create 3 to 4 Slides

Recommended structure:

- Problem
- Solution
- Architecture (front-end and back-end)
- Demo and team

Slides should be minimal and clear.

### 12. Assign Demo Roles

- **Speaker**: explains the story
- **Driver**: controls the app during demo
- **Backup**: answers technical or architecture questions

## Hour 22-23: Demo Rehearsal

- Run the demo from start to finish
- Practice explanations
- Prepare a fallback explanation if something fails

## Hour 23-24: Final Checks

- Restart servers
- Open required browser tabs
- Confirm repositories and code are accessible

## Troubleshooting Guide

### Front-End Debugging

**Using Console Logging**

Add `console.log()` statements to track variable values and execution flow:

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

**Viewing Console Output**

1. Open browser Developer Tools (F12 or right-click > Inspect)
2. Navigate to the Console tab
3. Run your application and observe the output

**Common Issues**

- **CORS errors**: Ensure your back-end allows requests from your front-end origin
- **Undefined variables**: Check console logs to see where data becomes undefined
- **API connection**: Verify the API URL is correct and the server is running

### Back-End Debugging (Python)

**Using Print Statements**

Add `print()` statements to track execution and data:

```python
@app.route('/api/events')
def get_events():
    print('Fetching events...')
    events = fetch_from_database()
    print(f'Found {len(events)} events')
    return jsonify(events)
```

**Viewing Output**

The print statements will appear in the terminal where you started your Python server.

**Using Python Debugger**

For more complex issues, use the built-in debugger:

```python
import pdb

@app.route('/api/events')
def get_events():
    pdb.set_trace()  # Execution will pause here
    events = fetch_from_database()
    return jsonify(events)
```

**Common Issues**

- **Port already in use**: Kill the existing process or use a different port
- **Module not found**: Check if all dependencies in `requirements.txt` are installed
- **JSON serialization errors**: Ensure all data types can be converted to JSON

### Testing API Endpoints

Use these tools to test your back-end independently:

- **Postman**: GUI tool for testing API requests
- **curl**: Command-line tool for testing endpoints

```bash
curl http://localhost:8000/api/events
```

## Final Principles

- A working demo is more important than extra features
- Stability is more valuable than complexity
- One well-executed idea beats many unfinished ideas
- Sleep improves decision-making and demo quality

## Final Reminder

Judges care most about clarity, execution, and teamwork, not perfection.
