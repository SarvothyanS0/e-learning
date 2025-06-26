const courses = {
  1: {
    title: "HTML",
    video: "https://youtu.be/BTJGMuILg0Q?si=Rm-FifNanxEcS3ig"
  },
  2: {
    title: "CSS",
    video: "https://youtu.be/-G-zic_LS0A?si=SB-yckBSB9gSR7oc"
  },
  3: {
    title: "Advance Js",
    video: "https://youtu.be/EerdGm-ehJQ?si=-VuCSeNxKVifqnG7"
  },
  4: {
    title: "Advance Java",
    video: "https://youtu.be/xTtL8E4LzTQ?si=Oidau04TIahvOq-b"
  },
  5: {
    title: "Advance Python",
    video: "https://youtu.be/K5KVEU3aaeQ?si=5JmfwyxNyxdjmxiv"
  },
  6: {
    title: "Advance Mongo DB",
    video: "https://www.youtube.com/live/aDd4HiGQSIU?si=6bKzB59TkXDkOxTZ"
  },
  7: {
    title: "Advance React",
    video: "https://youtu.be/SqcY0GlETPk?si=Y9dUwp9pFbcyXmPQ"
  },
  8: {
    title: "Android App Development with Kotlin",
    video: "https://youtu.be/BBWyXo-3JGQ?si=1yqEtYyTpPqAxCQ8"
  },
  9: {
    title: "Cybersecurity",
    video: "https://youtu.be/PlHnamdwGmw?si=DrKoZ7Gvm_-VWis0"
  },
  10: {
    title: "Data Structures & Algorithms",
    video: "https://youtu.be/can_5EOB7K8?si=zhfJKEeX12-AMdyN"
  },
  11: {
    title: "UI/UX Design Fundamentals",
    video: "https://www.youtube.com/live/WylVZzSsavg?si=myWJ3gCefQkDiksg"
  },
  12: {
    title: "Graphic Design with Canva & Photoshop",
    video: "https://youtu.be/J0jE0OsF1zo?si=PUM7kIv_7Xweu26u",
  },
  13: {
    title: "3D Modeling with Blender",
    video: "https://youtu.be/SVl_tlbGrh4?si=xW9MWxkV4sBX-UnT"
  },
  14: {
    title: "Video Editing with Premiere Pro & After Effectst",
    video: "https://youtu.be/eCsM0r3RNc4?si=vC2sKOZNvIy_Ru9d",
  },
  15: {
    title: "Digital Illustration for Beginners",
    video: "https://youtu.be/Ib8UBwu3yGA?si=lEdnMllEz0tOFSp4"
  },
  16: {
    title: "Digital Marketing Masterclass",
    video: "https://youtu.be/DVGTCATj7F8?si=nkrZ3V9vT1cODmNB"
  },
  17: {
    title: "Entrepreneurship: From Idea to Launch",
    video: "https://youtu.be/EI6Fwzk_szU?si=wvZE9TxtszrJqAik"
  },
  18: {
    title: "Financial Literacy for Students",
    video: "https://youtu.be/ouvbeb2wSGA?si=9DLpUNBbIeAYr4Qe"
  },
  19: {
    title: "Excel & Data Analysis for Business",
    video: "https://youtu.be/qrbf9DtR3_c?si=gqy9ZP4WZEJcyyPw"
  },
  20: {
    title: "Project Management with Agile & Scrum",
    video: "https://youtu.be/VFQtSqChlsk?si=XMVKdQfKrgNW8S0E"
  },
  21: {
    title: "Spoken English & Communication Skills",
    video: "https://youtu.be/DTeqB-_9JXc?si=oX68UFUI_xoAKH-a"
  },
  22: {
    title: "Public Speaking & Presentation Mastery",
    video: "https://youtu.be/dHAbmoFHqgA?si=LzoGXR9Ud0pGoeYn"
  },
  23: {
    title: "Logical Reasoning & Aptitude for Competitive Exams",
    video: "https://youtu.be/Ahc7PhLObJI?si=Z4nLETC16vqF1vk0"
  },

  24: {
    title: "Basic Mathematics Refresher",
    video: "https://youtu.be/brvugRQVDLM?si=eH8r4H06L_13T5uN"
  },
  25: {
    title: "Career Planning & Resume Building",
    video: "https://youtu.be/Ll62YIkEvs8?si=JBGxiALFFQwtC3EA"
  },
  26: {
    title: "Learn Spanish for Beginners",
    video: "https://youtu.be/JTrjZNspkWA?si=88A1_WfqsJV-DXeh"
  },
  27: {
    title: "Spoken Hindi for Non-Native Speakers",
    video: "https://youtu.be/X8NvkltHXgY?si=pDkDrmN2HPv2go59"
  },
  28: {
    title: " Spoken French ",
    video: "https://youtu.be/Sk6YQynZ1h8?si=3G1MLFLQmLESAvNi"
  },
  29: {
    title: "Time Management for Students",
    video: "https://youtu.be/3s2gS3pFHPg?si=nVYs4zPaZH8HbkUc"
  },
  30: {
    title: "Mindfulness & Stress Management",
    video: "https://youtu.be/qUz93CyNIz0?si=5JfOnibTciJMKSpf"
  },
  31: {
    title: "Fitness at Home (No Equipment)",
    video: "https://youtu.be/lo792RZ245Y?si=eLSFSYwQAIDZYjD5"
  },
  32: {
    title: "Healthy Eating & Nutrition Basics",
    video: "https://youtu.be/5znuV7Iyrzs?si=owK7_ShAVbvi8Ekx"
  }
};

function loadCourse(id) {
  const course = courses[id];
  if (!course) return;

  document.getElementById("course-title").textContent = course.title;
  document.getElementById("video").src = course.video;

  const savedProgress = localStorage.getItem(`progress-${id}`) || 0;
  updateProgressBar(savedProgress);
}

function updateProgressBar(progress) {
  document.getElementById("progress-value").textContent = `${progress}%`;
  document.getElementById("progress-fill").style.width = `${progress}%`;
}

function increaseProgress() {
  const courseId = window.location.pathname.split("/").pop();
  let current = Number(localStorage.getItem(`progress-${courseId}`) || 0);
  if (current < 100) current += 10;
  localStorage.setItem(`progress-${courseId}`, current);
  updateProgressBar(current);
}
