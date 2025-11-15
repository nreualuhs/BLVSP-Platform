# Understanding This Application So Far

*link to Figma: https://www.figma.com/design/6Sc3vnsJMs1a1FQKiiNjpz/BLVSPs-Wireframe?node-id=996259-239&p=f&t=nBW1olC7xQv2MAnn-0* 

**⚠️ I was learning along the way of developing this platform. I tried my best to keep it logical and organized, but I apologize if it isn't!**

**⚠️ Also, make sure to work ONLY in the _BLVSP-app_ folder. There's another one called _react-app_ which is old and not up to date. Shouldn't affect anything at all, just don't go into it. Please...**

### **Run the platform with** ```npm run dev``` **and stop it with CTRL+C.**

# Current High-level Structure Of The Platform
```bash
├── BLVSP-app
│   ├── node_modules
│   ├── public
│   │   ├── 123.txt
│   │   ├── 456.txt
│   │   ├── 789.txt
│   ├── src
│   │   ├── assets
│   │   ├── components 
│   │   ├── lib
│   │   ├── pages
│   │   ├── App.tsx
└── └── ├── main.tsx
```
> These are the main areas you'll be working in. Try not to change the CSS files if you can, unless you need to make a global change. Otherwise, try to keep styling in the HTML files (this is how tailwind css stlyes things). 

## What is being used
- [Shadcn](https://ui.shadcn.com/) components (specifically [datatable](https://ui.shadcn.com/docs/components/data-table) and [navbar](https://ui.shadcn.com/docs/components/navigation-menu))
- React (obviously)
- Typescript (works basically like a combo of JS and HTML, there are tutorials in case you're confused)
- [Tailwind css](https://nerdcave.com/tailwind-cheat-sheet)
- Vite

## What still needs to be developed!
- Tag based organization system. Check with Yoonha and Andre for specifics on what tags should be used and how this will function.
- [Email form](https://youtu.be/OFBVmAVqr5I?si=q_uK-kdNNeP-UrnI) that users can fill out and recommend products. This will send an automatic email to an address specifically for this platform and will allow us to update the table manually.
- Whatever else the team decides! We may be looking into styling it a bit more, etc. Feel free to message me if you wanna have dev talk! :)

## What each file is for

**public** : This folder contains txt files that are supposed to be the item descriptions. The files are labeled with a special, unique ID number (I’m just using 123, 456, 789 in this case since we are still developing) that corresponds with their representative item. 

When the user clicks on the name of the item in the database, they are redirected to see more information about that respective item. The program will redirect to the *ToolDetailPage.tsx* and do the actions mentioned above. You’ll notice that the URL changes accordingly too. 

> ⚠️ Current issues with this:
It doesn’t allow us to manipulate the text. For example, I can’t make a link a hyperlink. An HTML file will be better, but I haven’t been able to see if they are compatible with the way the code is currently organized. 

**assets** : Nothing important unless you make it important. :) 

**components** : Contains the ***datatable*** folder and the ***ui*** folder. 
- ***datatable*** : Contains the “data” portion of the datatable. This allows items to be searchable and the table to be manipulated. I recommend spending time to understand this, as you’ll have to work here to add features (like tagging items). 
> ⚠️ It might say “Payment” in some areas, feel free to change this, it’s just leftover from when I imported the table and didn’t change the original type name for the item.

> ⚠️ You'll also notice that some functions of the normal shadcn component are missing. I just determined that they were not needed and deleted them. If you find them necessary, you may reinclude them. Same for the NavBar.
- ***ui*** : The UI of the items. Navbar and the HTML of the datatable are here. More understandable. Come here to do any CSS styling. 

**lib** : Contains a utils.ts file. Nothing important to note about this currently. 

**pages** : Contains all pages for the platform. So the Home Page, Create Page (where you go to request a new item to be added to the database), and the Tool Detail Page. 

**App.tsx** : This is where the NavBar and different Pages are rendered.

**main.tsx** : This is the organization path for the pages to be rendered and also details the URL for the different pages.  
> ⚠️ Ideally, I wanted the tools to have the URL “tool/[ToolName]”, but couldn’t figure it out. Right now, it shows the ID instead.

# If You Need Anything At All!!!
my discord user is @loljuicey :) shoot me a message! 
