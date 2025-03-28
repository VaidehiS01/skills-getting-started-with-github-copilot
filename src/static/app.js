function renderActivityCard(activity) {
  const card = document.createElement('div');
  card.className = 'activity-card';

  const participantsList = activity.participants.length
    ? activity.participants.map(participant => `<li>${participant}</li>`).join('')
    : '<li>No participants yet</li>'; // Fallback message

  card.innerHTML = `
    <h4>${activity.title}</h4>
    <p>${activity.description}</p>
    <div class="participants">
      <h5>Participants</h5>
      <ul>
        ${participantsList}
      </ul>
    </div>
  `;

  return card;
}

// Example usage
const activities = [
  {
    title: 'Yoga Class',
    description: 'A relaxing yoga session.',
    participants: ['Alice', 'Bob', 'Charlie']
  },
  {
    title: 'Cooking Workshop',
    description: 'Learn to cook delicious meals.',
    participants: ['Dave', 'Eve']
  }
];

const activitiesList = document.querySelector('#activities-list');
activitiesList.innerHTML = ''; // Clear the loading message
activities.forEach(activity => {
  const card = renderActivityCard(activity);
  activitiesList.appendChild(card);
});
