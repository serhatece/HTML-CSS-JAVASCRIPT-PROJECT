const notifContainer = document.querySelector('.notifContainer')
const button = document.getElementById('button')

const notifications = [
  'Whatsapp Notification',
  'Twitter Notification',
  'YouTube Notification',
  'LinkedIn Notification',
  'Medium Notification',
  'Instagram Notification',
]

const colors = ['black', 'red', 'orange', 'gray', 'blue', 'green', 'purple']

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('notif')
  notif.classList.add(getRandomColor())

  notif.innerText = getRandomNotif()

  notifContainer.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomNotif() {
  return notifications[Math.floor(Math.random() * notifications.length)]
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
