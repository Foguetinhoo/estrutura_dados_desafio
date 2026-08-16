const exercises = document.querySelectorAll(".exercise");
exercises.forEach(link => {
    link.addEventListener('click', e => {
        exercises.forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add("active")
    });
  });