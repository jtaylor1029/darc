---
layout: post
tag: resources
title:  "Setting up Android Studio"
image:  "/assets/posts/2016-10-03-install-android-studio/android.png"
date:   2016-10-03 15:30:50 -0400
---

1) Download [Android Studio][android-studio] and install it. 


2) Open Terminal (In Finder, go to Applications > Utilities > Terminal).


3) Enter the following lines into the terminal window: (Note: copy the commands **exactly**. The `~` character is at the top left of the keyboard).

  - You may need to install [git][install-git] if you have not done so already.

```
mkdir ~/workspace
cd ~/workspace
git clone https://github.com/darobotics/ftc_app
```


4) Open Android Studio (In the Finder go to Applications > Android Studio). 


5) Click `Import project (Eclipse ADT, Gradle, etc.)`. It is in `/Users/username/workspace/ftc_app`. ![Welcome][welcome]


6) When the project opens, click on “Install missing platform(s) and sync project”.

  - If you see “Failed to sync Gradle project ‘ftc_app’”, this is normal. Click the blue link at the bottom to fix the error. You may need to do this more than once. ![Sync-error][sync-error]

  - If you see “Missing SDK”, continue to press next. ![SDK-error][sdk-error]

7) Complete!


[android-studio]: https://developer.android.com/studio/index.html
[install-git]: https://git-scm.com/downloads
[welcome]: {{ site.url }}/assets/posts/2016-10-03-install-android-studio/welcome.png
[sdk-error]: {{ site.url }}/assets/posts/2016-10-03-install-android-studio/sdk-error.png
[sync-error]: {{ site.url }}/assets/posts/2016-10-03-install-android-studio/sync-error.png
