# Participant Tracker UI System

A professional, balanced design system built with clean typography, sage green accents, and technical polish. Easy to implement in any web project.

## Quick Start

### 1. Copy the CSS
Copy `styles.css` to your project's root or `assets/css/` folder.

### 2. Link in HTML
```html
<link rel="stylesheet" href="styles.css">
```

## Color Palette

```
Primary Green:    #81B29A
Accent Teal:      #5DBEA3
Danger Red:       #E07A5F
Safe Cyan:        #A8DADC
Light Background: #F8F9FA
White Card:       #FFFFFF
Text Primary:     #293241
Text Secondary:   #6C757D
```

## Component Usage

### Buttons
```html
<!-- Primary Action -->
<button class="btn btn-primary">+ Add Item</button>
<button class="btn btn-success">Save</button>
<button class="btn btn-info">View Reports</button>

<!-- Secondary Action -->
<button class="btn btn-secondary">Cancel</button>
```

### Tables
```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe<div class="micro-data">ID_00001</div></td>
      <td><span class="badge bg-success">Active</span></td>
      <td><a href="#">View</a></td>
    </tr>
  </tbody>
</table>
```

### Status Badges
```html
<!-- Success -->
<span class="badge bg-success">Active</span>
<span class="badge bg-primary">On Track</span>

<!-- Danger -->
<span class="badge bg-danger">At Risk</span>
```

### Cards & Sections
```html
<div class="profile-section">
  <h4>Basic Information</h4>
  <p>
    <strong>Name:</strong>
    John Doe
  </p>
  <p>
    <strong>Status:</strong>
    Active
  </p>
</div>
```

### List Groups
```html
<div class="list-group">
  <div class="list-group-item">
    <strong>Total Items:</strong>
    <span>42</span>
  </div>
  <div class="list-group-item">
    <strong>Completed:</strong>
    <span>28</span>
  </div>
</div>
```

### Forms
```html
<div class="mb-3">
  <label>Full Name</label>
  <input type="text" class="form-control" placeholder="Enter name">
</div>

<div class="mb-3">
  <label>Status</label>
  <select class="form-select">
    <option>Select status</option>
    <option>Active</option>
    <option>Inactive</option>
  </select>
</div>

<div class="mb-3">
  <label>Notes</label>
  <textarea class="form-control" rows="4"></textarea>
</div>
```

### Dashboard Header
```html
<div class="dashboard-header">
  <h2>Dashboard Title</h2>
  <div class="button-group">
    <button class="btn btn-success">+ Add</button>
    <button class="btn btn-info">Reports</button>
  </div>
</div>
```

## HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Project - Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
  <!-- Navigation if needed -->
</header>

<main class="container">
  <div class="dashboard-header">
    <h2>Your Page Title</h2>
    <div class="button-group">
      <button class="btn btn-success">Action 1</button>
      <button class="btn btn-info">Action 2</button>
    </div>
  </div>

  <!-- Your content here -->

</main>

<script src="your-script.js"></script>
</body>
</html>
```

## Utility Classes

- `.mt-3` - margin-top: 1.5rem
- `.ms-2` - margin-left: 0.75rem
- `.mb-4` - margin-bottom: 2rem
- `.p-4` - padding: 2rem
- `.mb-2`, `.mb-3` - bottom margins

## Font Family

Default: Inter, Roboto, system fonts
Monospace (for micro-data): Courier New, monospace

## Responsive Breakpoints

Mobile: `max-width: 768px`

The design automatically adjusts:
- Button group stacks vertically on mobile
- Table padding reduces
- Headers scale down

## Features

✓ Subtle grid overlay texture  
✓ Professional shadows and depth  
✓ Smooth hover interactions  
✓ Clean typography hierarchy  
✓ Micro-data annotations (serial numbers)  
✓ High-contrast status indicators  
✓ Mobile responsive  
✓ No external dependencies  

## Integration Steps for New Project

1. Copy `styles.css` to your new project
2. Include the link in your HTML `<head>`
3. Use the HTML structure and classes from examples above
4. Customize the color variables in `:root` if needed
5. Update your content/data within the styled components

---

**Easy to customize:** All colors are CSS variables (`:root`) - change them once to rebrand the entire system.
