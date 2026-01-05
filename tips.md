# 24-Hour Hackathon Guide

This guide helps high school students build a working demo in 24 hours with a few hours of sleep.


## Hour 0-1: Kickoff and Setup

### 1. Choose a  name for the Project  (5 minutes)

Pick a simple code name. Example: `indigo`, `indigo.web`, `indigo.backend`

### 2. Set Up Front-End (Angular)

```bash
ng new indigo-web
cd indigo-web
ng add @angular/material
```

Open in VS Code: File > Open Folder > choose `indigo-web`

### 3. Push Front-End to GitHub

**Commit locally (choose one method):**

VS Code: Click Source Control icon > type message "Initial Angular setup" > click checkmark

OR Terminal:
```bash
git add .
git commit -m "Initial Angular setup"
```

**Create GitHub repo:**
1. Go to GitHub > New repository > name it `indigo.web`
2. Do NOT initialize with README
3. Copy the commands GitHub shows under "push an existing repository"
4. Paste in VS Code terminal (replace YOUR-USERNAME):

```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.web.git
git branch -M main
git push -u origin main
```

### 4. Set Up Back-End (Python)

Create folder `indigo.backend` and open in VS Code.

Create these files:

**`requirements.txt`** (if using AI):
```
fastapi
uvicorn
groq
python-dotenv
```

**`.gitignore`**:
```
.env
.Python
build/
lib/
```

**`main.py`** (empty for now)

**Push to GitHub:**
VS Code: Click Source Control icon > type message "Initial Angular setup" > click checkmark
OR Terminal:
```bash
git init
git add .
git commit -m "Initial backend setup"
```

Create GitHub repo named `indigo.backend`, then:
```bash
git remote add origin https://github.com/YOUR-USERNAME/indigo.backend.git
git branch -M main
git push -u origin main
```

**IMPORTANT: Commit and Publish Regularly!**

In VS Code: After committing, click "Sync Changes" or "Publish Branch" button
In Terminal: Run `git push` after each commit

If 2 students are working on the same project, first student will create the repo and publish the change, the second student will clone the repo using command such as

``` git clone https://github.com/student-name/indigo-backend.git
```

Do this every hour or after completing a feature. If your laptop crashes, you'll have a backup!

## Hour 1-3: Brainstorm and Plan

### 5. Brainstorm (Maximum 60 minutes)

Answer these three questions:
- Who will use your app?
- What problem do they have?
- What is the ONE thing your app does?

### 6. Wireframe Your App (30 minutes)

**Use paper and pencil to sketch:**
- Top nav bar (logo, menu items, team link)
- List view (cards showing your items)
- Detail page (when you click a card)
- Any other pages you need

Keep it simple! Just boxes and labels.

### 7. Define Your Data Model (30 minutes)

Example: If building an events app, define the event object as JSON:

```json
{
  "id": 1,
  "title": "Hackathon Workshop",
  "dateTime": "2024-01-15T10:00:00",
  "location": "Room 205",
  "description": "Learn to build apps fast"
}
```

This is your blueprint. Your screens will show this data, your backend will send this data.

### 8. Lock Your MVP (15 minutes)

As a team, finish this sentence: "If this works, we can demo."

Example: "If users can see a list of events and click to see details, we can demo."

Everything else is optional.

## Hour 3-8: Build MVP

Team splits up to work in parallel.

**Front-End:**
- Create list and detail screens
- Use fake data initially
- Match your data model

**Back-End:**
- Create endpoints that return JSON
- Match your data model
- Test independently

**⚠️ WARNING:** If 2+ people work on the same part (both on front-end or both on back-end), work on DIFFERENT pages or features! This prevents merge conflicts. Example: Person A builds list page, Person B builds detail page.

**Goal by Hour 8:** Website and server communicate. One complete flow works.

**Remember:** Commit and push your code every hour! In VS Code, commit then click "Sync Changes" to publish.

## Hour 8-13: Sleep and Quick Check

**Sleep:** 4.5 hours (yes, really!)

**Quick Check (30 min):**
- Restart servers
- Note what's broken
- Don't rewrite code yet

## Hour 13-17: Fix and Stabilize

### Fix What's Broken
- Server errors
- Data mismatches
- Broken buttons/links

### Improve Usability
- Clear labels
- Organized layout
- Loading states

**Goal:** App is stable. Demo flow is predictable.

**Remember:** Commit and push your fixes to GitHub!

## Hour 17-20: Polish

### Add ONE Feature

Pick one:
- Search/filter
- Smart sorting
- Simple AI feature

### Visual Polish
- Consistent colors
- Readable text
- Clear buttons

## Hour 20-22: Prepare Presentation

### Create 3-4 Slides

- **Problem** (1 sentence)
- **Solution** (1 sentence)
- **How it works** (simple diagram)
- **Team & Demo** (names + "we'll show a live demo")

### Assign Roles
- **Speaker**: Explains the story
- **Driver**: Controls the app
- **Backup**: Answers technical questions

## Hour 22-23: Practice Demo

- Run through demo start to finish
- Practice explanations
- Prepare backup plan if something fails

## Hour 23-24: Final Checks

- Restart servers
- Open browser tabs
- Confirm GitHub access

## Troubleshooting

### Front-End Debugging

Add `console.log()` to see what's happening:

```typescript
loadData() {
  console.log('Starting to load data...');
  this.service.getData().subscribe(data => {
    console.log('Received data:', data);
  });
}
```

View output: Press F12 > Console tab

**Common issues:**
- **CORS errors**: Backend needs to allow your website to connect
- **Undefined errors**: Check console.log to find where data goes missing
- **Can't connect**: Verify backend is running on correct URL (usually http://localhost:8000)

### Back-End Debugging

Add `print()` statements:

```python
@app.route('/api/events')
def get_events():
    print('Fetching events...')
    events = fetch_from_database()
    print(f'Found {len(events)} events')
    return jsonify(events)
```

View output in the terminal where you started Python server.

**Common issues:**
- **Port in use**: Close old server or use different port
- **Module not found**: Run `pip install -r requirements.txt`
- **JSON errors**: Convert datetime objects to strings first

### Test Backend Independently

Use Postman (GUI) or curl (terminal):

```bash
curl http://localhost:8000/api/events
```

## Final Principles

- Working demo > extra features
- Stability > complexity
- One well-executed idea > many unfinished ideas
- Sleep improves demo quality
- **Commit AND push regularly** - don't lose your work!

## Final Reminder

Judges care most about clarity, execution, and teamwork, not perfection.


# Group Exercise
You have decided to use the codename: lodestar
## Tara:
- create angular project called lodestar.web
- add angular material
- commit to your local git repository
- create a repository in github
- set the origin and publish to github
## Grace:
 - Create a folder called lodestar.backend
 - open in vscode
 - add requirements.txt, .env file,.gitignore file and main.py
 - initialize git repository
 - create repository in github
 - set the origin and publish to github
 - add rebecca and tara as contributors to git repo
## Rebecca:
 - clone the git repository created by Grace from github
 - run pip3 install -r requirements.txt
 - update main.py by adding a print statement
 - commit and publish the changes
 - check the github repo of grace and your changes should be there
