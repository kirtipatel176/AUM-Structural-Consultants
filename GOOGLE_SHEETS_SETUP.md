# Contact Form -> Google Sheets Setup Guide

This guide explains how to connect your website's contact form to a Google Sheet so all submissions are automatically saved.

## Step 1: Create the Google Sheet & Script

1.  Go to **[Google Sheets](https://sheets.google.com)** and create a new blank spreadsheet.
2.  Name it something like "AUM Site Inquiries".
3.  In the menu, go to **Extensions** > **Apps Script**.
4.  This will open a new tab with a code editor.

## Step 2: Add the Script Code

1.  Delete any code processing in the `Code.gs` file.
2.  Copy the **entire** content of `google-apps-script.js` from this project (located in the root folder).
3.  Paste it into the Google Apps Script editor.
4.  Press `Cmd + S` (Mac) or `Ctrl + S` (Windows) to **Save**.

## Step 3: Deploy as Web App

1.  In the top right corner, click the blue **Deploy** button.
2.  Select **New deployment**.
3.  Click the "Select type" gear icon (⚙️) next to "Select type" and choose **Web app**.
4.  Fill in the details:
    *   **Description**: Contact Form v1
    *   **Execute as**: Me (your email address)
    *   **Who has access**: **Anyone** (This is critical so your site can send data without visitors logging in).
5.  Click **Deploy**.
6.  You might be asked to authorize the script.
    *   Click "Review permissions".
    *   Choose your account.
    *   If you see "Google hasn't verified this app", click **Advanced** > **Go to (Script Name) (unsafe)**.
    *   Click **Allow**.

## Step 4: Get the URL

1.  After deployment is successful, you will see a **Web App URL**.
2.  **Copy** this URL. It usually starts with `https://script.google.com/macros/s/...`.

## Step 5: Connect to Your Website

1.  Open the file `.env.local` in your project root.
2.  Find (or add) the variable `VITE_GOOGLE_SCRIPT_URL`.
3.  Paste your URL as the value:
    ```env
    VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_LONG_SCRIPT_ID_HERE/exec
    ```
4.  **Restart your server**: In your terminal, stop the current server (Ctrl+C) and run `npm run dev` again.

## Step 6: Test It

1.  Go to your website's "Contact Us" section.
2.  Fill out the form.
3.  Click Send.
4.  Check your Google Sheet. You should see a new row with the data!
