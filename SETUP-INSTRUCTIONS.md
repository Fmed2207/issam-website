# Setup Instructions for Roline Website

## 1. Contact Form Setup (Formspree)

To receive messages from the contact form:

1. Go to https://formspree.io and create a free account
2. Create a new form and copy the Form ID (looks like: `xyzabcde`)
3. Open `client/pages/Contact.tsx`
4. Find line 14 and replace `YOUR_FORMSPREE_ID` with your actual form ID:
   ```typescript
   const FORMSPREE_FORM_ID = "xyzabcde"; // Your actual ID here
   ```
5. Messages will be sent to your email address

---

## 2. Blog Setup (Sanity CMS)

To allow your uncle to write and publish blog posts:

### Step 1: Create Sanity Account
1. Go to https://www.sanity.io/manage
2. Create a free account
3. Create a new project (name it "Roline Blog" or similar)
4. Copy your Project ID from the project settings

### Step 2: Update Website Configuration
1. Open `client/lib/sanity.ts`
2. Find line 8 and replace `YOUR_PROJECT_ID`:
   ```typescript
   projectId: "abc123xyz", // Your actual project ID
   ```

### Step 3: Set Up Sanity Studio (Admin Panel)
Run these commands in a new terminal:

```bash
# Create a new folder for the blog admin
cd "C:\Users\Lenovo\Downloads"
npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production --template blog
```

Follow the prompts to set up the studio. This creates a user-friendly interface where your uncle can:
- Write blog posts with a rich text editor
- Upload images
- Manage categories
- Publish/unpublish posts

### Step 4: Deploy Sanity Studio
```bash
cd your-sanity-studio-folder
npx sanity deploy
```

This gives you a URL like `https://your-project.sanity.studio` where your uncle can log in and manage the blog.

---

## Current Status

- Website is fully functional with demo/static content
- Contact form UI is ready (needs Formspree ID to send emails)
- Blog pages are ready (needs Sanity project ID to fetch real posts)

---

## Contact Information Already Configured

- Email: Issam_berrhazi@hotmail.com
- Phone 1: +212 6 01 70 02 02
- Phone 2: +212 6 37 91 97 39
- WhatsApp: +212 6 01 70 02 02
- LinkedIn: https://www.linkedin.com/in/issam-berrhazi-1636ab175
- Instagram: https://www.instagram.com/issamberrhazi
- Facebook: https://www.facebook.com/share/1anETqmYrU/
- X (Twitter): https://x.com/FarmsManager

---

## Need Help?

Refer to:
- Formspree docs: https://help.formspree.io/
- Sanity docs: https://www.sanity.io/docs
