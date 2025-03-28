function renderActivityCard(activity) {
  const card = document.createElement('div');
  card.className = 'activity-card';

  card.innerHTML = `
    <h4>${activity.title}</h4>
    <p>${activity.description}</p>
    <div class="participants">
      <h5>Participants</h5>
      <ul>
        ${activity.participants.map(participant => `<li>${participant}</li>`).join('')}
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

const main = document.querySelector('main');
activities.forEach(activity => {
  const card = renderActivityCard(activity);
  main.appendChild(card);
}